<script>
	let { children } = $props();
	import "../styles/global.css";
	import PageLoader from "../components/PageLoader.svelte";
	import CustomCursor from "../components/CustomCursor.svelte";
	import ScrollProgress from "../components/ScrollProgress.svelte";
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png">
</svelte:head>

<ScrollProgress />
<CustomCursor />
<PageLoader />
{@render children()}

