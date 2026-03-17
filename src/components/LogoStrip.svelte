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
        @apply w-full overflow-hidden flex relative mt-8;
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    .logo_strip_main .marquee_track {
        @apply flex flex-row items-center whitespace-nowrap gap-12 md:gap-20;
        animation: scroll 25s linear infinite;
        width: max-content;
    }
    
    .logo_strip_main .marquee_track:hover {
        animation-play-state: paused;
    }

    .logo_strip_main .logo_item {
        @apply flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 px-4;
    }
    .logo_strip_main .logo_item span {
        @apply font-bold text-2xl md:text-3xl;
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
            <div class="logo_item"><span class="text-blue-800">ECG</span></div>
            <div class="logo_item"><span class="text-red-500 font-extrabold tracking-tight">telecel</span></div>
            <div class="logo_item"><span class="text-blue-500 font-serif">Ecobank</span></div>
            <div class="logo_item">
                <div class="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-xl md:text-2xl">MTN</div>
            </div>
            <div class="logo_item"><span class="text-orange-500 italic font-bold">Fidelity</span></div>
            <div class="logo_item"><span class="text-green-600 font-extrabold uppercase">adb</span></div>
            <div class="logo_item"><span class="text-blue-400 font-medium">Standard Chartered</span></div>
            <div class="logo_item"><span class="text-blue-600 font-bold uppercase">Ghana Water</span></div>
            <div class="logo_item"><span class="text-blue-900 font-bold tracking-widest uppercase">DSTV</span></div>
            <div class="logo_item"><span class="text-red-600 font-bold tracking-wider">AirtelTigo</span></div>
            
            <!-- Duplicated Set for Seamless Scrolling -->
            <div class="logo_item"><span class="text-blue-800">ECG</span></div>
            <div class="logo_item"><span class="text-red-500 font-extrabold tracking-tight">telecel</span></div>
            <div class="logo_item"><span class="text-blue-500 font-serif">Ecobank</span></div>
            <div class="logo_item">
                <div class="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-xl md:text-2xl">MTN</div>
            </div>
            <div class="logo_item"><span class="text-orange-500 italic font-bold">Fidelity</span></div>
            <div class="logo_item"><span class="text-green-600 font-extrabold uppercase">adb</span></div>
            <div class="logo_item"><span class="text-blue-400 font-medium">Standard Chartered</span></div>
            <div class="logo_item"><span class="text-blue-600 font-bold uppercase">Ghana Water</span></div>
            <div class="logo_item"><span class="text-blue-900 font-bold tracking-widest uppercase">DSTV</span></div>
            <div class="logo_item"><span class="text-red-600 font-bold tracking-wider">AirtelTigo</span></div>
        </div>
    </div>
</section>
