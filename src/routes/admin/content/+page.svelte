<script>
    import { reveal } from "$lib/reveal";
    import { contentState } from "$lib/state/content.svelte";
    
    let newVideoUrl = $state("");
    let newVideoLabel = $state("");

    let newReviewName = $state("");
    let newReviewComment = $state("");
    let newReviewLocation = $state("");

    const addVideo = () => {
        if (newVideoUrl && newVideoLabel) {
            contentState.addVideo(newVideoLabel, newVideoUrl);
            newVideoUrl = "";
            newVideoLabel = "";
        }
    };

    const addReview = () => {
        if (newReviewName && newReviewComment) {
            contentState.addReview(newReviewName, newReviewComment, 5, newReviewLocation || 'Ghana');
            newReviewName = "";
            newReviewComment = "";
            newReviewLocation = "";
        }
    }
</script>

<style lang="postcss">
    @reference "../../../styles/global.css";

    .page_header {
        @apply flex items-center justify-between mb-10;
    }
    .page_header h1 {
        @apply text-3xl font-extrabold text-[#121063] poppins-extrabold tracking-tight;
    }

    .content_grid {
        @apply grid grid-cols-1 lg:grid-cols-2 gap-8;
    }

    .manager_card {
        @apply bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col gap-8;
    }

    .card_title { @apply text-2xl font-black text-[#121063] poppins-black; }
    
    .input_group { @apply flex flex-col gap-2; }
    .label { @apply text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold; }
    .input { @apply bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-bold text-[#121063] poppins-bold focus:outline-none focus:border-[#3ab7bf] transition-all; }

    .item_list { @apply flex flex-col gap-4 mt-6; }
    .item_row { @apply flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md; }

    .status_dot { @apply w-2 h-2 rounded-full; }
    .status_active { @apply bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]; }
    .status_inactive { @apply bg-gray-300; }

    .action_btn { @apply p-2 rounded-xl text-gray-400 hover:text-red-500 transition-colors; }
</style>

<div class="page_header" use:reveal={{type: 'fadeInDown'}}>
    <h1>Content Management</h1>
</div>

<div class="content_grid">
    <!-- Hero Video Manager -->
    <div class="manager_card" use:reveal={{type: 'fadeInUp'}}>
        <div>
            <h2 class="card_title">Hero Video Assets</h2>
            <p class="text-xs text-gray-400 font-bold poppins-bold uppercase tracking-widest mt-1">Manage landing page background videos in real-time</p>
        </div>

        <div class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="input_group">
                    <span class="label">Label</span>
                    <input type="text" class="input" placeholder="e.g. Promo Video" bind:value={newVideoLabel} />
                </div>
                <div class="input_group">
                    <span class="label">URL / Path</span>
                    <input type="text" class="input" placeholder="/videos/new.mp4" bind:value={newVideoUrl} />
                </div>
            </div>
            <button class="bg-[#121063] text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#121063]/20 hover:scale-105 active:scale-95 transition-all" onclick={addVideo}>
                Deploy Video Asset
            </button>
        </div>

        <div class="item_list">
            <span class="label">Stored Assets</span>
            {#each contentState.videos as video}
                <div class="item_row">
                    <div class="flex items-center gap-4">
                        <div class="status_dot {video.active ? 'status_active' : 'status_inactive'}"></div>
                        <div>
                            <p class="text-sm font-black text-[#121063] poppins-black">{video.label}</p>
                            <p class="text-[10px] text-gray-400 font-bold">{video.url}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="text-xs font-bold {video.active ? 'text-green-500' : 'text-gray-400'} poppins-bold hover:underline" onclick={() => contentState.toggleVideoStatus(video.id)}>
                            {video.active ? 'Active' : 'Draft'}
                        </button>
                        <button class="action_btn" onclick={() => contentState.removeVideo(video.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Live Review Manager -->
    <div class="manager_card" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
        <div>
            <h2 class="card_title">Live Customer Reviews</h2>
            <p class="text-xs text-gray-400 font-bold poppins-bold uppercase tracking-widest mt-1">Broadcast new praise to the world</p>
        </div>

        <div class="flex flex-col gap-4">
            <div class="input_group">
                <span class="label">Customer Name</span>
                <input type="text" class="input" placeholder="e.g. Manfred Kwami" bind:value={newReviewName} />
            </div>
            <div class="input_group">
                <span class="label">Review Content</span>
                <textarea class="input min-h-[100px]" placeholder="What did they say?" bind:value={newReviewComment}></textarea>
            </div>
            <div class="input_group">
                <span class="label">Region/Location</span>
                <input type="text" class="input" placeholder="e.g. Accra, Ghana" bind:value={newReviewLocation} />
            </div>
            <button class="bg-[#3ab7bf] text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#3ab7bf]/20 hover:scale-105 active:scale-95 transition-all" onclick={addReview}>
                Publish Review Live
            </button>
        </div>

        <div class="item_list">
            <span class="label">Recent Reviews</span>
            {#each contentState.reviews as review}
                <div class="item_row">
                    <div class="flex flex-col">
                        <p class="text-sm font-black text-[#121063] poppins-black">{review.user}</p>
                        <p class="text-[11px] text-[#626973] italic">"{review.comment}"</p>
                        <p class="text-[9px] text-gray-400 font-bold mt-1 uppercase tracking-widest">{review.location}</p>
                    </div>
                    <button class="action_btn" onclick={() => contentState.reviews = contentState.reviews.filter(r => r.id !== review.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                </div>
            {/each}
        </div>
    </div>
</div>
