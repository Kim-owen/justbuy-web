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
</style>

<div class="flex items-center justify-between mb-10" use:reveal={{type: 'fadeInDown'}}>
    <h1 class="text-3xl font-extrabold text-[#121063] poppins-extrabold tracking-tight">Content Management</h1>
</div>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <!-- Hero Video Manager -->
    <div class="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col gap-8" use:reveal={{type: 'fadeInUp'}}>
        <div>
            <h2 class="text-2xl font-black text-[#121063] poppins-black">Hero Video Assets</h2>
            <p class="text-xs text-gray-400 font-bold poppins-bold uppercase tracking-widest mt-1">Manage landing page background videos in real-time</p>
        </div>

        <div class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col gap-2">
                    <span class="text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold">Label</span>
                    <input type="text" class="bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-bold text-[#121063] poppins-bold focus:outline-none focus:border-[#3ab7bf] transition-all" placeholder="e.g. Promo Video" bind:value={newVideoLabel} />
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold">URL / Path</span>
                    <input type="text" class="bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-bold text-[#121063] poppins-bold focus:outline-none focus:border-[#3ab7bf] transition-all" placeholder="/videos/new.mp4" bind:value={newVideoUrl} />
                </div>
            </div>
            <button class="bg-[#121063] text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#121063]/20 hover:scale-105 active:scale-95 transition-all poppins-black" onclick={addVideo}>
                Deploy Video Asset
            </button>
        </div>

        <div class="flex flex-col gap-4 mt-6">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold">Stored Assets</span>
            {#each contentState.videos as video}
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                    <div class="flex items-center gap-4">
                        <div class="w-2 h-2 rounded-full {video.active ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-gray-300'}"></div>
                        <div>
                            <p class="text-sm font-black text-[#121063] poppins-black">{video.label}</p>
                            <p class="text-[10px] text-gray-400 font-bold poppins-bold">{video.url}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="text-xs font-bold {video.active ? 'text-green-500' : 'text-gray-400'} poppins-bold hover:underline" onclick={() => contentState.toggleVideoStatus(video.id)}>
                            {video.active ? 'Active' : 'Draft'}
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Live Review Manager -->
    <div class="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col gap-8" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
        <div>
            <h2 class="text-2xl font-black text-[#121063] poppins-black">Live Customer Reviews</h2>
            <p class="text-xs text-gray-400 font-bold poppins-bold uppercase tracking-widest mt-1">Broadcast new praise to the world</p>
        </div>

        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold">Customer Name</span>
                <input type="text" class="bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-bold text-[#121063] poppins-bold focus:outline-none focus:border-[#3ab7bf] transition-all" placeholder="e.g. Manfred Kwami" bind:value={newReviewName} />
            </div>
            <div class="flex flex-col gap-2">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold">Review Content</span>
                <textarea class="bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-bold text-[#121063] poppins-bold focus:outline-none focus:border-[#3ab7bf] transition-all min-h-[100px]" placeholder="What did they say?" bind:value={newReviewComment}></textarea>
            </div>
            <div class="flex flex-col gap-2">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold">Region/Location</span>
                <input type="text" class="bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-bold text-[#121063] poppins-bold focus:outline-none focus:border-[#3ab7bf] transition-all" placeholder="e.g. Accra, Ghana" bind:value={newReviewLocation} />
            </div>
            <button class="bg-[#3ab7bf] text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#3ab7bf]/20 hover:scale-105 active:scale-95 transition-all poppins-black" onclick={addReview}>
                Publish Review Live
            </button>
        </div>

        <div class="flex flex-col gap-4 mt-6">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest poppins-bold">Recent Reviews</span>
            {#each contentState.reviews as review}
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                    <div class="flex flex-col">
                        <p class="text-sm font-black text-[#121063] poppins-black">{review.user}</p>
                        <p class="text-[11px] text-[#626973] italic font-medium poppins-medium">"{review.comment}"</p>
                        <p class="text-[9px] text-gray-400 font-bold mt-1 uppercase tracking-widest poppins-black">{review.location}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
