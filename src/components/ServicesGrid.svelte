<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";
    
    .z_section {
        @apply py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-white overflow-hidden;
    }

    .z_container {
        @apply max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 w-full;
    }
    
    /* Make second row reverse */
    .z_container.reverse {
        @apply lg:flex-row-reverse mt-24 md:mt-40;
    }

    .z_content_block {
        @apply flex-1 text-center lg:text-left z-20;
    }

    .z_content_block h2 {
        @apply text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121063] mb-6 leading-tight;
    }

    .z_content_block p {
        @apply text-base md:text-lg text-[#626973] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0;
    }

    .checklist {
        @apply flex flex-col gap-5 text-left max-w-md mx-auto lg:mx-0;
    }
    
    .checklist_item {
        @apply flex items-start gap-3;
    }
    
    .check_icon {
        @apply w-6 h-6 rounded-full bg-[#3ab7bf]/10 text-[#3ab7bf] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm;
    }

    .z_image_block {
        @apply flex-1 relative w-full flex justify-center;
    }

    .z_image_wrapper {
        @apply relative w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-50 border-[6px] border-white;
        aspect-ratio: 4/3;
    }
    
    .z_image_wrapper img {
        @apply w-full h-full object-cover;
    }
    
    .z_image_wrapper.phone_style img {
        @apply object-contain p-8;
    }

    /* Floating UI badges for Kowri glass effect */
    .floating_badge {
        @apply absolute bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-gray-100 z-30 floating;
    }
</style>

<section id="services" class="z_section">
    <!-- Row 1: Bills & Utilities -->
    <div class="z_container">
        <div class="z_content_block" use:reveal={{type: 'slideInLeft', delay: '0.1s'}}>
            <h2 class="poppins-extrabold">Pay Bills & Utilities <br/>in One Place</h2>
            <p class="poppins-regular">Handle all your recurring payments, from electricity to internet bundles, unified in a single dashboard. Payments process instantly, keeping your life running smoothly.</p>
            
            <div class="checklist poppins-medium">
                <div class="checklist_item">
                    <div class="check_icon">✓</div>
                    <span class="text-[#253c49]">Instant transfers to MTN & Telecel</span>
                </div>
                <div class="checklist_item">
                    <div class="check_icon">✓</div>
                    <span class="text-[#253c49]">Pay ECG & Ghana Water instantly</span>
                </div>
                <div class="checklist_item">
                    <div class="check_icon">✓</div>
                    <span class="text-[#253c49]">Zero hidden charges on utility bills</span>
                </div>
            </div>
        </div>
        
        <div class="z_image_block" use:reveal={{type: 'zoomIn', delay: '0.2s'}}>
            <div class="floating_badge top-6 -left-6 sm:-left-12" style="animation-delay: 1.2s;">
                <div class="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-xl">💡</div>
                <div class="text-left hidden sm:block">
                    <p class="text-sm font-extrabold text-[#121063]">ECG Prepaid</p>
                </div>
            </div>
            
            <div class="floating_badge bottom-10 -right-6 sm:-right-8 flex flex-row-reverse sm:flex-row" style="animation-delay: 0.5s;">
                <div class="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-xl">📺</div>
                <div class="text-right sm:text-left hidden sm:block">
                    <p class="text-sm font-extrabold text-[#121063]">DSTV Premium</p>
                </div>
            </div>

            <div class="z_image_wrapper">
                <img src="/images/mockup1.png" alt="Pay Bills Dashboard" style="object-position: center top;" />
            </div>
        </div>
    </div>

    <!-- Row 2: Cheap Data -->
    <div class="z_container reverse">
        <div class="z_content_block" use:reveal={{type: 'slideInRight', delay: '0.1s'}}>
            <h2 class="poppins-extrabold">Never Run Out Of <br/>Data Again</h2>
            <p class="poppins-regular">Get access to the absolute cheapest data bundles in Ghana. No need to memorize USSD shortcodes, simply tap and execute your top-ups in seconds.</p>
            
            <div class="checklist poppins-medium">
                <div class="checklist_item">
                    <div class="check_icon">✓</div>
                    <span class="text-[#253c49]">Unbeatable rates for MTN packages</span>
                </div>
                <div class="checklist_item">
                    <div class="check_icon">✓</div>
                    <span class="text-[#253c49]">Instant Telecel & AirtelTigo top-ups</span>
                </div>
                <div class="checklist_item">
                    <div class="check_icon">✓</div>
                    <span class="text-[#253c49]">Save favorites for 1-click purchases</span>
                </div>
            </div>
        </div>
        
        <div class="z_image_block" use:reveal={{type: 'zoomIn', delay: '0.2s'}}>
            <div class="floating_badge top-16 -right-6 sm:-right-12 flex flex-row-reverse sm:flex-row" style="animation-delay: 2s;">
                <div class="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-xl">📱</div>
                <div class="text-right sm:text-left hidden sm:block">
                    <p class="text-sm font-extrabold text-[#121063]">10GB Data</p>
                </div>
            </div>

            <div class="z_image_wrapper phone_style">
                <img src="/images/mockup2.png" alt="Buy Data Interface" />
            </div>
        </div>
    </div>
</section>