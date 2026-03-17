<script>
    import { reveal } from "$lib/reveal";
    import { onMount } from "svelte";

    let scrolled = $state(false);
    let mobileMenuOpen = $state(false);
    let isDark = $state(false);

    onMount(() => {
        // Hydrate theme from local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            isDark = true;
            document.documentElement.classList.add('dark');
        } else {
            isDark = false;
            document.documentElement.classList.remove('dark');
        }

        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const toggleTheme = () => {
        isDark = !isDark;
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    };

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
        @apply shadow-xl py-3;
        background-color: var(--component-bg, #ffffff);
    }
    .header:not(.scrolled) {
        @apply bg-transparent;
    }

    .header img {
        @apply h-8 md:h-12 transition-transform duration-300 hover:scale-110;
        animation: pulseGlow 3s infinite;
        border-radius: 50%;
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
        @apply absolute top-full left-0 shadow-xl rounded-md flex-col w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-gray-100;
        background-color: var(--component-bg, #ffffff);
    }
    .dropdown_menu a {
        @apply block px-5 py-3 text-sm normal-case tracking-normal md:w-full border-b last:border-none hover:text-heading_highlight;
        border-color: var(--card-border, #f9fafb);
    }

    .header .actions {
        @apply hidden lg:flex flex-row items-center gap-4;
    }
    
    .theme_switch {
        @apply w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 transition-colors mr-2;
        color: var(--heading-secondary);
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
        @apply fixed inset-0 z-50 flex flex-col items-center justify-center transform transition-transform duration-300 shadow-xl;
        background-color: var(--bg-color, #ffffff);
    }
    .mobile_menu.closed {
        @apply translate-x-full;
    }
    .mobile_menu.open {
        @apply translate-x-0;
    }
    .mobile_menu a {
        @apply text-2xl font-bold mb-6 transition-colors;
        color: var(--heading-prime, #121063);
    }
    .mobile_menu a:hover {
        @apply text-heading_highlight;
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
        <!-- Theme Toggle Button -->
        <button class="theme_switch" onclick={toggleTheme} aria-label="Toggle Dark Mode">
            {#if isDark}
                <!-- Sun Icon for Dark Mode -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            {:else}
                <!-- Moon Icon for Light Mode -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            {/if}
        </button>

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