<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import CTA from "../../components/CTA..svelte";
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../../styles/global.css";

    .subpage_hero {
        @apply min-h-[60vh] bg-services_bg relative flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-24;
    }

    .subpage_hero h1 {
        @apply text-5xl md:text-7xl font-bold mb-6 text-heading_prime relative z-10 leading-tight;
    }
    .subpage_hero p {
        @apply text-lg md:text-xl text-heading_secondary max-w-2xl relative z-10;
    }

    .content_section {
        @apply py-20 px-6 md:px-24 max-w-7xl mx-auto;
    }
    
    .retail_grid {
        @apply flex flex-col md:flex-row gap-16 items-center;
    }
    
    .retail_text {
        @apply w-full md:w-1/2;
    }
    
    .retail_image {
        @apply w-full md:w-1/2 relative;
    }
    
    .retail_image img {
        @apply relative z-10 rounded-2xl shadow-xl;
        animation: floating 4s ease-in-out infinite;
    }
    
    .backdrop {
        @apply absolute top-10 -right-10 w-full h-full bg-heading_highlight rounded-2xl opacity-20 z-0;
    }
</style>

<Header />

<main>
    <section class="subpage_hero">
        <h1 class="poppins-bold" use:reveal={{type: 'fadeInDown'}}>Retail Solutions</h1>
        <p class="poppins-regular" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>Become a Just Buy agent. Increase your foot traffic and earn commissions by selling airtime and processing bills.</p>
    </section>

    <section class="content_section">
        <div class="retail_grid">
            <div class="retail_text" use:reveal={{type: 'slideInLeft', duration: '1s'}}>
                <h2 class="text-4xl text-heading_secondary poppins-bold mb-6">Boost Your Store's Income</h2>
                <p class="text-heading_grey mb-6 poppins-regular leading-relaxed">Join thousands of merchants across Ghana who are using the Just Buy Retailer App. Whether you run a provision shop, a pharmacy, or a boutique, offering bill payment and top-up services brings more customers to your door.</p>
                <ul class="flex flex-col gap-4 text-heading_secondary poppins-medium">
                    <li class="flex items-center gap-3">
                        <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Zero setup fees or maintenance costs
                    </li>
                    <li class="flex items-center gap-3">
                        <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Instant commission on every transaction
                    </li>
                    <li class="flex items-center gap-3">
                        <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        24/7 dedicated merchant support
                    </li>
                </ul>
            </div>
            
            <div class="retail_image" use:reveal={{type: 'zoomIn', delay: '0.4s'}}>
                <div class="backdrop pulse-glow"></div>
                <img src="/images/Hero_Image_Desktop.png" alt="Retail Application" />
            </div>
        </div>
    </section>

    <CTA />
</main>
<Footer />
