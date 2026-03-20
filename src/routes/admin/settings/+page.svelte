<script>
    import { reveal } from "$lib/reveal";
    
    let isMaintenance = $state(false);
    let apiStatus = $state("Stable");
    let adminName = $state("Manfred Kwami");
    let adminEmail = $state("admin@justbuygh.shop");

    const settingsGroups = [
        { title: "Network Integration", desc: "Manage API keys and callback URLs for MTN, Telecel, and AirtelTigo." },
        { title: "Security Protocols", desc: "2FA settings, session timeouts, and IP whitelisting for admin access." },
        { title: "Notification Center", desc: "Configure SMS and Email templates for transaction confirmations." },
    ];
</script>

<style lang="postcss">
    @reference "../../../styles/global.css";

    .page_header {
        @apply flex items-center justify-between mb-10;
    }
    .page_header h1 {
        @apply text-3xl font-extrabold text-[#121063] tracking-tight;
    }

    .settings_container {
        @apply max-w-5xl flex flex-col gap-8;
    }

    .settings_section {
        @apply bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8;
    }

    .section_info { @apply w-full md:w-1/3 flex flex-col gap-2; }
    .section_info h3 { @apply text-xl font-extrabold text-[#121063]; }
    .section_info p { @apply text-xs text-gray-400 font-bold leading-relaxed uppercase tracking-tight; }

    .section_controls { @apply flex-grow flex flex-col gap-6; }

    .input_field {
        @apply bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-bold text-[#121063] w-full focus:outline-none focus:border-[#3ab7bf] transition-all;
    }

    .card_toggle {
        @apply p-8 bg-gray-50 rounded-3xl flex items-center justify-between border border-gray-100;
    }

    /* Switch Component */
    .switch { @apply relative inline-block w-14 h-7 cursor-pointer; }
    .switch input { @apply opacity-0 w-0 h-0; }
    .slider { @apply absolute inset-0 bg-gray-200 rounded-full transition-all duration-300; }
    .slider:before {
        @apply absolute content-[''] h-5 w-5 left-1 bottom-1 bg-white rounded-full transition-all duration-300 shadow-sm;
    }
    input:checked + .slider { @apply bg-red-500; }
    input:checked + .slider:before { @apply translate-x-7 bg-white; }

    .save_btn {
        @apply bg-[#121063] text-white px-10 py-5 rounded-2xl font-black text-sm shadow-xl shadow-[#121063]/20 hover:scale-105 active:scale-95 transition-all self-end;
    }
</style>

<div class="page_header" use:reveal={{type: 'fadeInDown'}}>
    <h1 class="font-poppins font-extrabold">Superadmin Settings</h1>
</div>

<div class="settings_container">
    <!-- Profile Settings -->
    <div class="settings_section" use:reveal={{type: 'fadeInUp'}}>
        <div class="section_info">
            <h3 class="font-poppins font-extrabold">Admin Identity</h3>
            <p class="font-poppins font-bold">Update your personal information and profile display settings.</p>
        </div>
        <div class="section_controls">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" bind:value={adminName} class="input_field" placeholder="Full Name" />
                <input type="email" bind:value={adminEmail} class="input_field" placeholder="Email Address" />
            </div>
            <input type="password" value="••••••••••••" class="input_field" placeholder="New Password" />
            <button class="save_btn">Update Identity</button>
        </div>
    </div>

    <!-- Global Controls -->
    <div class="settings_section" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
        <div class="section_info">
            <h3 class="font-poppins font-extrabold">Infrastructure</h3>
            <p class="font-poppins font-bold">Control global system states and emergency shutdown protocols.</p>
        </div>
        <div class="section_controls">
            <div class="card_toggle">
                <div>
                    <h4 class="text-lg font-black text-[#121063] font-poppins font-black">Maintenence Mode</h4>
                    <p class="text-xs text-gray-400 font-bold font-poppins font-bold uppercase tracking-widest mt-1">Locks app transactions for all users</p>
                </div>
                <label class="switch">
                    <input type="checkbox" bind:checked={isMaintenance} />
                    <span class="slider"></span>
                </label>
            </div>
            
            <div class="card_toggle">
                <div>
                    <h4 class="text-lg font-black text-[#121063] font-poppins font-black">Debug Verbosity</h4>
                    <p class="text-xs text-gray-400 font-bold font-poppins font-bold uppercase tracking-widest mt-1">Detailed logging for integration troubleshooting</p>
                </div>
                <label class="switch">
                    <input type="checkbox" checked={false} />
                    <span class="slider"></span>
                </label>
            </div>
        </div>
    </div>

    <!-- Integrations -->
    {#each settingsGroups as group, i}
        <div class="settings_section" use:reveal={{type: 'fadeInUp', delay: `${0.2 + (i * 0.1)}s`}}>
            <div class="section_info">
                <h3 class="font-poppins font-extrabold">{group.title}</h3>
                <p class="font-poppins font-bold">{group.desc}</p>
            </div>
            <div class="section_controls">
                <div class="p-10 border-2 border-dashed border-gray-100 rounded-[2rem] flex flex-col items-center justify-center gap-4 text-center">
                    <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-2xl">🔧</div>
                    <div>
                        <p class="text-sm font-black text-[#121063] font-poppins font-black">Advanced {group.title} Configuration</p>
                        <p class="text-xs text-gray-400 font-bold font-poppins font-bold leading-relaxed max-w-sm mt-1">This module requires high-level clearance to modify production API environments.</p>
                    </div>
                    <button class="bg-[#121063] text-white px-8 py-3 rounded-2xl text-xs font-bold font-poppins font-bold shadow-lg opacity-50 cursor-not-allowed">Access Blocked</button>
                </div>
            </div>
        </div>
    {/each}
</div>

