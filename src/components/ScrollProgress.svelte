<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    let scrollProgress = $state(0);

    onMount(() => {
        if (!browser) return;
        
        const updateScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight > 0) {
                scrollProgress = (window.scrollY / scrollHeight) * 100;
            } else {
                scrollProgress = 0;
            }
        };

        window.addEventListener('scroll', updateScroll);
        window.addEventListener('resize', updateScroll);
        
        // Initial call
        updateScroll();
        
        return () => {
            window.removeEventListener('scroll', updateScroll);
            window.removeEventListener('resize', updateScroll);
        };
    });
</script>

<div class="scroll-progress-container" aria-hidden="true">
    <div class="scroll-progress-bar" style="width: {scrollProgress}%"></div>
</div>

<style>
    .scroll-progress-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: transparent;
        z-index: 9999999;
        pointer-events: none;
    }

    .scroll-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #3ab7bf, #5b59f5);
        border-radius: 0 2px 2px 0;
        box-shadow: 0 0 10px rgba(58, 183, 191, 0.5);
        transition: width 0.1s ease-out;
    }
</style>
