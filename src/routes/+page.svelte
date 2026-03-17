<script>
	import CTA from "../components/CTA..svelte";
	import Header from "../components/Header.svelte";
  import Hero from "../components/Hero.svelte";
	import HowItWorks from "../components/HowItWorks.svelte";
	import LogoStrip from "../components/LogoStrip.svelte";
	import ServicesGrid from "../components/ServicesGrid.svelte";
	import Testimonials from "../components/Testimonials.svelte";
</script>

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
  .main_wrapper {
    @apply relative;
  }
</style>

<main class="main_wrapper">
    <Header />
    <Hero />
    <ServicesGrid />
    <HowItWorks />
    <LogoStrip />
    <Testimonials />
    <CTA />
</main>