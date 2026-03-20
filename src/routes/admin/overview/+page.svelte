<script>
    import { reveal } from "$lib/reveal";
    
    let stats = $state([
        { title: "Total Revenue", value: "₵1,240,500", trend: "+12.5%", color: "teal", icon: "💰" },
        { title: "Active Users", value: "52,430", trend: "+8.2%", color: "blue", icon: "👥" },
        { title: "Success Rate", value: "99.9%", trend: "0.0%", color: "green", icon: "⚡" },
        { title: "Pending Tickets", value: "14", trend: "-5", color: "orange", icon: "🎟️" },
    ]);

    let recentTransactions = $state([
        { id: "#TRX-9842", user: "John Doe", type: "MTN Data", amount: "₵100.00", status: "Success", time: "2 mins ago" },
        { id: "#TRX-9841", user: "Jane Smith", type: "ECG Bill", amount: "₵500.00", status: "Success", time: "5 mins ago" },
        { id: "#TRX-9840", user: "Kofi Annan", type: "Telecel Airtime", amount: "₵20.00", status: "Pending", time: "12 mins ago" },
        { id: "#TRX-9839", user: "Ama Serwaa", type: "DSTV Premium", amount: "₵450.00", status: "Failed", time: "25 mins ago" },
        { id: "#TRX-9838", user: "Kwame Nkrumah", type: "MTN Data", amount: "₵50.00", status: "Success", time: "45 mins ago" },
    ]);
</script>

<style lang="postcss">
    @reference "../../styles/global.css";

    .dashboard_header {
        @apply flex items-center justify-between mb-10;
    }
    .dashboard_header h1 {
        @apply text-3xl font-extrabold text-[#121063] tracking-tight;
    }

    .stats_grid {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12;
    }

    .stat_card {
        @apply bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-xl transition-all hover:-translate-y-1;
    }
    
    .stat_card .icon_wrap {
        @apply w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner;
    }
    .teal_icon { @apply bg-teal-50 text-teal-600; }
    .blue_icon { @apply bg-blue-50 text-blue-600; }
    .green_icon { @apply bg-green-50 text-green-600; }
    .orange_icon { @apply bg-orange-50 text-orange-600; }

    .stat_card .label { @apply text-xs font-bold text-gray-400 uppercase tracking-widest; }
    .stat_card .value { @apply text-2xl font-black text-[#121063]; }
    .stat_card .trend { @apply text-xs font-bold px-2 py-1 rounded-full w-fit; }
    .trend_pos { @apply bg-green-50 text-green-600; }
    .trend_neg { @apply bg-red-50 text-red-600; }

    /* Tables & Charts Mockup area */
    .dashboard_flex {
        @apply flex flex-col lg:flex-row gap-8;
    }

    .main_table_card { @apply flex-grow bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden; }
    .card_header { @apply p-6 border-b border-gray-50 flex items-center justify-between; }
    .card_header h3 { @apply text-lg font-bold text-[#121063]; }

    table { @apply w-full text-left; }
    thead { @apply bg-gray-50 text-[10px] uppercase font-black text-gray-400 tracking-widest; }
    th { @apply px-6 py-4; }
    td { @apply px-6 py-5 text-sm font-medium border-t border-gray-50 text-[#626973]; }

    .status_badge { @apply px-3 py-1 rounded-full text-[10px] font-bold; }
    .status_success { @apply bg-green-50 text-green-600; }
    .status_pending { @apply bg-orange-50 text-orange-600; }
    .status_failed { @apply bg-red-50 text-red-600; }

    .chart_mock {
        @apply w-full lg:w-96 bg-[#121063] rounded-3xl p-8 text-white flex flex-col gap-6 relative overflow-hidden;
    }
    .chart_mock::after {
        content: '';
        @apply absolute -bottom-20 -right-20 w-64 h-64 bg-[#3ab7bf] opacity-10 rounded-full blur-[80px];
    }
</style>

<div class="dashboard_header" use:reveal={{type: 'fadeInDown'}}>
    <h1 class="poppins-extrabold">Dashboard Overview</h1>
    <div class="flex gap-2">
        <button class="bg-[#121063] text-white px-5 py-2.5 rounded-full text-xs font-bold poppins-bold shadow-lg shadow-[#121063]/20">Generate Report</button>
        <button class="bg-white border border-gray-100 px-5 py-2.5 rounded-full text-xs font-bold text-[#121063]">Export Data</button>
    </div>
</div>

<!-- Stats Grid -->
<div class="stats_grid">
    {#each stats as stat, i}
        <div class="stat_card" use:reveal={{type: 'fadeInUp', delay: `${i * 0.1}s`}}>
            <div class="flex justify-between items-start">
                <div class="icon_wrap {stat.color}_icon">{stat.icon}</div>
                <div class="trend {stat.trend.startsWith('+') ? 'trend_pos' : 'trend_neg'}">{stat.trend}</div>
            </div>
            <div>
                <p class="label poppins-bold">{stat.title}</p>
                <p class="value poppins-black">{stat.value}</p>
            </div>
        </div>
    {/each}
</div>

<div class="dashboard_flex">
    <!-- Recent Transactions Table -->
    <div class="main_table_card" use:reveal={{type: 'slideInLeft', delay: '0.4s'}}>
        <div class="card_header">
            <h3 class="poppins-bold">Recent Transactions</h3>
            <button class="text-[#3ab7bf] text-xs font-bold hover:underline">View All</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>User</th>
                    <th>Service Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody class="poppins-medium">
                {#each recentTransactions as trx}
                    <tr>
                        <td class="text-[#121063] font-bold">{trx.id}</td>
                        <td>{trx.user}</td>
                        <td>{trx.type}</td>
                        <td class="font-black">{trx.amount}</td>
                        <td>
                            <span class="status_badge status_{trx.status.toLowerCase()}">{trx.status}</span>
                        </td>
                        <td class="text-[10px] text-gray-400">{trx.time}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <!-- Revenue Insights Mockup -->
    <div class="chart_mock" use:reveal={{type: 'slideInRight', delay: '0.5s'}}>
        <h3 class="text-lg font-bold poppins-bold">Revenue Target</h3>
        <p class="text-xs text-white/60 mb-8">You are at 85% of your monthly goal.</p>
        
        <div class="flex-grow flex items-center justify-center">
            <!-- Mock Circular Progress -->
            <div class="w-48 h-48 rounded-full border-[15px] border-white/5 flex items-center justify-center relative">
                <div class="absolute inset-[15px] rounded-full border-[15px] border-[#3ab7bf] border-t-transparent animate-spin" style="animation-duration: 3s;"></div>
                <div class="text-center">
                    <p class="text-3xl font-black">₵1.2M</p>
                    <p class="text-[10px] text-white/40 uppercase tracking-widest font-black">Collected</p>
                </div>
            </div>
        </div>

        <button class="w-full py-4 bg-[#3ab7bf] rounded-2xl font-bold text-sm shadow-xl shadow-[#3ab7bf]/20 transition-all hover:scale-105 active:scale-95">Upgrade Capacity</button>
    </div>
</div>
