<script>
    import { reveal } from "$lib/reveal";
    import { onMount } from "svelte";
    import ThemeToggle from "./ThemeToggle.svelte";

    let scrolled = $state(false);
    let mobileMenuOpen = $state(false);

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const toggleMenu = () => {
        mobileMenuOpen = !mobileMenuOpen;
        // Prevent body scroll when menu is open
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };
    const closeMenu = () => {
        mobileMenuOpen = false;
        document.body.style.overflow = '';
    };
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .header {
        @apply px-4 sm:px-6 md:px-12 lg:px-24 py-4 flex flex-row w-full fixed top-0 left-0 justify-between items-center z-50 transition-all duration-300;
    }
    .header.scrolled {
        @apply backdrop-blur-md py-4;
        background: var(--nav-bg-scroll);
        border-bottom: 1px solid var(--border-color);
        box-shadow: var(--card-shadow);
    }
    .header:not(.scrolled) {
        @apply bg-transparent;
    }

    .header .logo_link {
        @apply flex items-center z-[60];
    }
    .header img {
        @apply h-9 sm:h-10 transition-transform duration-300 hover:scale-105;
    }

    .nav_links {
        @apply hidden lg:flex flex-row gap-10 items-center h-full;
    }
    .nav_links a {
        @apply font-semibold hover:text-[#3ab7bf] transition-colors text-sm tracking-tight py-2;
        color: var(--nav-text);
    }
    
    .dropdown_container {
        @apply relative h-full flex flex-col justify-center;
    }
    .dropdown_menu {
        @apply absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-2xl flex-col w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-gray-50 p-2;
    }
    .dropdown_menu a {
        @apply block px-4 py-3 hover:bg-gray-50 text-sm rounded-xl text-[#121063] font-medium transition-colors;
    }

    .header .actions {
        @apply hidden lg:flex flex-row items-center gap-4;
    }
    .header .download_btn {
        @apply bg-[#3ab7bf] text-white px-8 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-all shadow-md active:scale-95;
    }

    /* Mobile menu button */
    .mobile_btn {
        @apply lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer z-[60] bg-white/10 backdrop-blur-sm rounded-xl border border-white/20;
        -webkit-tap-highlight-color: transparent;
    }
    .header.scrolled .mobile_btn {
        @apply bg-gray-50 border-gray-100;
    }
    .mobile_btn span {
        @apply w-5 h-0.5 bg-[#121063] mb-1.5 transition-all duration-300 origin-center last:mb-0;
    }
    .mobile_btn.open span:nth-child(1) { @apply translate-y-2 rotate-45; }
    .mobile_btn.open span:nth-child(2) { @apply opacity-0; }
    .mobile_btn.open span:nth-child(3) { @apply -translate-y-2 -rotate-45; }

    /* Mobile menu */
    .mobile_menu {
        @apply fixed inset-0 z-40 flex flex-col transform transition-transform duration-500 ease-in-out;
        background: var(--mobile-menu-bg);
        transform: translateY(-100%);
    }
    .mobile_menu.open {
        transform: translateY(0);
    }

    .mobile_menu_content {
        @apply flex flex-col px-8 pb-12 pt-24 h-full overflow-y-auto;
    }

    .mobile_nav_links {
        @apply flex flex-col gap-2;
    }
    .mobile_nav_links a {
        @apply flex items-center justify-between text-2xl font-bold py-4;
        color: var(--mobile-nav-text);
        border-bottom: 1px solid var(--mobile-border);
    }

    .mobile_services_label {
        @apply text-xs uppercase text-gray-400 tracking-widest font-bold pt-8 pb-4;
    }

    .mobile_services_grid {
        @apply grid grid-cols-2 gap-3 mb-12;
    }
    .mobile_services_grid a {
        @apply flex flex-col items-center justify-center p-6 bg-gray-50 rounded-3xl text-sm font-bold text-[#121063];
    }
    .mobile_services_grid a .service_icon { @apply text-2xl mb-2; }

    .mobile_download_btn {
        @apply w-full flex items-center justify-center gap-2 bg-[#121063] text-white py-4 rounded-full text-lg font-bold shadow-xl active:scale-95 transition-transform mt-auto;
    }

    .mobile_backdrop {
        @apply fixed inset-0 bg-[#0b1014]/40 backdrop-blur-sm z-30 transition-opacity duration-300;
    }
    .mobile_backdrop.hidden { @apply opacity-0 pointer-events-none; }
    .mobile_backdrop.visible { @apply opacity-100; }
</style>

<header class="header {scrolled ? 'scrolled' : ''}">
    <a href="/" onclick={closeMenu} class="logo_link">
        <img src="/images/jb_logo.png" alt="Just Buy logo" />
    </a>
    
    <nav class="nav_links font-poppins">
        <div class="dropdown_container group">
            <a href="#services" class="flex items-center gap-1 cursor-pointer">Services
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            <div class="dropdown_menu">
                <a href="/corporate">Corporate Business</a>
                <a href="/retail">Retail Business</a>
                <a href="/bill-payments">Bill Payments</a>
                <a href="/airtime-and-data">Airtime & Data</a>
            </div>
        </div>
        <a href="#how-it-works">How It Works</a>
        <a href="#testimonials">Reviews</a>
        <a href="/blog">Blog</a>
    </nav>

    <div class="actions">
        <div class="flex flex-row gap-3 items-center">
            <ThemeToggle />
            <a href="https://tinyurl.com/Datankoaa" target="_blank" class="flex items-center px-4 py-1.5 rounded-lg backdrop-blur-md bg-[#121063]/5 hover:bg-[#121063]/10 border border-[#121063]/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm" style="color: var(--nav-text)" aria-label="Get it on Google Play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-5 h-5 mr-2">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div class="flex flex-col items-start leading-tight">
                    <span class="text-[8px] uppercase font-bold tracking-[0.05em] opacity-80">GET IT ON</span>
                    <span class="text-sm font-bold tracking-tight">Google Play</span>
                </div>
            </a>
            <div class="flex items-center px-4 py-1.5 rounded-lg backdrop-blur-md bg-[#121063]/5 border border-[#121063]/5 opacity-50 cursor-default transition-all duration-300" style="color: var(--nav-text)" aria-label="App Store - Coming Soon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" class="w-5 h-5 mr-2">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div class="flex flex-col items-start leading-tight">
                    <span class="text-[8px] uppercase font-bold tracking-[0.05em] opacity-80">Coming Soon</span>
                    <span class="text-sm font-bold tracking-tight">App Store</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile menu toggle -->
    <button class="mobile_btn {mobileMenuOpen ? 'open' : ''}" onclick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
</header>

<!-- Backdrop when menu is open -->
<div class="mobile_backdrop {mobileMenuOpen ? 'visible' : 'hidden'}" onclick={closeMenu} role="presentation"></div>

<!-- Mobile Menu — Compact Dropdown Panel -->
<div class="mobile_menu {mobileMenuOpen ? 'open' : ''}">
    <div class="mobile_menu_content">
        <!-- Main Nav Links -->
        <div class="mobile_nav_links font-poppins font-semibold">
            <a href="/" onclick={closeMenu}>
                <span>🏠 Home</span>
                <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a href="#how-it-works" onclick={closeMenu}>
                <span>⚡ How It Works</span>
                <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a href="#testimonials" onclick={closeMenu}>
                <span>⭐ Reviews</span>
                <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a href="/blog" onclick={closeMenu}>
                <span>📝 Blog</span>
                <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
        </div>

        <!-- Services Grid -->
        <p class="mobile_services_label font-poppins font-bold">Our Services</p>
        <div class="mobile_services_grid font-poppins font-medium">
            <a href="/corporate" onclick={closeMenu}>
                <span class="service_icon">🏢</span>
                Corporate
            </a>
            <a href="/retail" onclick={closeMenu}>
                <span class="service_icon">🛍️</span>
                Retail
            </a>
            <a href="/bill-payments" onclick={closeMenu}>
                <span class="service_icon">💡</span>
                Bill Payments
            </a>
            <a href="/airtime-and-data" onclick={closeMenu}>
                <span class="service_icon">📱</span>
                Airtime & Data
            </a>
        </div>

        <!-- Theme + Download CTA -->
        <div class="flex items-center justify-between mb-4">
            <span style="color: var(--text-secondary)" class="text-sm font-poppins">Switch theme</span>
            <ThemeToggle />
        </div>
        <a href="https://tinyurl.com/Datankoaa" target="_blank" onclick={closeMenu} class="mobile_download_btn font-poppins font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download JustBuy
        </a>
    </div>
</div>
