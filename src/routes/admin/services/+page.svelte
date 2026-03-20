<script>
    import { reveal } from "$lib/reveal";
    
    let services = $state([
        { id: "S-01", name: "MTN Airtime", category: "Airtime", status: "Active", commission: "3.5%", load: "Low" },
        { id: "S-02", name: "MTN Data", category: "Data", status: "Active", commission: "5.0%", load: "High" },
        { id: "S-03", name: "Telecel Airtime", category: "Airtime", status: "Active", commission: "4.0%", load: "Medium" },
        { id: "S-04", name: "Telecel Data", category: "Data", status: "Active", commission: "6.0%", load: "Low" },
        { id: "S-05", name: "AirtelTigo Airtime", category: "Airtime", status: "Active", commission: "4.5%", load: "Medium" },
        { id: "S-06", name: "AirtelTigo Data", category: "Data", status: "Degraded", commission: "7.0%", load: "Critical" },
        { id: "S-07", name: "ECG Postpaid", category: "Utility", status: "Active", commission: "₵1.00", load: "Low" },
        { id: "S-08", name: "GWCL Water", category: "Utility", status: "Maintenance", commission: "₵1.50", load: "N/A" },
    ]);

    const toggleStatus = (id) => {
        const s = services.find(x => x.id === id);
        if (s) {
            s.status = s.status === "Active" ? "Maintenance" : "Active";
        }
    }
</script>

<style lang="postcss">
    @reference "../../../styles/global.css";

    .page_header {
        @apply flex items-center justify-between mb-10;
    }
    .page_header h1 {
        @apply text-3xl font-extrabold text-[#121063] tracking-tight;
    }

    .service_grid {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
    }

    .service_card {
        @apply bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1;
    }

    .service_icon {
        @apply w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl shadow-inner border border-white;
    }

    .status_label { @apply text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full; }
    .status_active { @apply bg-green-50 text-green-600; }
    .status_maintenance { @apply bg-orange-50 text-orange-600; }
    .status_degraded { @apply bg-red-50 text-red-600; }

    .service_title { @apply text-xl font-extrabold text-[#121063]; }
    .service_meta { @apply text-xs text-gray-400 font-bold uppercase tracking-tight flex items-center gap-2; }

    .config_row { @apply flex items-center justify-between py-3 border-t border-gray-50 mt-4; }
    .config_label { @apply text-xs font-bold text-gray-400; }
    .config_value { @apply text-sm font-black text-[#121063]; }

    /* Custom Toggle Switch */
    .switch {
        @apply relative inline-block w-12 h-6 cursor-pointer;
    }
    .switch input { @apply opacity-0 w-0 h-0; }
    .slider {
        @apply absolute inset-0 bg-gray-100 rounded-full transition-all duration-300;
    }
    .slider:before {
        @apply absolute content-[''] h-4 w-4 left-1 bottom-1 bg-white rounded-full transition-all duration-300 shadow-sm border border-gray-100;
    }
    input:checked + .slider { @apply bg-[#3ab7bf]; }
    input:checked + .slider:before { @apply translate-x-6 bg-white; }
</style>

<div class="page_header" use:reveal={{type: 'fadeInDown'}}>
    <div>
        <h1 class="poppins-extrabold">Service Control Center</h1>
        <p class="text-xs text-gray-400 font-bold poppins-bold uppercase tracking-widest mt-1">Live Endpoint Monitoring</p>
    </div>
    <div class="flex gap-2">
        <button class="bg-red-500 text-white px-6 py-3 rounded-2xl text-xs font-bold poppins-bold shadow-lg shadow-red-500/20">🚨 Global Kill Switch</button>
    </div>
</div>

<div class="service_grid">
    {#each services as service, i}
        <div class="service_card" use:reveal={{type: 'fadeInUp', delay: `${i * 0.1}s`}}>
            <div class="flex justify-between items-start">
                <div class="service_icon">
                    {#if service.category === 'Airtime'}📱{:else if service.category === 'Data'}🛜{:else}⚡{/if}
                </div>
                <span class="status_label status_{service.status.toLowerCase()}">{service.status}</span>
            </div>

            <div>
                <h3 class="service_title poppins-extrabold">{service.name}</h3>
                <div class="service_meta poppins-bold">
                    <span>{service.category}</span>
                    <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span class="flex items-center gap-1">
                        Load: 
                        <span class="{service.load === 'High' || service.load === 'Critical' ? 'text-red-500' : 'text-green-500'}">
                            {service.load}
                        </span>
                    </span>
                </div>
            </div>

            <div class="flex flex-col">
                <div class="config_row">
                    <span class="config_label poppins-bold">Revenue Comm.</span>
                    <span class="config_value poppins-black">{service.commission}</span>
                </div>
                <div class="config_row">
                    <span class="config_label poppins-bold">Service Endpoint</span>
                    <label class="switch">
                        <input type="checkbox" checked={service.status === "Active"} onchange={() => toggleStatus(service.id)} />
                        <span class="slider"></span>
                    </label>
                </div>
            </div>

            <button class="w-full mt-4 py-3 bg-[#121063] text-white rounded-2xl text-xs font-bold hover:bg-[#3ab7bf] transition-colors shadow-lg shadow-[#121063]/10">Configure Pricing API</button>
        </div>
    {/each}
</div>
