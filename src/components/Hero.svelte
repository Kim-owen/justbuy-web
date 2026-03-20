<script>
    import { reveal } from "$lib/reveal";
    import { contentState } from "$lib/state/content.svelte";
    
    let isMuted = $state(true);
    let isPaused = $state(false);
    let videoEl = $state(null);

    // Get the first active video from the shared state
    let activeVideo = $derived(contentState.videos.find(v => v.active) || contentState.videos[0]);

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

    .btn_primary {
        @apply bg-[#3ab7bf] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg w-full sm:w-auto text-center border-2 border-[#3ab7bf];
    }

    .btn_outline {
        @apply bg-transparent border-2 border-gray-400 text-gray-200 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-lg hover:border-[#3ab7bf] hover:text-[#3ab7bf] hover:bg-[#3ab7bf]/10 transition backdrop-blur-sm w-full sm:w-auto text-center;
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
        <h1 class="poppins-extrabold">
            All Your <span class="highlight">Payments</span><br/> One App
        </h1>
        <p class="poppins-regular">
            Simplify airtime, data bundles, and utility bill payments with Ghana's fastest financial platform.
        </p>

        <div class="btn_group">
            <a href="https://tinyurl.com/Datankoaa" target="_blank" class="btn_primary poppins-semibold">
                Get the App
            </a>
            <a href="/corporate" class="btn_outline poppins-semibold">
                For Business
            </a>
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