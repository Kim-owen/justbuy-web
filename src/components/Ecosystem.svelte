<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .eco_section {
        @apply py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-[#f8fafc];
    }
    
    .eco_header {
        @apply text-center max-w-2xl mx-auto mb-16;
    }
    
    .eco_header h2 {
        @apply text-3xl md:text-5xl font-extrabold text-[#121063] mb-4;
    }
    
    .eco_header p {
        @apply text-gray-500 text-lg;
    }

    .eco_grid {
        @apply max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8;
    }

    .eco_card {
        @apply bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer relative overflow-hidden;
    }
    
    .eco_icon_wrap {
        @apply w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner;
    }
    
    /* Specific icon colors */
    .icon_pay { @apply bg-blue-50 text-blue-500; }
    .icon_card { @apply bg-purple-50 text-purple-500; }
    .icon_loan { @apply bg-orange-50 text-orange-500; }
    .icon_save { @apply bg-green-50 text-green-500; }

    .eco_card h3 {
        @apply text-2xl font-bold text-[#121063] mb-3;
    }

    .eco_card p {
        @apply text-[#626973] text-sm leading-relaxed mb-6 flex-grow;
    }

    .coming_soon_badge {
        @apply bg-gray-100 text-gray-500 text-[10px] uppercase font-bold tracking-wider py-1.5 px-3 rounded-full mb-4;
    }

    .beta_link {
        @apply text-xs font-semibold text-[#3ab7bf] hover:text-[#121063] transition-colors mt-auto flex items-center gap-1;
    }
</style>

<section class="eco_section" id="ecosystem">
    <div class="eco_header" use:reveal={{type: 'fadeInDown'}}>
        <h2 class="font-poppins font-extrabold">The Complete Ecosystem</h2>
        <p class="font-poppins">Everything you need to manage your money effortlessly, right in your pocket.</p>
    </div>

    <div class="eco_grid">
        <!-- Pay -->
        <div class="eco_card" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
            <div class="eco_icon_wrap icon_pay">💸</div>
            <h3 class="font-poppins font-bold">Pay</h3>
            <p class="font-poppins">Send money, buy cheap data, and pay all your utility bills instantly with zero hassle.</p>
            <div class="mt-4"></div>
            <a href="https://tinyurl.com/Datankoaa" class="beta_link font-poppins font-bold">Get App Now →</a>
        </div>

        <!-- Virtual Cards (Coming Soon) -->
        <div class="eco_card" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>
            <div class="eco_icon_wrap icon_card">💳</div>
            <h3 class="font-poppins font-bold">Virtual Cards</h3>
            <p class="font-poppins">Create USD virtual cards to pay for Netflix, Facebook Ads, and shop globally online.</p>
            <span class="coming_soon_badge font-poppins font-bold">Coming Soon</span>
            <a href="#" class="beta_link font-poppins font-bold">Join Beta Program →</a>
        </div>

        <!-- Borrow (Coming Soon) -->
        <div class="eco_card" use:reveal={{type: 'fadeInUp', delay: '0.3s'}}>
            <div class="eco_icon_wrap icon_loan">🤝</div>
            <h3 class="font-poppins font-bold">Borrow</h3>
            <p class="font-poppins">Access instant micro-loans directly to your mobile money wallet when you need cash fast.</p>
            <span class="coming_soon_badge font-poppins font-bold">Coming Soon</span>
            <a href="#" class="beta_link font-poppins font-bold">Join Beta Program →</a>
        </div>

        <!-- Save & Invest (Coming Soon) -->
        <div class="eco_card" use:reveal={{type: 'fadeInUp', delay: '0.4s'}}>
            <div class="eco_icon_wrap icon_save">📈</div>
            <h3 class="font-poppins font-bold">Save & Invest</h3>
            <p class="font-poppins">Grow your wealth with high-yield automated savings and curated investment plans.</p>
            <span class="coming_soon_badge font-poppins font-bold">Coming Soon</span>
            <a href="#" class="beta_link font-poppins font-bold">Join Beta Program →</a>
        </div>
    </div>
</section>

