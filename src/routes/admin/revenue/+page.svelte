<script>
    import { reveal } from "$lib/reveal";
    import { adminState } from "$lib/state/admin.svelte";
    
    let stats = $derived([
        { label: "Gross Volume", value: adminState.revenueStats.totalVolume, color: "blue" },
        { label: "Net Platform Fees", value: adminState.revenueStats.platformFee, color: "teal" },
        { label: "Gateway Fees", value: "₵12,405.00", color: "red" },
        { label: "Total Profit", value: "₵49,845.00", color: "green" },
    ]);

    let monthlyData = $state([
        { month: "January", volume: "₵850k", growth: "+15%" },
        { month: "February", volume: "₵1.1M", growth: "+30%" },
        { month: "March", volume: "₵1.24M", growth: adminState.revenueStats.growthRate },
    ]);
</script>

<style lang="postcss">
    @reference "../../../styles/global.css";

    .page_header {
        @apply flex items-center justify-between mb-10;
    }
    .page_header h1 {
        @apply text-3xl font-extrabold text-[#121063] tracking-tight;
    }

    .revenue_grid {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12;
    }

    .rev_card {
        @apply bg-[#121063] rounded-3xl p-8 text-white relative overflow-hidden transition-all hover:scale-105;
    }
    .rev_card.teal { @apply bg-[#3ab7bf]; }
    .rev_card.red { @apply bg-red-600; }
    .rev_card.green { @apply bg-green-600; }

    .rev_card .label { @apply text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2; }
    .rev_card .value { @apply text-2xl font-black; }

    .blob {
        @apply absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-[20px];
    }

    .main_content_flex {
        @apply flex flex-col lg:flex-row gap-8;
    }

    .forecast_card {
        @apply flex-grow bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col gap-10;
    }

    .forecast_header { @apply flex items-center justify-between; }
    .forecast_header h3 { @apply text-2xl font-extrabold text-[#121063]; }

    .chart_placeholder {
        @apply flex-grow w-full min-h-[300px] border-b-2 border-l-2 border-gray-50 flex items-end justify-around px-8 pb-4 relative;
    }

    /* Mock Bars */
    .bar_item {
        @apply w-16 bg-[#121063] rounded-t-2xl relative transition-all duration-700;
        height: 40%;
    }
    .bar_item.active { @apply bg-[#3ab7bf] h-[80%]; }
    .bar_item::after {
        content: attr(data-label);
        @apply absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap;
    }

    .insights_sidebar {
        @apply w-full lg:w-96 bg-gray-900 rounded-[2.5rem] p-10 text-white flex flex-col gap-10;
    }

    .insight_row { @apply flex flex-col gap-4 py-8 border-b border-white/5; }
    .insight_row:last-child { @apply border-none; }
    .insight_row .month { @apply text-xl font-bold; }
    .insight_row .stats { @apply flex items-center justify-between text-xs font-bold text-white/50 uppercase; }
    .insight_row .growth { @apply text-teal-400 font-black; }
</style>

<div class="page_header" use:reveal={{type: 'fadeInDown'}}>
    <h1 class="poppins-extrabold">Financial Insights</h1>
    <div class="flex gap-2">
        <button class="bg-[#121063] text-white px-8 py-4 rounded-2xl text-sm font-bold poppins-bold shadow-xl shadow-[#121063]/20 hover:scale-105 transition-all">Download P&L Statement</button>
    </div>
</div>

<div class="revenue_grid">
    {#each stats as stat, i}
        <div class="rev_card {stat.color}" use:reveal={{type: 'fadeInUp', delay: `${i * 0.1}s`}}>
            <div class="blob"></div>
            <p class="label">{stat.label}</p>
            <p class="value">{stat.value}</p>
        </div>
    {/each}
</div>

<div class="main_content_flex">
    <div class="forecast_card" use:reveal={{type: 'slideInLeft', delay: '0.4s'}}>
        <div class="forecast_header">
            <div>
                <h3 class="poppins-extrabold">Transaction Volume Forecast</h3>
                <p class="text-xs text-gray-400 font-bold poppins-bold uppercase tracking-widest mt-2">Projected vs Actual Revenue</p>
            </div>
            <div class="flex gap-4">
                <div class="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 tracking-widest"><span class="w-2 h-2 rounded-full bg-[#121063]"></span> Actual</div>
                <div class="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 tracking-widest"><span class="w-2 h-2 rounded-full bg-[#3ab7bf]"></span> Forecast</div>
            </div>
        </div>

        <div class="chart_placeholder">
            <div class="bar_item" data-label="Jan" style="height: 50%;"></div>
            <div class="bar_item" data-label="Feb" style="height: 65%;"></div>
            <div class="bar_item active" data-label="Mar (Current)" style="height: 85%;"></div>
            <div class="bar_item" data-label="Apr (Proj)" style="height: 70%; opacity: 0.3;"></div>
            <div class="bar_item" data-label="May (Proj)" style="height: 95%; opacity: 0.3;"></div>
        </div>

        <div class="grid grid-cols-2 gap-8 mt-4">
            <div class="p-8 bg-gray-50 rounded-3xl flex flex-col gap-2">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold">Average Transaction</span>
                <span class="text-2xl font-black text-[#121063] poppins-black">₵145.20</span>
            </div>
            <div class="p-8 bg-gray-50 rounded-3xl flex flex-col gap-2">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold">Highest Billing Service</span>
                <span class="text-2xl font-black text-[#121063] poppins-black">MTN Data</span>
            </div>
        </div>
    </div>

    <aside class="insights_sidebar" use:reveal={{type: 'slideInRight', delay: '0.5s'}}>
        <h3 class="text-2xl font-extrabold poppins-extrabold">Monthly Summary</h3>
        <p class="text-xs text-white/50 font-bold poppins-bold uppercase tracking-widest">Q1 2026 Reports</p>

        <div class="flex flex-col">
            {#each monthlyData as data}
                <div class="insight_row">
                    <span class="month poppins-bold">{data.month}</span>
                    <div class="stats poppins-bold">
                        <span>Volume: {data.volume}</span>
                        <span class="growth">{data.growth} growth</span>
                    </div>
                </div>
            {/each}
        </div>

        <button class="w-full mt-auto py-5 bg-[#3ab7bf] text-white rounded-2xl font-black text-sm shadow-xl shadow-[#3ab7bf]/20 transition-all hover:scale-105 active:scale-95">Verify Account Balance</button>
    </aside>
</div>
