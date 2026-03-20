<script>
    import { reveal } from "$lib/reveal";
    
    let searchQuery = $state("");
    let filterStatus = $state("All");

    let users = $state([
        { id: "USR-001", name: "John Doe", email: "john@example.com", phone: "+233 24 123 4567", status: "Active", joined: "Jan 12, 2026", balance: "₵1,250.00" },
        { id: "USR-002", name: "Jane Smith", email: "jane@example.com", phone: "+233 50 987 6543", status: "Active", joined: "Feb 05, 2026", balance: "₵430.50" },
        { id: "USR-003", name: "Kofi Annan", email: "kofi@example.com", phone: "+233 27 555 0199", status: "Banned", joined: "Feb 20, 2026", balance: "₵5.00" },
        { id: "USR-004", name: "Ama Serwaa", email: "ama@example.com", phone: "+233 24 000 1111", status: "Pending", joined: "Mar 01, 2026", balance: "₵0.00" },
        { id: "USR-005", name: "Kwame Nkrumah", email: "kwame@example.com", phone: "+233 55 222 3333", status: "Active", joined: "Mar 15, 2026", balance: "₵8,900.20" },
        { id: "USR-001", name: "John Doe", email: "john@example.com", phone: "+233 24 123 4567", status: "Active", joined: "Jan 12, 2026", balance: "₵1,250.00" },
        { id: "USR-002", name: "Jane Smith", email: "jane@example.com", phone: "+233 50 987 6543", status: "Active", joined: "Feb 05, 2026", balance: "₵430.50" },
    ]);

    const filteredUsers = $derived(
        users.filter(u => {
            const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = filterStatus === "All" || u.status === filterStatus;
            return matchesSearch && matchesStatus;
        })
    );
</script>

<style lang="postcss">
    @reference "../../../styles/global.css";

    .page_header {
        @apply flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10;
    }
    .page_header h1 {
        @apply text-3xl font-extrabold text-[#121063] poppins-extrabold tracking-tight;
    }

    .controls_bar {
        @apply bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-wrap items-center gap-4 mb-8;
    }

    .search_input {
        @apply flex-grow bg-gray-50 border border-gray-100 px-6 py-3 rounded-2xl text-sm font-medium focus:outline-none focus:border-[#3ab7bf] transition-all;
    }

    .filter_select {
        @apply bg-gray-50 border border-gray-100 px-6 py-3 rounded-2xl text-sm font-bold text-[#121063] poppins-bold cursor-pointer outline-none;
    }

    .table_card { @apply bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden; }
    
    table { @apply w-full text-left; }
    thead { @apply bg-gray-50 text-[10px] uppercase font-black text-gray-400 tracking-widest; }
    th { @apply px-8 py-5; }
    td { @apply px-8 py-6 text-sm font-medium border-t border-gray-50 text-[#626973] transition-colors hover:bg-gray-50/50; }

    .user_info { @apply flex flex-col; }
    .user_name { @apply text-sm font-black text-[#121063] poppins-black; }
    .user_email { @apply text-[11px] text-gray-400; }

    .status_tag { @apply px-3 py-1 rounded-full text-[10px] font-bold; }
    .status_active { @apply bg-green-50 text-green-600; }
    .status_banned { @apply bg-red-50 text-red-600; }
    .status_pending { @apply bg-orange-50 text-orange-600; }

    .action_btn {
        @apply p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#121063];
    }
</style>

<div class="page_header" use:reveal={{type: 'fadeInDown'}}>
    <div>
        <h1 class="poppins-extrabold">User Management</h1>
        <p class="text-xs text-gray-400 font-bold poppins-bold uppercase tracking-widest mt-1">Total Registered Users: {users.length}</p>
    </div>
    <button class="bg-[#3ab7bf] text-white px-8 py-4 rounded-2xl text-sm font-bold poppins-bold shadow-xl shadow-[#3ab7bf]/20 hover:scale-105 transition-all">
        + Add New User
    </button>
</div>

<!-- Search & Filtering -->
<div class="controls_bar" use:reveal={{type: 'fadeInUp'}}>
    <input type="text" placeholder="Search by name, email, or phone..." class="search_input poppins-medium" bind:value={searchQuery} />
    <select class="filter_select" bind:value={filterStatus}>
        <option value="All">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Banned">Banned</option>
    </select>
    <button class="bg-gray-100 text-[#121063] px-6 py-3 rounded-2xl text-sm font-bold poppins-bold hover:bg-gray-200 transition-all">Bulk Actions</button>
</div>

<!-- Users Table -->
<div class="table_card" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>
    <table>
        <thead>
            <tr>
                <th>User Identity</th>
                <th>Phone Number</th>
                <th>Wallet Balance</th>
                <th>Joining Date</th>
                <th>Status</th>
                <th class="text-right">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each filteredUsers as user, i}
                <tr use:reveal={{type: 'fadeIn', delay: `${i * 0.05}s`}}>
                    <td>
                        <div class="user_info">
                            <span class="user_name">{user.name}</span>
                            <span class="user_email poppins-medium">{user.email}</span>
                        </div>
                    </td>
                    <td class="poppins-bold text-[#121063]">{user.phone}</td>
                    <td class="font-black text-[#121063]">{user.balance}</td>
                    <td class="text-xs text-gray-400">{user.joined}</td>
                    <td>
                        <span class="status_tag status_{user.status.toLowerCase()}">{user.status}</span>
                    </td>
                    <td>
                        <div class="flex justify-end gap-2">
                            <button class="action_btn" title="View Profile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </button>
                            <button class="action_btn" title="Edit User">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </button>
                            <button class="action_btn text-red-400 hover:text-red-600" title="Ban User">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
