<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let x = $state(0);
    let y = $state(0);
    let innerX = $state(0);
    let innerY = $state(0);
    let isHovering = $state(false);
    let isVisible = $state(false);

    onMount(() => {
        if (!browser) return;

        // Don't show custom cursor on touch devices to avoid ghost hovering dots
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) return;

        // Apply global class to hide default cursor
        document.body.classList.add('has-custom-cursor');

        let requestRef;

        const onMouseMove = (e) => {
            isVisible = true;
            x = e.clientX;
            y = e.clientY;
            
            // Instantly move the small inner dot
            innerX = e.clientX;
            innerY = e.clientY;
        };

        const onMouseLeave = () => {
            isVisible = false;
        };

        const onMouseEnter = () => {
            isVisible = true;
        };

        // Smooth trailing for the outer circle
        let currentX = x;
        let currentY = y;
        
        const loop = () => {
            currentX += (x - currentX) * 0.15; // The 0.15 value dictates trailing speed
            currentY += (y - currentY) * 0.15;
            
            const outer = document.querySelector('.cursor-outer');
            if (outer) {
                // Outer circle scales up when hovering over clickable elements
                let scale = isHovering ? 1.5 : 1;
                outer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
            }
            
            requestRef = requestAnimationFrame(loop);
        };

        // Event listener to check if we are hovering a clickable element
        const handleMouseOver = (e) => {
            const target = e.target.closest('a, button, input, [role="button"], .interactive');
            isHovering = !!target;
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseout', onMouseLeave);
        window.addEventListener('mouseover', onMouseEnter);
        document.addEventListener('mouseover', handleMouseOver);
        
        requestRef = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseout', onMouseLeave);
            window.removeEventListener('mouseover', onMouseEnter);
            document.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(requestRef);
            document.body.classList.remove('has-custom-cursor');
        };
    });
</script>

{#if isVisible}
    <div class="cursor-inner" class:hovering={isHovering} style="transform: translate3d({innerX}px, {innerY}px, 0)"></div>
    <div class="cursor-outer" class:hovering={isHovering}></div>
{/if}

<style>
    /* Hide the default cursors if JS is enabled and it's a mouse device */
    :global(body.has-custom-cursor),
    :global(body.has-custom-cursor *) {
        cursor: none !important;
    }

    .cursor-inner {
        position: fixed;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #3ab7bf;
        pointer-events: none;
        z-index: 9999999;
        top: -4px;
        left: -4px;
        transition: transform 0.1s ease, background-color 0.2s;
    }

    .cursor-inner.hovering {
        background-color: transparent; /* Inner dot disappears on hover to let the outer ring shine */
    }

    .cursor-outer {
        position: fixed;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid rgba(58, 183, 191, 0.4);
        pointer-events: none;
        z-index: 9999998;
        top: -20px;
        left: -20px;
        transition: border-color 0.2s, background-color 0.2s;
        will-change: transform;
    }

    .cursor-outer.hovering {
        border-color: #3ab7bf;
        background-color: rgba(58, 183, 191, 0.1); /* The circle fills with a glass effect */
    }
</style>
