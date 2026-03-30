<script>
    import { onMount } from 'svelte';

    let visible = $state(true);

    onMount(() => {
        // Give the page a moment to paint before fading out
        const timer = setTimeout(() => {
            visible = false;
        }, 700);
        return () => clearTimeout(timer);
    });
</script>

{#if visible}
    <div class="loader_overlay" class:fade_out={!visible} aria-label="Loading JustBuy" role="status">
        <div class="loader_inner">
            <!-- Logo -->
            <div class="logo_wrap">
                <img src="/images/jb_logo.png" alt="JustBuy" class="loader_logo" />
            </div>

            <!-- Animated ring spinner -->
            <div class="spinner_ring">
                <span></span>
            </div>

            <!-- Pulsing dots -->
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <!-- Background blobs -->
        <div class="blob blob1"></div>
        <div class="blob blob2"></div>
    </div>
{/if}

<style>
    .loader_overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #0a0929 0%, #121063 60%, #0f2a4a 100%);
        transition: opacity 0.6s ease, visibility 0.6s ease;
        opacity: 1;
        visibility: visible;
        overflow: hidden;
    }

    .loader_overlay.fade_out {
        opacity: 0;
        visibility: hidden;
    }

    .loader_inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 28px;
        position: relative;
        z-index: 2;
    }

    /* Logo */
    .logo_wrap {
        animation: logoPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        opacity: 0;
    }

    .loader_logo {
        height: 70px;
        width: auto;
        filter: brightness(0) invert(1) drop-shadow(0 0 30px rgba(58, 183, 191, 0.5));
    }

    /* Spinner ring */
    .spinner_ring {
        width: 56px;
        height: 56px;
        position: relative;
        animation: fadeIn 0.4s ease 0.5s both;
    }

    .spinner_ring span {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #3ab7bf;
        border-right-color: rgba(58, 183, 191, 0.3);
        animation: spin 1s linear infinite;
    }

    /* Pulsing dots */
    .dots {
        display: flex;
        gap: 8px;
        animation: fadeIn 0.4s ease 0.7s both;
    }

    .dots span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(58, 183, 191, 0.7);
        animation: bounce 1.2s ease-in-out infinite;
    }

    .dots span:nth-child(2) { animation-delay: 0.2s; }
    .dots span:nth-child(3) { animation-delay: 0.4s; }

    /* Background blobs */
    .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
        opacity: 0.12;
        animation: blobFloat 4s ease-in-out infinite alternate;
    }

    .blob1 {
        width: 450px;
        height: 450px;
        background: #3ab7bf;
        top: -100px;
        right: -100px;
    }

    .blob2 {
        width: 350px;
        height: 350px;
        background: #5b59f5;
        bottom: -80px;
        left: -80px;
        animation-delay: 2s;
    }

    /* Keyframes */
    @keyframes logoPop {
        0%   { opacity: 0; transform: scale(0.7) translateY(20px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); opacity: 0.5; }
        50%       { transform: translateY(-8px); opacity: 1; }
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes blobFloat {
        from { transform: scale(1) translate(0, 0); }
        to   { transform: scale(1.15) translate(20px, -20px); }
    }
</style>
