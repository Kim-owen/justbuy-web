<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import CTA from "../../components/CTA..svelte";
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../../styles/global.css";

    .subpage_hero {
        @apply min-h-[50vh] bg-services_bg relative flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-24 pb-12;
    }

    .subpage_hero h1 {
        @apply text-5xl md:text-6xl font-bold mb-6 text-heading_secondary relative z-10 leading-tight;
    }
    .subpage_hero p {
        @apply text-lg md:text-xl text-heading_grey max-w-2xl relative z-10;
    }

    .content_section {
        @apply py-20 px-6 md:px-24 max-w-7xl mx-auto;
    }
    
    .networks_grid {
        @apply flex flex-wrap justify-center gap-8 mt-12;
    }
    
    .network_card {
        @apply bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center justify-center w-64 hover:scale-105 transition-transform duration-300;
    }
    
    .network_card img {
        @apply h-16 w-auto mb-4 object-contain;
    }
    
    .network_card .name {
        @apply font-bold text-xl text-heading_secondary mb-2;
    }
    .network_card .badge {
        @apply bg-services_bg text-heading_highlight px-3 py-1 rounded-full text-xs font-bold tracking-wider;
    }
    
    .blob {
        @apply absolute -left-40 bottom-0 w-96 h-96 bg-heading_highlight opacity-10 rounded-full blur-[100px] z-0;
    }
</style>

<Header />

<main>
    <section class="subpage_hero">
        <h1 class="poppins-bold" use:reveal={{type: 'fadeInDown'}}>Airtime & Data</h1>
        <p class="poppins-regular" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>Stay connected across all major networks in Ghana with zero extra convenience fees on your top-ups.</p>
        <div class="blob pulse-glow"></div>
    </section>

    <section class="content_section">
        <div class="text-center" use:reveal={{type: 'zoomIn'}}>
            <h2 class="text-3xl md:text-4xl text-heading_secondary poppins-bold mb-4">Supported Networks</h2>
            <p class="text-heading_grey poppins-regular">Instant delivery for both airtime recharges and internet bundles.</p>
        </div>

        <div class="networks_grid">
            <div class="network_card" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
                <div class="w-full h-16 bg-yellow-400 rounded-md mb-4 flex justify-center items-center text-black font-bold text-2xl">MTN</div>
                <div class="name">MTN Ghana</div>
                <div class="badge">AIRTIME & DATA</div>
            </div>
            
            <div class="network_card" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>
                <div class="w-full h-16 bg-red-600 rounded-md mb-4 flex justify-center items-center text-white font-bold text-2xl">telecel</div>
                <div class="name">Telecel</div>
                <div class="badge">AIRTIME & DATA</div>
            </div>

            <div class="network_card" use:reveal={{type: 'fadeInUp', delay: '0.3s'}}>
                <div class="w-full h-16 bg-blue-600 rounded-md mb-4 flex justify-center items-center text-white font-bold text-2xl">Tigo/Airtel</div>
                <div class="name">AT (AirtelTigo)</div>
                <div class="badge">AIRTIME & DATA</div>
            </div>
        </div>
        
        <div class="mt-20 flex flex-col md:flex-row bg-heading_prime text-white rounded-3xl overflow-hidden shadow-2xl" use:reveal={{type: 'slideInLeft'}}>
            <div class="p-10 md:p-14 md:w-3/5 flex flex-col justify-center">
                <h3 class="text-3xl poppins-bold mb-4">Never run out of data.</h3>
                <p class="text-gray-300 mb-8 leading-relaxed">Save your favorite numbers and repeat your last purchase with just one tap. Available on our iOS and Android applications.</p>
                <a href="https://tinyurl.com/Datankoaa" target="_blank" class="bg-heading_highlight text-white w-fit px-8 py-3 rounded-md font-bold hover:bg-white hover:text-heading_highlight transition-colors duration-300">Download the App</a>
            </div>
            <div class="bg-[url(/images/mockup1.png)] bg-cover bg-left md:w-2/5 min-h-[300px] opacity-70">
            </div>
        </div>
    </section>
</main>
<Footer />
