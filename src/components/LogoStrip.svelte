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
    .logo_strip_main .logos {
        @apply flex flex-row flex-wrap justify-center items-center gap-8 md:gap-14 px-6;
    }
    
    .logo_strip_main .logos .logo_item {
        @apply flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300;
    }
    .logo_strip_main .logos .logo_item span {
        @apply font-bold text-xl md:text-2xl;
    }
</style>

<section class="logo_strip_main" use:reveal>
    <p class="heading poppins-medium">Partnering with the best institutions to empower your financial life</p>
    <div class="logos">
        <div class="logo_item"><span class="text-blue-800">ECG</span></div>
        <div class="logo_item"><span class="text-red-500">telecel</span></div>
        <div class="logo_item"><span class="text-blue-500">Ecobank</span></div>
        <div class="logo_item">
            <div class="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">MTN</div>
        </div>
        <div class="logo_item"><span class="text-orange-500">Fidelity</span></div>
        <div class="logo_item"><span class="text-green-600">adb</span></div>
        <div class="logo_item"><span class="text-blue-400">Standard Chartered</span></div>
    </div>
</section>
