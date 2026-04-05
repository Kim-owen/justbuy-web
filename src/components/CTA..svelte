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
        @apply flex flex-col sm:flex-row gap-5 sm:gap-6 items-center;
    }
    .store_badge {
        @apply transition-all duration-500 ease-out;
    }
    .store_badge:hover {
        transform: translateY(-4px) scale(1.05);
        filter: brightness(1.1);
    }
    .store_badge:active {
        transform: scale(0.97);
    }
    .store_badge img {
        @apply h-20 sm:h-24 w-auto rounded-xl;
    }
    .store_badge:hover img {
        @apply shadow-[0_8px_30px_rgba(58,183,191,0.4)];
    }
    .store_badge.coming_soon {
        @apply relative opacity-60 cursor-default;
    }
    .store_badge.coming_soon:hover {
        transform: none;
        filter: none;
    }
    .soon_label {
        @apply absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest rounded-xl;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
    }
</style>

<section class="cta" id="get-started">
    <div class="cta_content" use:reveal={{type: 'fadeInUp'}}>
        <h2 class="font-poppins font-extrabold">Ready to Pay the <br class="hidden sm:block"/>Smarter Way?</h2>
        <p class="font-poppins">Join 50,000+ Ghanaians who trust JustBuy for their daily data, airtime, and utility payments.</p>
        
        <div class="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center">
            <a href="https://tinyurl.com/Datankoaa" target="_blank" class="flex items-center px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(58,183,191,0.4)] text-white" aria-label="Get it on Google Play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-8 h-8 mr-3">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div class="flex flex-col items-start leading-tight">
                    <span class="text-[11px] uppercase font-medium tracking-[0.05em] mb-0.5 opacity-80">GET IT ON</span>
                    <span class="text-xl font-semibold tracking-tight">Google Play</span>
                </div>
            </a>
            <div class="flex items-center px-6 py-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 opacity-60 cursor-default text-white transition-all duration-300" aria-label="App Store - Coming Soon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" class="w-8 h-8 mr-3">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div class="flex flex-col items-start leading-tight">
                    <span class="text-[11px] uppercase font-medium tracking-[0.05em] mb-0.5 opacity-80">Coming Soon</span>
                    <span class="text-xl font-semibold tracking-tight">App Store</span>
                </div>
            </div>
        </div>
    </div>
</section>
