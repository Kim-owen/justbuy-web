<style lang="postcss">
    @reference "../styles/global.css";

    .hero_section_main {
        @apply bg-[url(/images/bg.png)] bg-cover bg-no-repeat bg-center h-dvh w-full flex flex-row px-8;
    }
    .hero_section_main .left_col, .hero_section_main .right_col {
        @apply h-full w-1/2 flex flex-col px-16;
    }
    .hero_section_main .right_col {
        @apply justify-end items-start;
    }
    .hero_section_main .left_col {
        @apply justify-center;
    }
    .hero_section_main .left_col h2 {
        @apply text-7xl text-heading_prime tracking-wide;
    }
    .hero_section_main .left_col h2 span {
        @apply text-heading_highlight;
    }
    .hero_section_main .left_col p {
        @apply text-base text-heading_grey pt-4 pb-10 pr-32;
    }
    .hero_section_main .left_col .download_btn {
        @apply bg-[url(/images/btn_bg.png)] bg-cover bg-no-repeat bg-left w-fit flex flex-row justify-center items-center px-8 py-3 text-white text-base tracking-wider rounded-md cursor-pointer;
    }
    .hero_section_main .right_col .hero_img {
        @apply w-full max-w-[500px] h-auto;
    }

</style>

<section class="hero_section_main">
    <div class="left_col">
        <h2 class="main_heading poppins-extrabold">Buy Airtime, Data and TV
        <span class="main_heading poppins-extrabold">Subscriptions in Seconds</span>
        </h2>
        <p class="poppins-medium">Top up MTN, Telecel, AirtelTigo and pay for DSTV and GOtv subscriptions instantly with one simple app.</p>
        <a href="https://tinyurl.com/Datankoaa" target="_blank" class="download_btn poppins-regular">
            <span>Download app</span>
        </a>
    </div>
    <div class="right_col">
        <img class="hero_img" src="/images/Hero_Image_Desktop.png" alt="just buy data"/>
    </div>
</section>