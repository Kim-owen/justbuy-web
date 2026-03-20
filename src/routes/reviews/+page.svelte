<script>
    import { reveal } from "$lib/reveal";
    import { contentState } from "$lib/state/content.svelte";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import CTA from "../../components/CTA..svelte";

    // Computed total average rating
    let avgRating = $derived(
        (contentState.reviews.reduce((acc, r) => acc + r.rating, 0) / contentState.reviews.length).toFixed(1)
    );
</script>

<style lang="postcss">
    @reference "../../styles/global.css";
</style>

<svelte:head>
    <title>Live Reviews | JustBuy - What People Say</title>
</svelte:head>

<Header />

<main class="min-h-screen bg-white pt-32 pb-20">
    <div class="text-center max-w-4xl mx-auto px-6 mb-20" use:reveal={{type: 'fadeIn'}}>
        <h1 class="text-5xl md:text-7xl font-extrabold text-[#121063] poppins-extrabold tracking-tight mb-6">Loved by <span class="text-[#3ab7bf]">thousands</span> of Ghanaians.</h1>
        <p class="text-lg text-gray-400 font-medium max-w-2xl mx-auto poppins-regular">See why smart spenders across the country choose JustBuy for their data and utility payments every day.</p>
        
        <div class="flex items-center justify-center gap-12 mt-10 poppins-black">
            <div class="flex flex-col items-center">
                <span class="text-4xl font-black text-[#121063] poppins-black">{avgRating}</span>
                <span class="text-[10px] uppercase font-black tracking-widest text-[#3ab7bf] mt-1 poppins-black">Avg Rating</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-4xl font-black text-[#121063] poppins-black">{contentState.reviews.length}+</span>
                <span class="text-[10px] uppercase font-black tracking-widest text-[#3ab7bf] mt-1 poppins-black">Total Reviews</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-4xl font-black text-[#121063] poppins-black">99.9%</span>
                <span class="text-[10px] uppercase font-black tracking-widest text-[#3ab7bf] mt-1 poppins-black">Success Rate</span>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto mb-20">
        {#each contentState.reviews as review, i}
            <div class="bg-gray-50 rounded-[2.5rem] p-10 flex flex-col gap-6 relative transition-all hover:bg-white hover:shadow-2xl hover:scale-105 border border-transparent hover:border-gray-100" use:reveal={{type: 'fadeInUp', delay: `${i * 0.1}s`}}>
                <div class="absolute top-8 right-8 text-6xl text-gray-200/50 pointer-events-none poppins-black">“</div>
                <div class="flex gap-1 text-[#3ab7bf]">
                    {#each Array(review.rating) as _}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    {/each}
                </div>
                <p class="text-lg text-[#121063] font-bold leading-relaxed poppins-bold italic">"{review.comment}"</p>
                <div class="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                    <div class="w-12 h-12 rounded-full bg-[#121063]/5 flex items-center justify-center text-xl shadow-inner">👤</div>
                    <div class="flex flex-col">
                        <span class="text-sm font-black text-[#121063] poppins-black">{review.user}</span>
                        <span class="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-0.5 poppins-black">{review.location}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <CTA />
</main>

<Footer />
