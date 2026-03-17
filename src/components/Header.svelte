<script>
    import { reveal } from "$lib/reveal";
    import { onMount } from "svelte";

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
        @apply px-4 sm:px-6 md:px-24 py-3 md:py-4 flex flex-row w-full fixed top-0 left-0 justify-between items-center z-50 transition-all duration-300;
    }
    .header.scrolled {
        @apply bg-white shadow-xl py-2 md:py-3;
    }
    .header:not(.scrolled) {
        @apply bg-transparent;
    }

    .header .logo_link {
        @apply flex items-center z-[60];
    }
    .header img {
        @apply h-9 sm:h-10 md:h-12 transition-transform duration-300 hover:scale-105;
    }
    .header.scrolled img {
        @apply h-8 sm:h-9 md:h-10;
    }

    .nav_links {
        @apply hidden lg:flex flex-row gap-8 items-center h-full;
    }
    .nav_links a {
        @apply text-heading_secondary font-medium hover:text-heading_highlight transition-colors text-sm uppercase tracking-wide py-2;
    }
    
    .dropdown_container {
        @apply relative h-full flex flex-col justify-center;
    }
    .dropdown_menu {
        @apply absolute top-full left-0 bg-white shadow-xl rounded-md flex-col w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-gray-100;
    }
    .dropdown_menu a {
        @apply block px-5 py-3 hover:bg-gray-50 text-sm normal-case tracking-normal md:w-full border-b border-gray-50 last:border-none;
    }

    .header .actions {
        @apply hidden lg:flex flex-row items-center gap-4;
    }
    .header .download_btn {
        @apply bg-[url(/images/btn_bg.png)] bg-cover bg-no-repeat bg-left w-fit flex flex-row justify-center items-center px-6 py-2.5 text-white text-sm md:text-base tracking-wider rounded-md cursor-pointer shadow-md hover:shadow-lg transition-all;
    }

    /* Mobile menu button - larger touch target */
    .mobile_btn {
        @apply lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer z-[60] rounded-md;
        -webkit-tap-highlight-color: transparent;
    }
    .mobile_btn span {
        @apply w-6 h-0.5 bg-heading_secondary mb-1.5 transition-all duration-300 origin-center;
    }
    .mobile_btn span:last-child {
        @apply mb-0;
    }
    .mobile_btn.open span:nth-child(1) {
        @apply transform translate-y-2 rotate-45 bg-heading_highlight;
    }
    .mobile_btn.open span:nth-child(2) {
        @apply opacity-0;
    }
    .mobile_btn.open span:nth-child(3) {
        @apply transform -translate-y-2 -rotate-45 bg-heading_highlight;
    }

    /* Mobile menu overlay - full redesign */
    .mobile_menu {
        @apply fixed inset-0 bg-white z-50 flex flex-col transform transition-all duration-400 ease-in-out overflow-y-auto;
    }
    .mobile_menu.closed {
        @apply translate-x-full opacity-0;
    }
    .mobile_menu.open {
        @apply translate-x-0 opacity-100;
    }

    .mobile_menu_content {
        @apply flex flex-col px-6 pt-24 pb-8 h-full;
    }

    .mobile_nav_links {
        @apply flex flex-col gap-1 mb-8;
    }
    .mobile_nav_links a {
        @apply flex items-center justify-between text-lg font-semibold text-heading_secondary py-4 px-4 rounded-xl active:bg-gray-100 transition-colors;
        -webkit-tap-highlight-color: transparent;
    }
    .mobile_nav_links a:not(:last-child) {
        border-bottom: 1px solid #f1f5f9;
    }

    .mobile_services_label {
        @apply text-xs uppercase text-heading_grey tracking-widest font-bold px-4 pt-4 pb-2;
    }

    .mobile_services_grid {
        @apply grid grid-cols-2 gap-3 px-2 mb-6;
    }
    .mobile_services_grid a {
        @apply flex flex-col items-center justify-center text-center bg-gray-50 rounded-2xl py-5 px-3 text-sm font-semibold text-heading_secondary active:scale-95 transition-transform;
        -webkit-tap-highlight-color: transparent;
    }
    .mobile_services_grid a .service_icon {
        @apply text-2xl mb-2;
    }

    .mobile_download_btn {
        @apply mt-auto w-full flex items-center justify-center gap-3 bg-heading_prime text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg active:scale-[0.98] transition-transform;
        -webkit-tap-highlight-color: transparent;
    }

    .mobile_contact {
        @apply flex flex-col items-center gap-2 mt-4 text-sm text-heading_grey;
    }
</style>

<header class="header {scrolled ? 'scrolled' : ''}">
    <a href="/" onclick={closeMenu} class="logo_link">
        <img src="/images/jb_logo.png" alt="Just Buy logo" />
    </a>
    
    <nav class="nav_links poppins-regular">
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
    </nav>

    <div class="actions">
        <a href="https://tinyurl.com/Datankoaa" target="_blank" class="download_btn poppins-regular">
            <span>Download app</span>
        </a>
    </div>

    <!-- Mobile menu toggle -->
    <button class="mobile_btn {mobileMenuOpen ? 'open' : ''}" onclick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
</header>

<!-- Mobile Menu Overlay — Completely Redesigned -->
<div class="mobile_menu {mobileMenuOpen ? 'open' : 'closed'}">
    <div class="mobile_menu_content">
        <!-- Main Nav Links -->
        <div class="mobile_nav_links poppins-semibold">
            <a href="/" onclick={closeMenu}>
                <span>🏠 Home</span>
                <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a href="#how-it-works" onclick={closeMenu}>
                <span>⚡ How It Works</span>
                <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
            <a href="#testimonials" onclick={closeMenu}>
                <span>⭐ Reviews</span>
                <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
        </div>

        <!-- Services Grid - App-style -->
        <p class="mobile_services_label poppins-bold">Our Services</p>
        <div class="mobile_services_grid poppins-medium">
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

        <!-- Download CTA -->
        <a href="https://tinyurl.com/Datankoaa" target="_blank" onclick={closeMenu} class="mobile_download_btn poppins-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download JustBuy App
        </a>

        <!-- Contact Info -->
        <div class="mobile_contact poppins-regular">
            <span>Need help? <strong class="text-heading_highlight">support@justbuy.com.gh</strong></span>
        </div>
    </div>
</div>