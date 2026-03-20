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

    .download_btn {
        @apply bg-[#3ab7bf] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-[0_0_40px_rgba(58,183,191,0.3)] active:scale-95;
    }
</style>

<section class="cta" id="get-started">
    <div class="cta_content" use:reveal={{type: 'fadeInUp'}}>
        <h2 class="font-poppins font-extrabold">Ready to Pay the <br class="hidden sm:block"/>Smarter Way?</h2>
        <p class="font-poppins">Join 50,000+ Ghanaians who trust JustBuy for their daily data, airtime, and utility payments.</p>
        
        <a href="https://tinyurl.com/Datankoaa" target="_blank" class="download_btn font-poppins font-bold">
            Download App Now
        </a>
    </div>
</section>
