<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .demo_section {
        @apply w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 flex flex-col items-center;
        background: linear-gradient(135deg, #0f0c3d 0%, #1a1660 40%, #121063 100%);
    }

    .demo_heading {
        @apply text-center mb-4;
    }
    .demo_heading h2 {
        @apply text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-4;
    }
    .demo_heading p {
        @apply text-sm sm:text-base text-gray-300 max-w-lg mx-auto;
    }
    .demo_heading .accent {
        @apply text-heading_highlight;
    }

    .phone_mockup {
        @apply relative mx-auto mt-10 md:mt-14;
        width: 280px;
        max-width: 85vw;
    }

    /* Phone frame */
    .phone_frame {
        @apply relative rounded-[2.5rem] overflow-hidden shadow-2xl;
        background: #1a1a2e;
        padding: 12px;
        border: 3px solid rgba(255, 255, 255, 0.1);
    }

    /* Notch */
    .phone_notch {
        @apply absolute top-0 left-1/2 -translate-x-1/2 z-20 rounded-b-2xl;
        width: 120px;
        height: 24px;
        background: #1a1a2e;
    }

    /* Video container */
    .video_wrap {
        @apply relative w-full rounded-[2rem] overflow-hidden;
        aspect-ratio: 9/19.5;
        background: #000;
    }

    .video_wrap video {
        @apply w-full h-full object-cover;
    }

    /* Play overlay */
    .play_overlay {
        @apply absolute inset-0 flex items-center justify-center z-10 cursor-pointer transition-opacity duration-300;
        background: rgba(0, 0, 0, 0.35);
    }
    .play_overlay.hidden {
        @apply opacity-0 pointer-events-none;
    }
    .play_btn {
        @apply w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
    }
    .play_btn svg {
        @apply w-7 h-7 sm:w-8 sm:h-8 text-heading_prime ml-1;
    }

    /* Glow effect behind phone */
    .phone_glow {
        @apply absolute rounded-full blur-[80px] pointer-events-none;
        width: 300px;
        height: 300px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(58, 183, 191, 0.25) 0%, transparent 70%);
    }

    /* Feature pills below video */
    .demo_features {
        @apply flex flex-wrap justify-center gap-3 mt-10 md:mt-14 max-w-2xl mx-auto;
    }
    .demo_features .pill {
        @apply flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm px-4 py-2 rounded-full border border-white/10;
    }
</style>

<section class="demo_section" id="demo">
    <div class="demo_heading" use:reveal={{type: 'fadeInDown'}}>
        <h2 class="poppins-extrabold">See JustBuy <span class="accent">in Action</span></h2>
        <p class="poppins-regular">Watch how easy it is to buy airtime, data, and pay bills — all in under 60 seconds.</p>
    </div>

    <div class="phone_mockup" use:reveal={{type: 'zoomIn', delay: '0.2s'}}>
        <div class="phone_glow"></div>
        <div class="phone_frame">
            <div class="phone_notch"></div>
            <div class="video_wrap">
                <video
                    src="/demo.mp4"
                    playsinline
                    preload="metadata"
                    poster=""
                    muted
                    loop
                    onclick={(e) => { const v = e.currentTarget; if(v.paused){v.play(); v.parentElement.querySelector('.play_overlay').classList.add('hidden')} else {v.pause(); v.parentElement.querySelector('.play_overlay').classList.remove('hidden')} }}
                ></video>
                <div class="play_overlay" onclick={(e) => { const v = e.currentTarget.parentElement.querySelector('video'); v.play(); e.currentTarget.classList.add('hidden'); }}>
                    <div class="play_btn">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="demo_features" use:reveal={{type: 'fadeInUp', delay: '0.4s'}}>
        <div class="pill poppins-medium">⚡ Instant Top-Up</div>
        <div class="pill poppins-medium">🔒 Secure Payments</div>
        <div class="pill poppins-medium">📱 All Networks</div>
        <div class="pill poppins-medium">💡 Pay ECG Bills</div>
    </div>
</section>
