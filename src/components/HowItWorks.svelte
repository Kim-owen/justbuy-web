<script>
	let slide = $state(0);
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .how_it_works_main {
        @apply bg-white h-auto w-full flex flex-col px-24 py-20 justify-center items-center;
    }
    .how_it_works_main .heading {
        @apply text-5xl leading-14 text-heading_secondary mb-16 text-center max-w-[600px] mx-auto tracking-wide;
    }
    .how_it_works_main .content {
        @apply flex flex-row w-full gap-6;
    }
    .how_it_works_main .content .left_col, .how_it_works_main .content .right_col {
        @apply flex flex-col w-1/2 px-10 h-full;
    }
    .how_it_works_main .content .left_col {
        @apply flex justify-center items-center;
    }
    .how_it_works_main .content .right_col {
        @apply flex justify-center h-[-webkit-fill-available];
    }
    .how_it_works_main .content .left_col .slide_bg {
        @apply h-[30rem] w-fit px-28 rounded-3xl bg-[url(/images/btn_bg.png)] bg-center flex justify-center items-center shadow-md inset-shadow-sm;
    }
    .how_it_works_main .content .right_col .step {
        @apply mb-10 cursor-pointer;
    }
    .how_it_works_main .content .right_col .step:last-of-type {
        @apply mb-0;
    }
    .how_it_works_main .content .right_col .step .title_wrapper {
        @apply flex flex-row items-center mb-2;
    }
    .how_it_works_main .content .right_col .step .text {
        @apply ml-10 text-heading_secondary text-sm;
    }
    .how_it_works_main .content .right_col .step .title_wrapper .number {
        @apply bg-[url(/images/btn_bg.png)] bg-center bg-contain rounded-md w-6 h-6 flex justify-center items-center mr-4;
    }
    .how_it_works_main .content .right_col .step .title_wrapper .number span {
        @apply text-white text-xs;
    }
    .how_it_works_main .content .right_col .step .title_wrapper .title {
        @apply text-base text-heading_secondary;
    }
</style>

<section class="how_it_works_main">
    <h2 class="heading poppins-bold">How Just Buy Works</h2>
    <div class="content">
        <div class="left_col">
            <div class="slide_bg">
                {#if slide == 0}
                    <img class="transition ease-in-out" src="/images/mockup1.png" alt="Just Buy app" />
                {:else if slide == 1}
                    <img class="transition ease-in-out" src="/images/mockup2.png" alt="Just Buy app" />
                {:else if slide == 2}
                    <img class="transition ease-in-out" src="/images/mockup1.png" alt="Just Buy app" />
                {:else if slide == 3}
                    <img class="transition ease-in-out" src="/images/mockup2.png" alt="Just Buy app" />
                {/if}
            </div>
        </div>
        <div class="right_col">
        {#if slide == 0}
            <div class="step" onclick={() => slide = 0}>
                <div class="title_wrapper">
                    <div class="number">
                        <span class="poppins-medium">1</span>
                    </div>
                    <p class="title poppins-semibold">Create Your Account</p>
                </div>
                <p class="text poppins-regular">Sign up and complete quick KYC verification to unlock your personal Just Buy wallet.</p>
            </div>
        {:else}
            <div class="step inactive" onclick={() => slide = 0}>
                <div class="title_wrapper">
                    <div class="bg-inactive_grey rounded-md w-6 h-6 flex justify-center items-center mr-4">
                        <span class="text-white text-xs poppins-medium">1</span>
                    </div>
                    <p class="text-base text-inactive_grey poppins-semibold">Create Your Account</p>
                </div>
                <p class="ml-10 text-inactive_grey text-sm poppins-regular">Sign up and complete quick KYC verification to unlock your personal Just Buy wallet.</p>
            </div>
        {/if}

        {#if slide == 1}
            <div class="step" onclick={() => slide = 1}>
                <div class="title_wrapper">
                    <div class="number">
                        <span class="poppins-medium">2</span>
                    </div>
                    <p class="title poppins-semibold">Fund Your Wallet</p>
                </div>
                <p class="text poppins-regular">Add funds securely using mobile money.</p>
            </div>
        {:else}
            <div class="step inactive" onclick={() => slide = 1}>
                <div class="title_wrapper">
                    <div class="bg-inactive_grey rounded-md w-6 h-6 flex justify-center items-center mr-4">
                        <span class="text-white text-xs poppins-medium">2</span>
                    </div>
                    <p class="text-base text-inactive_grey poppins-semibold">Fund Your Wallet</p>
                </div>
                <p class="ml-10 text-inactive_grey text-sm poppins-regular">Add funds securely using mobile money.</p>
            </div>
        {/if}

        {#if slide == 2}
            <div class="step" onclick={() => slide = 2}>
                <div class="title_wrapper">
                    <div class="number">
                        <span class="poppins-medium">3</span>
                    </div>
                    <p class="title poppins-semibold">Choose Your Service</p>
                </div>
                <p class="text poppins-regular">Pay bills, buy airtime or purchase data in seconds.</p>
            </div>
        {:else}
            <div class="step inactive" onclick={() => slide = 2}>
                <div class="title_wrapper">
                    <div class="bg-inactive_grey rounded-md w-6 h-6 flex justify-center items-center mr-4">
                        <span class="text-white text-xs poppins-medium">3</span>
                    </div>
                    <p class="text-base text-inactive_grey poppins-semibold">Choose Your Service</p>
                </div>
                <p class="ml-10 text-inactive_grey text-sm poppins-regular">Pay bills, buy airtime or purchase data in seconds.</p>
            </div>
        {/if}


        {#if slide == 3}
            <div class="step" onclick={() => slide = 3}>
                <div class="title_wrapper">
                    <div class="number">
                        <span class="poppins-medium">4</span>
                    </div>
                    <p class="title poppins-semibold">Instant Confirmation</p>
                </div>
                <p class="text poppins-regular">Receive digital receipts and notifications for every transaction.</p>
            </div>
        {:else}
            <div class="step inactive" onclick={() => slide = 3}>
                <div class="title_wrapper">
                    <div class="bg-inactive_grey rounded-md w-6 h-6 flex justify-center items-center mr-4">
                        <span class="text-white text-xs poppins-medium">4</span>
                    </div>
                    <p class="text-base text-inactive_grey poppins-semibold">Instant Confirmation</p>
                </div>
                <p class="ml-10 text-inactive_grey text-sm poppins-regular">Receive digital receipts and notifications for every transaction.</p>
            </div>
        {/if}
        </div>
    </div>
</section>