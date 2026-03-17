<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import CTA from "../../components/CTA..svelte";
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../../styles/global.css";

    .subpage_hero {
        @apply min-h-[50vh] bg-heading_prime text-white relative flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-24 pb-12;
    }
    
    .blob {
        @apply absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--color-heading_highlight)_0%,_transparent_50%)] opacity-30 top-0 left-0 scale-150 mix-blend-screen;
    }

    .subpage_hero h1 {
        @apply text-5xl md:text-6xl font-bold mb-6 relative z-10 leading-tight;
    }
    .subpage_hero p {
        @apply text-lg md:text-xl text-gray-300 max-w-2xl relative z-10;
    }

    .content_section {
        @apply py-20 px-6 md:px-24 max-w-7xl mx-auto;
    }

    .bills_grid {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12;
    }

    .bill_card {
        @apply bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-heading_highlight transition-all duration-300 text-center flex flex-col items-center justify-center hover:-translate-y-2 cursor-pointer;
    }

    .bill_icon {
        @apply w-16 h-16 rounded-full bg-services_bg text-heading_highlight flex justify-center items-center mb-4;
    }
</style>

<Header />

<main>
    <section class="subpage_hero">
        <div class="blob pulse-glow"></div>
        <h1 class="poppins-bold" use:reveal={{type: 'fadeInDown'}}>Pay Your Bills with Ease</h1>
        <p class="poppins-regular" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>Settle utility bills, TV subscriptions, and more securely in seconds. No queues, no stress.</p>
    </section>

    <section class="content_section">
        <div class="text-center mb-16" use:reveal={{type: 'zoomIn'}}>
            <h2 class="text-4xl text-heading_secondary poppins-bold mb-4">Select a Bill Category</h2>
            <p class="text-heading_grey mb-6 poppins-regular max-w-2xl mx-auto">Choose from our extensive list of local and national billers across Ghana.</p>
        </div>

        <div class="bills_grid">
            <div class="bill_card" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
                <div class="bill_icon">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 class="text-lg poppins-bold text-heading_secondary">Electricity</h3>
                <p class="text-sm text-heading_grey mt-2">ECG Prepaid & Postpaid</p>
            </div>
            
            <div class="bill_card" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>
                <div class="bill_icon">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path></svg>
                </div>
                <h3 class="text-lg poppins-bold text-heading_secondary">Water</h3>
                <p class="text-sm text-heading_grey mt-2">Ghana Water Company</p>
            </div>

            <div class="bill_card" use:reveal={{type: 'fadeInUp', delay: '0.3s'}}>
                <div class="bill_icon">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 class="text-lg poppins-bold text-heading_secondary">TV Subscription</h3>
                <p class="text-sm text-heading_grey mt-2">DSTV, GOTV & MultiTV</p>
            </div>

            <div class="bill_card" use:reveal={{type: 'fadeInUp', delay: '0.4s'}}>
                <div class="bill_icon">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h3 class="text-lg poppins-bold text-heading_secondary">School Fees</h3>
                <p class="text-sm text-heading_grey mt-2">Universities & SHS</p>
            </div>
            
            <div class="bill_card" use:reveal={{type: 'fadeInUp', delay: '0.5s'}}>
                <div class="bill_icon">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
                </div>
                <h3 class="text-lg poppins-bold text-heading_secondary">Taxes & Levies</h3>
                <p class="text-sm text-heading_grey mt-2">GRA & Assembly</p>
            </div>
            
            <div class="bill_card" use:reveal={{type: 'fadeInUp', delay: '0.6s'}}>
                <div class="bill_icon">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                </div>
                <h3 class="text-lg poppins-bold text-heading_secondary">Internet Providers</h3>
                <p class="text-sm text-heading_grey mt-2">Surfline, Busy & Telesol</p>
            </div>
        </div>
    </section>

    <CTA />
</main>
<Footer />
