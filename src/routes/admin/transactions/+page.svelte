<script>
    import { reveal } from "$lib/reveal";
    
    let activeTab = $state("All");
    let searchId = $state("");

    const transactions = $state([
        { id: "JBTX492042", user: "John Doe", type: "MTN Data", amount: "₵50.00", comm: "₵0.50", status: "Success", time: "2026-03-20 10:45", network: "MTN" },
        { id: "JBTX492041", user: "Jane Smith", type: "ECG Prepaid", amount: "₵200.00", comm: "₵2.00", status: "Success", time: "2026-03-20 10:42", network: "Utility" },
        { id: "JBTX492040", user: "Kofi Annan", type: "Telecel Airtime", amount: "₵10.00", comm: "₵0.10", status: "Pending", time: "2026-03-20 10:40", network: "Telecel" },
        { id: "JBTX492039", user: "Ama Serwaa", type: "DSTV Premium", amount: "₵450.00", comm: "₵4.50", status: "Failed", time: "2026-03-20 10:35", network: "Bill" },
        { id: "JBTX492038", user: "Kwame Nkrumah", type: "AirtelTigo Data", amount: "₵25.00", comm: "₵0.25", status: "Success", time: "2026-03-20 10:30", network: "AirtelTigo" },
        { id: "JBTX492037", user: "Manfred Kwami", type: "MTN Airtime", amount: "₵5.00", comm: "₵0.05", status: "Success", time: "2026-03-20 10:25", network: "MTN" },
    ]);

    const filteredTransactions = $derived(
        transactions.filter(t => {
            const matchesSearch = t.id.toLowerCase().includes(searchId.toLowerCase()) || t.user.toLowerCase().includes(searchId.toLowerCase());
            const matchesTab = activeTab === "All" || t.status === activeTab;
            return matchesSearch && matchesTab;
        })
    );
</script>

<style lang="postcss">
    @reference "../../../styles/global.css";

    .page_header {
        @apply flex items-center justify-between mb-10;
    }
    .page_header h1 {
        @apply text-3xl font-extrabold text-[#121063] tracking-tight;
    }

    .tabs_bar {
        @apply flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none;
    }
    .tab_btn {
        @apply px-6 py-3 rounded-full text-xs font-bold transition-all whitespace-nowrap;
    }
    .tab_btn.active {
        @apply bg-[#121063] text-white shadow-xl shadow-[#121063]/20;
    }
    .tab_btn:not(.active) {
        @apply bg-white border border-gray-100 text-[#121063] hover:bg-gray-50;
    }

    .action_controls {
        @apply flex flex-col md:flex-row gap-4 mb-8;
    }
    .search_tx {
        @apply flex-grow bg-white border border-gray-100 px-6 py-4 rounded-2xl text-sm font-medium shadow-sm focus:outline-none focus:border-[#121063] transition-all;
    }

    .tx_table_card { @apply bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden; }
    table { @apply w-full text-left; }
    thead { @apply bg-gray-50 text-[10px] uppercase font-black text-gray-400 tracking-widest; }
    th { @apply px-8 py-5; }
    td { @apply px-8 py-6 text-sm font-medium border-t border-gray-50; }

    .tx_id { @apply text-xs font-black text-[#121063] bg-[#f8fafc] px-3 py-1 rounded-lg border border-gray-100; }
    .tx_user { @apply font-bold text-[#121063]; }
    .tx_amt { @apply text-lg font-black text-[#121063]; }
    .tx_comm { @apply text-[10px] text-teal-500 font-bold block mt-1; }

    .status_badge { @apply px-3 py-1 rounded-full text-[10px] font-bold; }
    .status_success { @apply bg-green-50 text-green-600; }
    .status_pending { @apply bg-orange-50 text-orange-600; }
    .status_failed { @apply bg-red-50 text-red-600; }

    .network_icon { @apply w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white; }
    .mtn_bg { @apply bg-yellow-400 text-black; }
    .telecel_bg { @apply bg-red-600; }
    .airteltigo_bg { @apply bg-blue-500; }
    .utility_bg { @apply bg-gray-800; }
    .bill_bg { @apply bg-indigo-600; }
</style>

<div class="page_header" use:reveal={{type: 'fadeInDown'}}>
    <h1 class="poppins-extrabold">Global Transactions</h1>
    <div class="flex gap-2">
        <button class="bg-[#121063] text-white px-6 py-3 rounded-2xl text-xs font-bold poppins-bold shadow-lg shadow-[#121063]/20 flex items-center gap-2">
            📊 Reconciliation
        </button>
    </div>
</div>

<!-- Tabs for Status filtering -->
<div class="tabs_bar" use:reveal={{type: 'fadeInUp'}}>
    {#each ["All", "Success", "Pending", "Failed"] as tab}
        <button class="tab_btn {activeTab === tab ? 'active' : ''} poppins-bold" onclick={() => activeTab = tab}>{tab}</button>
    {/each}
</div>

<!-- Search & Controls -->
<div class="action_controls" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
    <input type="text" placeholder="Search by Transaction ID or Username..." class="search_tx poppins-medium" bind:value={searchId} />
    <button class="bg-white border border-gray-100 px-8 py-4 rounded-2xl text-xs font-bold text-[#121063] poppins-bold shadow-sm whitespace-nowrap">
        📅 Filter by Date
    </button>
</div>

<!-- Transactions Table -->
<div class="tx_table_card" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>
    <table>
        <thead>
            <tr>
                <th>Tx ID</th>
                <th>Network</th>
                <th>User / Customer</th>
                <th>Service Details</th>
                <th>Volume (GHS)</th>
                <th>Status</th>
                <th>Timestamp</th>
            </tr>
        </thead>
        <tbody class="poppins-medium">
            {#each filteredTransactions as tx, i}
                <tr use:reveal={{type: 'fadeIn', delay: `${i * 0.05}s`}} class="group">
                    <td><span class="tx_id">{tx.id}</span></td>
                    <td>
                        <div class="network_icon {tx.network.toLowerCase()}_bg">
                            {tx.network[0]}
                        </div>
                    </td>
                    <td>
                        <span class="tx_user">{tx.user}</span>
                        <span class="block text-[10px] text-gray-400">{tx.network} Payment</span>
                    </td>
                    <td>
                        <p class="text-[13px] text-[#121063] font-bold">{tx.type}</p>
                        <p class="text-[10px] text-gray-400">Direct Purchase</p>
                    </td>
                    <td>
                        <span class="tx_amt">{tx.amount}</span>
                        <span class="tx_comm">+{tx.comm} Revenue</span>
                    </td>
                    <td>
                        <span class="status_badge status_{tx.status.toLowerCase()}">{tx.status}</span>
                    </td>
                    <td>
                        <span class="text-xs text-gray-400">{tx.time}</span>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<div class="mt-8 flex justify-center" use:reveal={{type: 'fadeInUp', delay: '0.5s'}}>
    <button class="text-[#121063] font-bold text-xs uppercase tracking-widest hover:underline poppins-bold">Load More Past Records</button>
</div>
