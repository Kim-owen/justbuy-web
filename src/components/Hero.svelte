<script>
    import { reveal } from "$lib/reveal";
    let isMuted = $state(true);
    let videoEl = $state(null);

    const toggleMute = () => {
        isMuted = !isMuted;
        if (videoEl) videoEl.muted = isMuted;
    };
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .hero_section_main {
        @apply bg-[url(/images/bg.png)] bg-fixed bg-cover bg-no-repeat bg-center min-h-dvh h-auto w-full flex flex-col md:flex-row px-4 sm:px-6 md:px-8 pt-20 md:pt-0 pb-8 md:pb-0;
    }
    .hero_section_main .left_col, .hero_section_main .right_col {
        @apply h-full w-full md:w-1/2 flex flex-col px-0 md:px-16;
    }
    .hero_section_main .right_col {
        @apply justify-center md:justify-end items-center md:items-start pt-6 md:pt-0;
    }
    .hero_section_main .left_col {
        @apply justify-center items-center md:items-start text-center md:text-left;
    }
    .hero_section_main .left_col h2 {
        @apply text-3xl sm:text-4xl md:text-7xl text-heading_prime tracking-wide md:leading-tight;
    }
    .hero_section_main .left_col h2 span {
        @apply text-heading_highlight;
    }
    .hero_section_main .left_col p {
        @apply text-sm sm:text-base text-heading_grey pt-3 pb-6 md:pb-10 pr-0 md:pr-32;
    }
    .hero_section_main .left_col .download_btn {
        @apply bg-[url(/images/btn_bg.png)] bg-cover bg-no-repeat bg-left w-fit flex flex-row justify-center items-center px-6 sm:px-8 py-3 sm:py-3.5 text-white text-sm sm:text-base tracking-wider rounded-xl cursor-pointer;
    }
    .hero_section_main .right_col .hero_img {
        @apply w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] h-auto relative z-10;
    }

    .hero_phone_frame {
        @apply relative rounded-[2.5rem] overflow-hidden shadow-2xl;
        background: #1a1a2e;
        padding: 10px;
        border: 3px solid rgba(255, 255, 255, 0.15);
        width: 240px;
        max-width: 70vw;
    }
    @media (min-width: 640px) {
        .hero_phone_frame { width: 260px; }
    }
    @media (min-width: 768px) {
        .hero_phone_frame { width: 280px; }
    }
    .hero_phone_notch {
        @apply absolute top-0 left-1/2 -translate-x-1/2 z-20 rounded-b-2xl;
        width: 100px;
        height: 20px;
        background: #1a1a2e;
    }
    .hero_video_wrap {
        @apply relative w-full rounded-[2rem] overflow-hidden;
        aspect-ratio: 9/19.5;
        background: #000;
    }
    .hero_video_wrap video {
        @apply w-full h-full object-cover;
    }

    .mute_btn {
        @apply absolute bottom-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-90;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        -webkit-tap-highlight-color: transparent;
    }
    .mute_btn svg {
        @apply w-4 h-4 text-white;
    }

    .trust_badge {
        @apply inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-heading_secondary mb-4 sm:mb-6 shadow-sm shadow-black/5 relative z-20;
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
        @apply flex gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-12 overflow-hidden;
    }
    .stat_item {
        @apply flex flex-col;
    }
    .stat_value {
        @apply text-xl sm:text-2xl md:text-3xl font-extrabold text-heading_prime mb-0.5 sm:mb-1;
    }
    .stat_label {
        @apply text-[10px] sm:text-xs md:text-sm text-heading_grey font-medium uppercase tracking-wider;
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
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a href="https://tinyurl.com/Datankoaa" target="_blank" class="download_btn poppins-regular shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
                <span>Download app</span>
            </a>
            <a href="#how-it-works" class="bg-white border-2 border-heading_prime text-heading_prime flex flex-row justify-center items-center px-6 sm:px-8 py-3 text-sm sm:text-base tracking-wider rounded-xl cursor-pointer hover:bg-heading_prime hover:text-white transition-all duration-300 poppins-bold active:scale-95">
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
        <div class="hero_phone_frame floating">
            <div class="hero_phone_notch"></div>
            <div class="hero_video_wrap">
                <video
                    bind:this={videoEl}
                    src="/demo.mp4"
                    autoplay
                    playsinline
                    muted
                    loop
                    preload="metadata"
                ></video>
                <button class="mute_btn" onclick={toggleMute} aria-label="Toggle audio">
                    {#if isMuted}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    {/if}
                </button>
            </div>
        </div>
    </div>
</section>