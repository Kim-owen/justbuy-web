<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .cta {
        @apply bg-[url(/images/CTA_bg.png)] bg-fixed bg-cover bg-no-repeat bg-center h-auto w-full flex flex-col px-6 md:px-24 py-14 md:py-20 justify-center items-center text-center;
    }
    .cta .heading {
        @apply text-3xl md:text-5xl md:leading-14 text-heading_secondary mb-6 text-center max-w-[600px] mx-auto tracking-wide;
    }
    .cta p {
        @apply text-sm md:text-base text-prime_grey pt-4 pb-10 max-w-[400px] text-center;
    }
    .cta .download_btn {
        @apply bg-[url(/images/btn_bg.png)] bg-cover bg-no-repeat bg-left w-fit flex flex-row justify-center items-center px-8 py-3 text-white text-base tracking-wider rounded-md cursor-pointer;
    }
</style>

<section class="cta" use:reveal>
    <h2 class="heading poppins-bold">Take Control of Your Digital Payments</h2>
    <p class="poppins-medium">Download the Just Buy app, fund your wallet and start paying for airtime, data and bills the smarter way.</p>
    <a href="https://tinyurl.com/Datankoaa" target="_blank" class="download_btn poppins-regular">
        <span>Download app</span>
    </a>
</section>