<script>
	import CTA from "../components/CTA..svelte";
	import Header from "../components/Header.svelte";
  import Hero from "../components/Hero.svelte";
	import HowItWorks from "../components/HowItWorks.svelte";
	import LogoStrip from "../components/LogoStrip.svelte";
	import ServicesGrid from "../components/ServicesGrid.svelte";
	import FAQ from "../components/FAQ.svelte";
	import FloatingCTA from "../components/FloatingCTA.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
	<title>JustBuy Ghana - Cheap Data Bundles | Affordable Airtime | Best Data Deals 2026</title>
	<meta name="description" content="Buy the cheapest data bundles in Ghana. JustBuy offers affordable MTN, Telecel & AirtelTigo data deals. Pay ECG, DSTV & GOtv bills instantly. Best data plans at the lowest prices, 24/7." />
</svelte:head>

<style lang="postcss">
  @reference "../styles/global.css";
  :global(html) {
    background-color: #f3f4f6;
  }
  .main_wrapper {
    @apply relative;
  }
  .seo_content {
    @apply bg-white px-6 md:px-24 py-12 md:py-16;
  }
  .seo_content h2 {
    @apply text-2xl md:text-3xl font-bold mb-6;
    color: #121063;
  }
  .seo_content h3 {
    @apply text-lg md:text-xl font-semibold mt-6 mb-3;
    color: #253c49;
  }
  .seo_content p {
    @apply text-sm md:text-base leading-relaxed mb-4;
    color: #626973;
  }
  .seo_content ul {
    @apply list-disc list-inside text-sm md:text-base mb-4 space-y-1;
    color: #626973;
  }
</style>

<main class="main_wrapper">
    <Header />
    <FloatingCTA />
    <Hero />
    <ServicesGrid />
    <HowItWorks />
    <LogoStrip />
    <FAQ />
    <CTA />

    <!-- SEO Content Section - Rich Keyword Text for Google Indexing -->
    <section class="seo_content poppins-regular">
        <h2 class="poppins-bold">Buy Cheap Data Bundles & Affordable Airtime in Ghana</h2>
        <p>Looking for the <strong>cheapest data bundles in Ghana</strong>? JustBuy is Ghana's #1 platform for <strong>affordable data deals</strong>, <strong>cheap airtime top-ups</strong>, and instant bill payments. Whether you need <strong>cheap MTN data</strong>, <strong>affordable Telecel bundles</strong>, or the <strong>best AirtelTigo data plans</strong>, JustBuy has you covered with the lowest prices available 24/7.</p>

        <h3 class="poppins-semibold">Best Data Deals for Every Network</h3>
        <p>JustBuy offers the <strong>best data deals</strong> across all major Ghanaian networks. Compare and buy <strong>cheap data bundles</strong> for:</p>
        <ul>
            <li><strong>Cheap MTN Data Bundles</strong> — Get the most affordable MTN internet data plans at unbeatable prices</li>
            <li><strong>Affordable Telecel Data</strong> — Buy Telecel data bundles cheaply with instant delivery</li>
            <li><strong>Best AirtelTigo Data Deals</strong> — The cheapest AirtelTigo data plans available online</li>
        </ul>

        <h3 class="poppins-semibold">Why JustBuy Offers the Cheapest Data in Ghana</h3>
        <p>JustBuy is trusted by over <strong>50,000+ users</strong> as the go-to app for <strong>affordable data bundles</strong> and <strong>cheap airtime</strong> in Ghana. Our platform provides instant top-ups with a <strong>99.9% success rate</strong>, making us the most reliable choice for <strong>budget data bundles</strong> and <strong>low-cost data plans</strong>.</p>

        <h3 class="poppins-semibold">Pay Bills Instantly — ECG, DSTV, GOtv & More</h3>
        <p>Beyond <strong>cheap data and affordable airtime</strong>, JustBuy lets you pay all your utility bills from one app. Pay your <strong>ECG electricity bill</strong>, <strong>Ghana Water Company bill</strong>, <strong>DSTV subscription</strong>, <strong>GOtv subscription</strong>, and <strong>StarTimes subscription</strong> instantly. No queues, no stress — just fast, secure payments at <strong>affordable prices</strong>.</p>

        <p>Download JustBuy today and start enjoying the <strong>cheapest data bundles</strong>, <strong>best airtime deals</strong>, and <strong>most affordable bill payment service</strong> in Ghana. Available 24/7 with secure mobile money payments.</p>
    </section>

    <Footer />
</main>