<script>
    import { reveal } from "$lib/reveal";
    import { onMount } from "svelte";
    
    let isSidebarOpen = $state(true);
    let activePath = $state("/admin/overview");

    const navItems = [
        { label: "Overview", icon: "📊", path: "/admin/overview" },
        { label: "Users", icon: "👥", path: "/admin/users" },
        { label: "Transactions", icon: "💸", path: "/admin/transactions" },
        { label: "Services", icon: "⚙️", path: "/admin/services" },
        { label: "Revenue", icon: "📈", path: "/admin/revenue" },
        { label: "Settings", icon: "🛠️", path: "/admin/settings" },
    ];

    const toggleSidebar = () => {
        isSidebarOpen = !isSidebarOpen;
    };
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .admin_container {
        @apply flex h-screen bg-[#f8fafc] overflow-hidden;
    }

    /* Sidebar */
    .sidebar {
        @apply bg-[#121063] text-white transition-all duration-300 flex flex-col relative z-50;
        width: 280px;
    }
    .sidebar.closed {
        width: 80px;
    }

    .brand_area {
        @apply p-6 flex items-center gap-3 border-b border-white/10;
    }
    .brand_area img {
        @apply h-8 bg-white p-1 rounded-md;
    }

    .nav_menu {
        @apply flex-grow py-8 flex flex-col gap-2 px-3;
    }

    .nav_item {
        @apply flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all hover:bg-white/5 cursor-pointer text-sm font-semibold;
    }
    .nav_item.active {
        @apply bg-[#3ab7bf] text-white shadow-lg;
    }
    .nav_item span.icon {
        @apply text-xl flex-shrink-0;
    }

    .sidebar_footer {
        @apply p-4 border-t border-white/10;
    }
    
    .logout_btn {
        @apply w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-400 text-sm font-bold transition-colors;
    }

    /* Main Content */
    .main_content {
        @apply flex-grow flex flex-col h-full overflow-hidden relative;
    }

    .top_bar {
        @apply h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40;
    }

    .search_mock {
        @apply bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-xs text-gray-400 w-64;
    }

    .scroll_area {
        @apply flex-grow overflow-y-auto p-4 md:p-8;
    }

    /* Utility classes for animations */
    :global(.glass_card) {
        @apply bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl p-6;
    }
</style>

<div class="admin_container">
    <!-- Sidebar -->
    <aside class="sidebar {isSidebarOpen ? '' : 'closed'}">
        <div class="brand_area">
            <img src="/images/jb_logo.png" alt="JustBuy" />
            {#if isSidebarOpen}
                <span class="poppins-bold text-lg tracking-tight" use:reveal={{type: 'fadeIn'}}>JustBuy Admin</span>
            {/if}
        </div>

        <nav class="nav_menu poppins-regular">
            {#each navItems as item}
                <a href={item.path} 
                   class="nav_item {activePath === item.path ? 'active' : 'text-gray-400'}"
                   onclick={() => activePath = item.path}>
                    <span class="icon">{item.icon}</span>
                    {#if isSidebarOpen}
                        <span transition:reveal={{type: 'fadeIn'}}>{item.label}</span>
                    {/if}
                </a>
            {/each}
        </nav>

        <div class="sidebar_footer">
            <button class="logout_btn poppins-bold">
                <span>🚪</span>
                {#if isSidebarOpen}
                    <span transition:reveal={{type: 'fadeIn'}}>Logout</span>
                {/if}
            </button>
        </div>
    </aside>

    <!-- Content -->
    <main class="main_content">
        <header class="top_bar">
            <button onclick={toggleSidebar} class="text-gray-400 hover:text-[#121063] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>

            <div class="flex items-center gap-6">
                <div class="search_mock poppins-regular">Search users, transactions...</div>
                <div class="flex items-center gap-3">
                    <div class="text-right">
                        <p class="text-xs font-bold text-[#121063] poppins-bold">Manfred Kwami</p>
                        <p class="text-[10px] text-gray-400 poppins-regular">Super Admin</p>
                    </div>
                    <div class="w-10 h-10 rounded-full bg-[#3ab7bf]/10 flex items-center justify-center text-lg shadow-sm border border-[#3ab7bf]/20">
                        👨‍💻
                    </div>
                </div>
            </div>
        </header>

        <div class="scroll_area">
            <slot />
        </div>
    </main>
</div>
