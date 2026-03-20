<script>
    import { reveal } from "$lib/reveal";
	let slide = $state(0);
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .how_it_works_main {
        @apply bg-[#f8fafc] w-full flex flex-col px-6 md:px-12 lg:px-24 py-20 md:py-32 justify-center items-center;
    }
    .how_it_works_main .heading {
        @apply text-3xl md:text-5xl font-extrabold text-[#121063] mb-16 text-center max-w-[600px] mx-auto tracking-tight;
    }
    .how_it_works_main .content {
        @apply flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-12 lg:gap-24;
    }
    .how_it_works_main .content .left_col, .how_it_works_main .content .right_col {
        @apply flex flex-col w-full md:w-1/2 h-full;
    }
    .how_it_works_main .content .left_col {
        @apply flex justify-center items-center mb-10 md:mb-0 relative;
    }
    .how_it_works_main .content .right_col {
        @apply flex justify-center flex-col gap-6;
    }
    .slide_bg {
        @apply relative w-full max-w-sm rounded-[3rem] bg-white p-8 flex justify-center items-center shadow-2xl border-[6px] border-white overflow-hidden aspect-[4/5];
    }
    /* Subtle background gradient to make the phone pop */
    .slide_bg::after {
        content: '';
        @apply absolute inset-0 bg-gradient-to-tr from-[#3ab7bf]/10 to-transparent pointer-events-none;
    }
    .slide_bg img {
        @apply w-full h-full object-contain relative z-10 drop-shadow-2xl transition-all duration-500 ease-out;
    }

    /* Steps Styling */
    .step {
        @apply cursor-pointer bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300;
    }
    .step.inactive {
        @apply bg-transparent border-transparent shadow-none hover:bg-white/50 hover:shadow-sm hover:translate-y-0 opacity-60;
    }
    
    .title_wrapper {
        @apply flex flex-row items-center mb-3;
    }
    
    .number {
        @apply bg-[#3ab7bf] rounded-xl w-8 h-8 flex justify-center items-center mr-4 shadow-md;
    }
    .number.inactive_number {
        @apply bg-gray-200 shadow-none;
    }
    .number span {
        @apply text-white text-sm font-bold;
    }
    .number.inactive_number span {
        @apply text-gray-500;
    }
    
    .title {
        @apply text-xl font-extrabold text-[#121063];
    }
    .title.inactive_title {
        @apply text-gray-400;
    }

    .text_desc {
        @apply ml-12 text-[#626973] text-sm md:text-base leading-relaxed;
    }
</style>

<section id="how-it-works" class="how_it_works_main overflow-hidden">
    <h2 class="heading poppins-extrabold" use:reveal={{type: 'fadeInDown'}}>How Just Buy Works</h2>
    <div class="content">
        <div class="left_col" use:reveal={{type: 'slideInLeft', duration: '0.8s'}}>
            <div class="slide_bg floating" style="animation-duration: 6s;">
                {#if slide == 0}
                    <img src="/images/mockup1.png" alt="Just Buy app - Step 1" />
                {:else if slide == 1}
                    <img src="/images/mockup2.png" alt="Just Buy app - Step 2" />
                {:else if slide == 2}
                    <img src="/images/mockup1.png" alt="Just Buy app - Step 3" />
                {:else if slide == 3}
                    <img src="/images/mockup2.png" alt="Just Buy app - Step 4" />
                {/if}
            </div>
        </div>
        <div class="right_col poppins-regular" use:reveal={{type: 'slideInRight', duration: '0.8s', delay: '0.2s'}}>
            
            <!-- Step 1 -->
            <button class="step {slide !== 0 ? 'inactive' : ''} text-left" onclick={() => slide = 0} aria-label="Step 1">
                <div class="title_wrapper">
                    <div class="number {slide !== 0 ? 'inactive_number' : ''}">
                        <span class="poppins-bold">1</span>
                    </div>
                    <p class="title {slide !== 0 ? 'inactive_title' : ''}">Create Your Account</p>
                </div>
                <p class="text_desc">Sign up and complete quick KYC verification to unlock your personal Just Buy wallet securely.</p>
            </button>

            <!-- Step 2 -->
            <button class="step {slide !== 1 ? 'inactive' : ''} text-left" onclick={() => slide = 1} aria-label="Step 2">
                <div class="title_wrapper">
                    <div class="number {slide !== 1 ? 'inactive_number' : ''}">
                        <span class="poppins-bold">2</span>
                    </div>
                    <p class="title {slide !== 1 ? 'inactive_title' : ''}">Fund Your Wallet</p>
                </div>
                <p class="text_desc">Add funds instantly using Mobile Money (MTN, Telecel, AirtelTigo) with zero hidden fees.</p>
            </button>

            <!-- Step 3 -->
            <button class="step {slide !== 2 ? 'inactive' : ''} text-left" onclick={() => slide = 2} aria-label="Step 3">
                <div class="title_wrapper">
                    <div class="number {slide !== 2 ? 'inactive_number' : ''}">
                        <span class="poppins-bold">3</span>
                    </div>
                    <p class="title {slide !== 2 ? 'inactive_title' : ''}">Choose Your Service</p>
                </div>
                <p class="text_desc">Pay utility bills, buy highly discounted airtime, or purchase data bundles in seconds.</p>
            </button>

            <!-- Step 4 -->
            <button class="step {slide !== 3 ? 'inactive' : ''} text-left" onclick={() => slide = 3} aria-label="Step 4">
                <div class="title_wrapper">
                    <div class="number {slide !== 3 ? 'inactive_number' : ''}">
                        <span class="poppins-bold">4</span>
                    </div>
                    <p class="title {slide !== 3 ? 'inactive_title' : ''}">Instant Confirmation</p>
                </div>
                <p class="text_desc">Receive automatic digital receipts and instant SMS notifications for every transaction.</p>
            </button>

        </div>
    </div>
</section>