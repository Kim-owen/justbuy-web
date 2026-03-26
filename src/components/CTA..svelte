<style lang="postcss">
    @reference "../styles/global.css";

    .cta {
        @apply bg-[#121063] py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-center text-center overflow-hidden relative;
    }
    
    /* Dynamic background shapes to add depth without an image */
    .cta::before {
        content: '';
        @apply absolute -top-24 -left-24 w-96 h-96 bg-[#3ab7bf] opacity-10 rounded-full blur-[100px] pointer-events-none;
    }
    .cta::after {
        content: '';
        @apply absolute -bottom-24 -right-24 w-96 h-96 bg-[#3ab7bf] opacity-10 rounded-full blur-[100px] pointer-events-none;
    }

    .cta_content {
        @apply relative z-10 max-w-4xl mx-auto flex flex-col items-center;
    }

    .cta h2 {
        @apply text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight;
    }
    
    .cta p {
        @apply text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-medium;
    }

    .store_badges {
        @apply flex flex-col sm:flex-row gap-4 sm:gap-6 items-center;
    }
    .store_badge {
        @apply transition-transform duration-300 hover:scale-105 active:scale-95;
    }
    .store_badge img {
        @apply h-14 sm:h-16 w-auto rounded-lg;
    }
    .store_badge.coming_soon {
        @apply relative opacity-50 cursor-default;
    }
    .soon_label {
        @apply absolute inset-0 flex items-center justify-center text-white text-[10px] uppercase tracking-widest bg-black/40 rounded-lg;
    }
</style>

<section class="cta" id="get-started">
    <div class="cta_content" use:reveal={{type: 'fadeInUp'}}>
        <h2 class="font-poppins font-extrabold">Ready to Pay the <br class="hidden sm:block"/>Smarter Way?</h2>
        <p class="font-poppins">Join 50,000+ Ghanaians who trust JustBuy for their daily data, airtime, and utility payments.</p>
        
        <div class="store_badges">
            <a href="https://tinyurl.com/Datankoaa" target="_blank" class="store_badge" aria-label="Get it on Google Play">
                <img src="/images/google_play_badge.png" alt="Get it on Google Play" />
            </a>
            <div class="store_badge coming_soon" aria-label="App Store - Coming Soon">
                <img src="/images/app_store_badge.png" alt="Coming soon on the App Store" />
                <span class="soon_label font-poppins font-bold">Coming Soon</span>
            </div>
        </div>
    </div>
</section>
