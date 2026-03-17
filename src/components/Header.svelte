<style lang="postcss">
    @reference "../styles/global.css";

    .header {
        @apply px-24 pt-6 flex flex-row bg-[transparent] w-full absolute justify-between items-center;
    }
    .header img {
        @apply h-14;
    }
    .header .download_btn {
        @apply bg-[url(/images/btn_bg.png)] bg-cover bg-no-repeat bg-left w-fit flex flex-row justify-center items-center px-8 py-3 text-white text-base tracking-wider rounded-md cursor-pointer;
    }
</style>

<section class="header">
    <img src="/images/jb_logo.png" alt="Just Buy logo" />
    <a href="https://tinyurl.com/Datankoaa" target="_blank" class="download_btn poppins-regular">
        <span>Download app</span>
    </a>
</section>