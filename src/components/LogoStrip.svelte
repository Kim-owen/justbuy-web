<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .logo_strip_main {
        @apply bg-white py-10 md:py-16 w-full flex flex-col items-center justify-center overflow-hidden;
    }
    .logo_strip_main .heading {
        @apply text-xs sm:text-sm tracking-widest uppercase mb-8 md:mb-10 text-center px-6;
        color: #9ca3af;
    }

    .marquee_container {
        @apply w-full overflow-hidden relative;
        mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    }

    .marquee_track {
        @apply flex flex-row items-center;
        animation: marquee 25s linear infinite;
        width: max-content;
        gap: 2.5rem;
    }

    @media (min-width: 768px) {
        .marquee_track {
            gap: 4rem;
            animation-duration: 30s;
        }
    }
    
    .marquee_track:hover {
        animation-play-state: paused;
    }

    .logo_item {
        @apply flex items-center justify-center flex-shrink-0;
        -webkit-tap-highlight-color: transparent;
    }
    .logo_item img {
        height: 48px;
        width: auto;
        object-fit: contain;
        border-radius: 10px;
        opacity: 0.85;
        transition: all 0.3s ease;
        filter: grayscale(20%);
    }
    @media (min-width: 640px) {
        .logo_item img {
            height: 56px;
        }
    }
    @media (min-width: 768px) {
        .logo_item img {
            height: 64px;
        }
    }
    .logo_item img:hover {
        opacity: 1;
        filter: grayscale(0%);
        transform: scale(1.1);
    }

    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
</style>

<section class="logo_strip_main" use:reveal>
    <p class="heading font-poppins font-medium">Trusted by Ghana's leading service providers</p>
    
    <div class="marquee_container">
        <div class="marquee_track">
            <!-- Set 1 -->
            <div class="logo_item"><img src="/images/logos/mtn.png" alt="MTN Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/ecg.png" alt="ECG Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/telecel.png" alt="Telecel Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/airteltigo.png" alt="AirtelTigo Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/startimes.png" alt="StarTimes" loading="lazy" /></div>
            
            <!-- Set 2 (duplicate for seamless loop) -->
            <div class="logo_item"><img src="/images/logos/mtn.png" alt="MTN Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/ecg.png" alt="ECG Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/telecel.png" alt="Telecel Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/airteltigo.png" alt="AirtelTigo Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/startimes.png" alt="StarTimes" loading="lazy" /></div>

            <!-- Set 3 (extra duplicate for wider screens) -->
            <div class="logo_item"><img src="/images/logos/mtn.png" alt="MTN Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/ecg.png" alt="ECG Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/telecel.png" alt="Telecel Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/airteltigo.png" alt="AirtelTigo Ghana" loading="lazy" /></div>
            <div class="logo_item"><img src="/images/logos/startimes.png" alt="StarTimes" loading="lazy" /></div>
        </div>
    </div>
</section>

