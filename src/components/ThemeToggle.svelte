<script>
    import { themeStore } from '$lib/state/theme.svelte.js';
</script>

<button
    onclick={() => themeStore.toggle()}
    class="theme_toggle"
    aria-label="Toggle {themeStore.isDark ? 'light' : 'dark'} mode"
    title="Toggle theme"
>
    <div class="toggle_track">
        <div class="toggle_thumb" class:light={!themeStore.isDark}>
            {#if themeStore.isDark}
                <!-- Moon icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            {:else}
                <!-- Sun icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            {/if}
        </div>
    </div>
</button>

<style>
    .theme_toggle {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        -webkit-tap-highlight-color: transparent;
    }

    .toggle_track {
        width: 48px;
        height: 26px;
        border-radius: 999px;
        background: rgba(58, 183, 191, 0.2);
        border: 1px solid rgba(58, 183, 191, 0.4);
        display: flex;
        align-items: center;
        padding: 2px 3px;
        transition: background 0.3s ease, border-color 0.3s ease;
        position: relative;
    }

    :global([data-theme="light"]) .toggle_track {
        background: rgba(18, 16, 99, 0.1);
        border-color: rgba(18, 16, 99, 0.25);
    }

    .toggle_thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #3ab7bf;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease;
        transform: translateX(0);
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        flex-shrink: 0;
    }

    .toggle_thumb.light {
        transform: translateX(22px);
        background: #121063;
    }

    .theme_toggle:hover .toggle_track {
        border-color: #3ab7bf;
    }
</style>
