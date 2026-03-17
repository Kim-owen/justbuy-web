<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .hero_section_main {
        @apply bg-[url(/images/bg.png)] bg-fixed bg-cover bg-no-repeat bg-center min-h-dvh h-auto w-full flex flex-col md:flex-row px-6 md:px-8 pt-24 md:pt-0 pb-10 md:pb-0;
    }
    .hero_section_main .left_col, .hero_section_main .right_col {
        @apply h-full w-full md:w-1/2 flex flex-col px-0 md:px-16;
    }
    .hero_section_main .right_col {
        @apply justify-center md:justify-end items-center md:items-start pt-10 md:pt-0;
    }
    .hero_section_main .left_col {
        @apply justify-center items-center md:items-start text-center md:text-left;
    }
    .hero_section_main .left_col h2 {
        @apply text-5xl md:text-7xl text-heading_prime tracking-wide md:leading-tight;
    }
    .hero_section_main .left_col h2 span {
        @apply text-heading_highlight;
    }
    .hero_section_main .left_col p {
        @apply text-sm md:text-base text-heading_grey pt-4 pb-8 md:pb-10 pr-0 md:pr-32;
    }
    .hero_section_main .left_col .download_btn {
        @apply bg-[url(/images/btn_bg.png)] bg-cover bg-no-repeat bg-left w-fit flex flex-row justify-center items-center px-8 py-3 text-white text-base tracking-wider rounded-md cursor-pointer;
    }
    .hero_section_main .right_col .hero_img {
        @apply w-full max-w-[350px] md:max-w-[500px] h-auto relative z-10;
    }

    .trust_badge {
        @apply inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-1.5 rounded-full text-xs font-semibold text-heading_secondary mb-6 shadow-sm shadow-black/5 relative z-20;
        animation: pulseGlow 2s infinite;
    }
    
    .live_dot {
        @apply w-2 h-2 rounded-full bg-green-500 relative;
    }
    .live_dot::after {
        content: '';
        @apply absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75;
    }

    .stats_container {
        @apply flex gap-6 md:gap-10 mt-12 overflow-hidden;
    }
    .stat_item {
        @apply flex flex-col;
    }
    .stat_value {
        @apply text-2xl md:text-3xl font-extrabold text-heading_prime mb-1;
    }
    .stat_label {
        @apply text-xs md:text-sm text-heading_grey font-medium uppercase tracking-wider;
    }
</style>

<section id="hero" class="hero_section_main overflow-hidden relative">
    <div class="blob pulse-glow absolute -top-40 -left-40 w-96 h-96 bg-heading_highlight opacity-10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
    <div class="left_col relative z-10" use:reveal={{type: 'slideInLeft', duration: '1s'}}>
        <div class="trust_badge" use:reveal={{type: 'fadeInDown', delay: '0.2s'}}>
            <div class="live_dot"></div>
            <span>Systems 100% Operational & Licensed</span>
        </div>
        <h2 class="main_heading poppins-extrabold">Buy Airtime, Data and TV<br class="hidden md:block"/>
        <span class="main_heading poppins-extrabold">Subscriptions in Seconds</span>
        </h2>
        <p class="poppins-medium text-lg">Top up MTN, Telecel, AirtelTigo and pay for DSTV and GOtv subscriptions instantly with one simple app.</p>
        <div class="flex gap-4">
            <a href="https://tinyurl.com/Datankoaa" target="_blank" class="download_btn poppins-regular shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <span>Download app</span>
            </a>
            <a href="#how-it-works" class="bg-white border-2 border-heading_prime text-heading_prime w-fit flex flex-row justify-center items-center px-8 py-3 text-base tracking-wider rounded-md cursor-pointer hover:bg-heading_prime hover:text-white transition-all duration-300 poppins-bold">
                See How
            </a>
        </div>
        
        <div class="stats_container poppins-regular">
            <div class="stat_item" use:reveal={{type: 'fadeInUp', delay: '0.4s'}}>
                <span class="stat_value">50k+</span>
                <span class="stat_label">Active Users</span>
            </div>
            <div class="stat_item" use:reveal={{type: 'fadeInUp', delay: '0.6s'}}>
                <span class="stat_value">99.9%</span>
                <span class="stat_label">Success Rate</span>
            </div>
            <div class="stat_item" use:reveal={{type: 'fadeInUp', delay: '0.8s'}}>
                <span class="stat_value">24/7</span>
                <span class="stat_label">Support</span>
            </div>
        </div>
    </div>
    <div class="right_col" use:reveal={{type: 'slideInRight', duration: '1s'}}>
        <img class="hero_img floating" src="/images/Hero_Image_Desktop.png" alt="just buy data"/>
    </div>
</section>