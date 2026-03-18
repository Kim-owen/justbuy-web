<script>
    let isDragging = false;

    // Draggable action to allow users to move the buttons around the screen
    function draggable(node) {
        let x;
        let y;

        function handleStart(event) {
            isDragging = false;
            if (event.type === 'touchstart') {
                x = event.touches[0].clientX;
                y = event.touches[0].clientY;
            } else {
                x = event.clientX;
                y = event.clientY;
            }

            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleMove, { passive: false });
            window.addEventListener('touchend', handleEnd);
        }

        function handleMove(event) {
            // Only consider it a drag if moved significantly to avoid breaking clicks
            isDragging = true;
            if (event.type === 'touchmove') event.preventDefault();

            let clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
            let clientY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;

            const dx = clientX - x;
            const dy = clientY - y;
            x = clientX;
            y = clientY;

            const rect = node.getBoundingClientRect();
            // Using left/top is easier for dragging than right/bottom
            node.style.right = 'auto';
            node.style.bottom = 'auto';
            node.style.left = `${rect.left + dx}px`;
            node.style.top = `${rect.top + dy}px`;
        }

        function handleEnd() {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);

            setTimeout(() => {
                isDragging = false;
            }, 50);
        }

        node.addEventListener('mousedown', handleStart);
        node.addEventListener('touchstart', handleStart, { passive: true });

        return {
            destroy() {
                node.removeEventListener('mousedown', handleStart);
                node.removeEventListener('touchstart', handleStart);
            }
        };
    }

    function handleClick(e) {
        if (isDragging) {
            e.preventDefault();
        }
    }
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .floating_cta {
        @apply fixed bottom-5 right-5 z-40 flex flex-col gap-3 cursor-move;
    }

    .float_btn {
        @apply w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300;
        -webkit-tap-highlight-color: transparent;
    }

    .float_btn:active {
        @apply scale-95;
    }

    .float_btn.call {
        background: linear-gradient(135deg, #121063, #1a1680);
        animation: float-up-down 3s ease-in-out infinite;
    }

    .float_btn.whatsapp {
        background: #25D366;
        animation: float-up-down 3.5s ease-in-out infinite, pulse-glow-green 2s infinite;
    }

    .float_btn:hover {
        transform: scale(1.1);
        animation-play-state: paused;
    }

    .float_btn svg {
        @apply w-6 h-6 text-white;
    }

    .float_label {
        @apply absolute right-16 top-1/2 -translate-y-1/2 bg-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200;
        color: #253c49;
    }
    
    .float_btn:hover .float_label {
        @apply opacity-100;
    }

    @keyframes float-up-down {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }

    @keyframes pulse-glow-green {
        0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
        70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
        100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
</style>

<div class="floating_cta" use:draggable>
    <a href="tel:0200511211" class="float_btn call relative" aria-label="Call us" onclick={handleClick}>
        <span class="float_label poppins-medium">Call Us</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    </a>
    <a href="https://wa.me/233200511211?text=Hi%20JustBuy%2C%20I%20need%20help" target="_blank" class="float_btn whatsapp relative" aria-label="Chat on WhatsApp" onclick={handleClick}>
        <span class="float_label poppins-medium">WhatsApp</span>
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
</div>
