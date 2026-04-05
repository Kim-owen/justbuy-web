<script>
    import { reveal } from "$lib/reveal";
    import { adminState } from "$lib/state/admin.svelte";
    
    let isMuted = $state(true);
    let isPaused = $state(false);
    let videoEl = $state(null);

    // Get the first active video from the shared state
    let activeVideo = $derived(adminState.videos.find(v => v.active) || adminState.videos[0]);

    const toggleMute = () => {
        isMuted = !isMuted;
        if (videoEl) videoEl.muted = isMuted;
    };

    const togglePlay = () => {
        if (!videoEl) return;
        if (isPaused) {
            videoEl.play();
        } else {
            videoEl.pause();
        }
        isPaused = !isPaused;
    }
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .hero_fullscreen {
        @apply relative w-full h-dvh min-h-[600px] flex items-center justify-center overflow-hidden;
    }

    .bg_video {
        @apply absolute inset-0 w-full h-full object-cover z-0;
        /* If the video is portrait, object-cover will center crop it. Good for mobile video. */
    }

    /* Dark overlay to make text pop effortlessly */
    .overlay {
        @apply absolute inset-0 z-10 pointer-events-none;
        background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(18,16,99,0.85) 100%);
    }

    .content {
        @apply relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-16 mt-10;
    }

    h1 {
        @apply text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-xl;
    }
    
    h1 .highlight {
        @apply text-[#3ab7bf]; /* JustBuy Teal/Green */
    }

    p {
        @apply text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl font-medium drop-shadow-md leading-relaxed;
    }

    .btn_group {
        @apply flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto;
    }

    .store_badge {
        @apply transition-all duration-500 ease-out;
        animation: badgeFadeUp 0.8s ease-out both;
    }
    .store_badge:first-child {
        animation-delay: 0.4s;
    }
    .store_badge:nth-child(2) {
        animation-delay: 0.6s;
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
        @apply shadow-[0_8px_30px_rgba(58,183,191,0.35)];
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

    @keyframes badgeFadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .controls {
        @apply absolute bottom-6 right-6 z-30 flex gap-3;
    }

    .control_btn {
        @apply w-12 h-12 rounded-full flex justify-center items-center bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition cursor-pointer shadow-lg;
        -webkit-tap-highlight-color: transparent;
    }
    .control_btn svg {
        @apply w-5 h-5;
    }
</style>

<section id="hero" class="hero_fullscreen">
    <!-- Background Video -->
    <video
        bind:this={videoEl}
        src={activeVideo.url}
        class="bg_video"
        autoplay
        loop
        muted
        playsinline
    ></video>

    <!-- Dark Gradient Overlay -->
    <div class="overlay"></div>

    <!-- Centered Content block (similar to the reference image) -->
    <div class="content" use:reveal={{type: 'fadeInUp'}}>
        <h1 class="font-poppins font-extrabold">
            All Your <span class="highlight">Payments</span><br/> One App
        </h1>
        <p class="font-poppins">
            Simplify airtime, data bundles, and utility bill payments with Ghana's fastest financial platform.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto">
            <a href="https://tinyurl.com/Datankoaa" target="_blank" class="flex items-center px-5 py-2.5 rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(58,183,191,0.35)] text-white" aria-label="Get it on Google Play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-7 h-7 mr-3">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div class="flex flex-col items-start leading-tight">
                    <span class="text-[10px] uppercase font-medium tracking-[0.05em] mb-0.5 opacity-80">GET IT ON</span>
                    <span class="text-lg font-semibold tracking-tight">Google Play</span>
                </div>
            </a>
            <div class="flex items-center px-5 py-2.5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 opacity-60 cursor-default text-white transition-all duration-300" aria-label="App Store - Coming Soon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" class="w-7 h-7 mr-3">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div class="flex flex-col items-start leading-tight">
                    <span class="text-[10px] uppercase font-medium tracking-[0.05em] mb-0.5 opacity-80">Coming Soon</span>
                    <span class="text-lg font-semibold tracking-tight">App Store</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Video Audio and Playback Controls (bottom right) -->
    <div class="controls">
        <button class="control_btn" aria-label="Toggle Mute" onclick={toggleMute}>
            {#if isMuted}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            {:else}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            {/if}
        </button>

        <button class="control_btn" aria-label="Toggle Play" onclick={togglePlay}>
            {#if isPaused}
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            {:else}
                <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            {/if}
        </button>
    </div>
</section>
