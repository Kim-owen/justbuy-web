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
    };
    const closeMenu = () => {
        mobileMenuOpen = false;
    };
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .header {
        @apply px-6 md:px-24 py-4 flex flex-row w-full fixed top-0 left-0 justify-between items-center z-50 transition-all duration-300;
    }
    .header.scrolled {
        @apply bg-white shadow-xl py-3;
    }
    .header:not(.scrolled) {
        @apply bg-transparent;
    }

    .header img {
        @apply h-8 md:h-12 transition-all duration-300;
    }
    .header.scrolled img {
        @apply h-7 md:h-10;
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

    /* Mobile menu button */
    .mobile_btn {
        @apply lg:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-[60];
    }
    .mobile_btn span {
        @apply w-6 h-0.5 bg-heading_secondary mb-1.5 transition-all duration-300 origin-center;
    }
    .mobile_btn span:last-child {
        @apply mb-0;
    }
    .mobile_btn.open span:nth-child(1) {
        @apply transform translate-y-2 rotate-45;
    }
    .mobile_btn.open span:nth-child(2) {
        @apply opacity-0;
    }
    .mobile_btn.open span:nth-child(3) {
        @apply transform -translate-y-2 -rotate-45;
    }

    /* Mobile menu overlay */
    .mobile_menu {
        @apply fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transform transition-transform duration-300 shadow-xl;
    }
    .mobile_menu.closed {
        @apply translate-x-full;
    }
    .mobile_menu.open {
        @apply translate-x-0;
    }
    .mobile_menu a {
        @apply text-2xl text-heading_secondary font-bold mb-6 hover:text-heading_highlight transition-colors;
    }
</style>

<header class="header {scrolled ? 'scrolled' : ''}">
    <a href="/" onclick={closeMenu}>
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

<!-- Mobile Menu Overlay -->
<div class="mobile_menu {mobileMenuOpen ? 'open' : 'closed'}">
    <a href="/" onclick={closeMenu} class="poppins-bold">Home</a>
    <a href="#services" onclick={closeMenu} class="poppins-bold">Services</a>
    <a href="#how-it-works" onclick={closeMenu} class="poppins-bold">How It Works</a>
    <a href="#testimonials" onclick={closeMenu} class="poppins-bold">Testimonials</a>
    <a href="https://tinyurl.com/Datankoaa" target="_blank" class="bg-heading_prime text-white px-8 py-3 rounded-md poppins-regular mt-8 text-lg">Download app</a>
</div>