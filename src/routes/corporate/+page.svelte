<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import CTA from "../../components/CTA..svelte";
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../../styles/global.css";

    .subpage_hero {
        @apply min-h-[60vh] bg-heading_prime text-white relative flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-24;
    }
    
    .blob {
        @apply absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--color-heading_highlight)_0%,_transparent_50%)] opacity-20 top-0 left-0 scale-150 mix-blend-screen;
    }

    .subpage_hero h1 {
        @apply text-5xl md:text-7xl font-bold mb-6 relative z-10 leading-tight;
    }
    .subpage_hero p {
        @apply text-lg md:text-xl text-gray-300 max-w-2xl relative z-10;
    }

    .content_section {
        @apply py-20 px-6 md:px-24 max-w-7xl mx-auto;
    }
    
    .feature_grid {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16;
    }
    
    .feature_card {
        @apply bg-white p-8 rounded-xl shadow-lg border-t-4 border-heading_highlight hover:-translate-y-2 transition-transform duration-300;
    }
</style>

<Header />

<main>
    <section class="subpage_hero">
        <div class="blob pulse-glow"></div>
        <h1 class="poppins-bold" use:reveal={{type: 'fadeInDown'}}>Corporate Solutions</h1>
        <p class="poppins-regular" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>Empower your enterprise with scalable, reliable digital payment infrastructure built for modern businesses in Ghana.</p>
    </section>

    <section class="content_section">
        <div class="text-center" use:reveal>
            <h2 class="text-4xl text-heading_secondary poppins-bold mb-6">Why Choose Just Buy Corporate?</h2>
            <p class="text-heading_grey max-w-3xl mx-auto poppins-regular">We provide bespoke payment APIs, bulk airtime/data distribution tools, and consolidated billing dashboards for corporations of all sizes.</p>
        </div>

        <div class="feature_grid">
            <div class="feature_card" use:reveal={{type: 'zoomIn', delay: '0.1s'}}>
                <div class="w-12 h-12 bg-services_bg rounded-full flex justify-center items-center mb-6 text-heading_highlight">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h3 class="text-xl poppins-bold text-heading_secondary mb-3">Bulk Disbursements</h3>
                <p class="text-sm text-heading_grey poppins-regular">Send airtime or data to thousands of employees and contractors with a single click.</p>
            </div>
            <div class="feature_card" use:reveal={{type: 'zoomIn', delay: '0.3s'}}>
                <div class="w-12 h-12 bg-services_bg rounded-full flex justify-center items-center mb-6 text-heading_highlight">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <h3 class="text-xl poppins-bold text-heading_secondary mb-3">Advanced Analytics</h3>
                <p class="text-sm text-heading_grey poppins-regular">Track spending across departments using our comprehensive reporting dashboard.</p>
            </div>
            <div class="feature_card" use:reveal={{type: 'zoomIn', delay: '0.5s'}}>
                <div class="w-12 h-12 bg-services_bg rounded-full flex justify-center items-center mb-6 text-heading_highlight">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 class="text-xl poppins-bold text-heading_secondary mb-3">API Integration</h3>
                <p class="text-sm text-heading_grey poppins-regular">Seamlessly connect our payment gateways directly into your existing ERP systems.</p>
            </div>
        </div>
    </section>

    <CTA />
</main>
<Footer />
