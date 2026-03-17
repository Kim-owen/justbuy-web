<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .logo_strip_main {
        @apply bg-white py-12 md:py-16 w-full flex flex-col items-center justify-center;
    }
    .logo_strip_main .heading {
        @apply text-sm text-heading_grey tracking-widest uppercase mb-10 text-center px-6;
    }

    .logo_strip_main .marquee_container {
        @apply w-full overflow-hidden flex relative mt-2;
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    .logo_strip_main .marquee_track {
        @apply flex flex-row items-center whitespace-nowrap gap-10 md:gap-16;
        animation: scroll 30s linear infinite;
        width: max-content;
    }
    
    .logo_strip_main .marquee_track:hover {
        animation-play-state: paused;
    }

    .logo_strip_main .logo_item {
        @apply flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 px-2;
        -webkit-tap-highlight-color: transparent;
    }
    .logo_strip_main .logo_item img {
        @apply h-12 sm:h-14 md:h-16 w-auto object-contain rounded-lg;
    }

    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
</style>

<section class="logo_strip_main" use:reveal>
    <p class="heading poppins-medium">Partnering with the best institutions to empower your financial life</p>
    
    <div class="marquee_container">
        <div class="marquee_track">
            <!-- First Set -->
            <div class="logo_item"><img src="/images/logos/mtn.png" alt="MTN Ghana" /></div>
            <div class="logo_item"><img src="/images/logos/ecg.png" alt="ECG Ghana" /></div>
            <div class="logo_item"><img src="/images/logos/telecel.png" alt="Telecel Ghana" /></div>
            <div class="logo_item"><img src="/images/logos/airteltigo.png" alt="AirtelTigo" /></div>
            <div class="logo_item"><img src="/images/logos/startimes.png" alt="StarTimes" /></div>
            
            <!-- Duplicated Set for Seamless Scrolling -->
            <div class="logo_item"><img src="/images/logos/mtn.png" alt="MTN Ghana" /></div>
            <div class="logo_item"><img src="/images/logos/ecg.png" alt="ECG Ghana" /></div>
            <div class="logo_item"><img src="/images/logos/telecel.png" alt="Telecel Ghana" /></div>
            <div class="logo_item"><img src="/images/logos/airteltigo.png" alt="AirtelTigo" /></div>
            <div class="logo_item"><img src="/images/logos/startimes.png" alt="StarTimes" /></div>
        </div>
    </div>
</section>
