<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .demo_section {
        @apply w-full py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden;
        background: linear-gradient(135deg, #0f0c3d 0%, #1a1660 40%, #121063 100%);
    }

    .phone_mockup {
        @apply relative mx-auto z-10;
        width: 300px;
        max-width: 80vw;
    }

    /* Phone frame */
    .phone_frame {
        @apply relative rounded-[3rem] overflow-hidden shadow-2xl;
        background: #1a1a2e;
        padding: 14px;
        border: 4px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    }

    /* Notch */
    .phone_notch {
        @apply absolute top-0 left-1/2 -translate-x-1/2 z-20 rounded-b-2xl;
        width: 140px;
        height: 28px;
        background: #1a1a2e;
    }

    /* Video container */
    .video_wrap {
        @apply relative w-full rounded-[2.2rem] overflow-hidden;
        aspect-ratio: 9/19.5;
        background: border-box #000;
    }

    .video_wrap video {
        @apply w-full h-full object-cover;
    }

    /* Play overlay */
    .play_overlay {
        @apply absolute inset-0 flex items-center justify-center z-10 cursor-pointer transition-opacity duration-300;
        background: rgba(0, 0, 0, 0.4);
    }
    .play_overlay.hidden {
        @apply opacity-0 pointer-events-none;
    }
    .play_btn {
        @apply w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
    }
    .play_btn svg {
        @apply w-8 h-8 text-heading_prime ml-1;
    }

    /* Glow effect behind phone */
    .phone_glow {
        @apply absolute rounded-full blur-[100px] pointer-events-none -z-10;
        width: 150%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(58, 183, 191, 0.4) 0%, transparent 70%);
    }

    .glass_notification {
        @apply absolute z-30 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl flex items-center gap-3 floating border border-white/20;
    }
</style>

<section class="demo_section" id="demo">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 w-full">
        
        <!-- Left Column: Copywriting & CTA -->
        <div class="flex-1 text-center lg:text-left z-20" use:reveal={{type: 'slideInLeft', delay: '0.1s'}}>
            <span class="inline-block py-1.5 px-4 rounded-full bg-white/10 text-heading_highlight text-sm font-bold uppercase tracking-widest mb-6 border border-white/10">The JustBuy App</span>
            
            <h2 class="poppins-extrabold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6">
                Experience the <br class="hidden lg:block"/><span class="text-heading_highlight">Fastest Way</span> to Pay.
            </h2>
            
            <p class="poppins-regular text-gray-300 text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Watch how easy it is to buy airtime, top up your data, and pay your utility bills — all in under 60 seconds. No USSD codes, no queues, just instant transactions.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10">
                <div class="flex items-center gap-3 text-left">
                    <span class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl shadow-inner border border-white/5">⚡</span> 
                    <p class="text-white poppins-semibold text-sm leading-tight">Instant execution <br/><span class="text-gray-400 font-normal">on all networks</span></p>
                </div>
                <div class="flex items-center gap-3 text-left">
                    <span class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl shadow-inner border border-white/5">🔒</span> 
                    <p class="text-white poppins-semibold text-sm leading-tight">Bank-grade security <br/><span class="text-gray-400 font-normal">256-bit encryption</span></p>
                </div>
            </div>

            <a href="https://tinyurl.com/Datankoaa" target="_blank" class="inline-flex items-center justify-center px-10 py-5 bg-heading_highlight text-heading_prime text-lg sm:text-xl font-bold rounded-2xl shadow-[0_0_30px_rgba(58,183,191,0.4)] hover:shadow-[0_0_50px_rgba(58,183,191,0.6)] hover:-translate-y-1 transition-all">
                Download App Now
            </a>
        </div>

        <!-- Right Column: Interactive Phone Demo -->
        <div class="flex-1 relative flex justify-center lg:justify-end w-full mt-10 lg:mt-0" use:reveal={{type: 'zoomIn', delay: '0.3s'}}>
            
            <!-- Live Social Proof Notification 1 -->
            <div class="glass_notification -left-4 sm:-left-12 top-10" style="animation-delay: 1.5s;">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">💸</div>
                <div class="text-left">
                    <p class="text-xs text-gray-500 poppins-semibold uppercase tracking-wider">Just now</p>
                    <p class="text-sm text-heading_prime poppins-bold">Kwami bought 2GB MTN Data</p>
                </div>
            </div>

            <!-- Live Social Proof Notification 2 -->
            <div class="glass_notification right-0 sm:-right-8 bottom-20" style="animation-delay: 0.5s;">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">💡</div>
                <div class="text-left">
                    <p class="text-xs text-gray-500 poppins-semibold uppercase tracking-wider">2 mins ago</p>
                    <p class="text-sm text-heading_prime poppins-bold">Paid ECG Bill GHS 50</p>
                </div>
            </div>

            <div class="phone_mockup floating">
                <div class="phone_glow pulse-glow"></div>
                <div class="phone_frame">
                     <div class="phone_notch"></div>
                     <div class="video_wrap">
                         <video
                             src="/demo.mp4"
                             playsinline
                             preload="metadata"
                             poster=""
                             muted
                             loop
                             onclick={(e) => { const v = e.currentTarget; if(v.paused){v.play(); v.parentElement.querySelector('.play_overlay').classList.add('hidden')} else {v.pause(); v.parentElement.querySelector('.play_overlay').classList.remove('hidden')} }}
                         ></video>
                         <div class="play_overlay" onclick={(e) => { const v = e.currentTarget.parentElement.querySelector('video'); v.play(); e.currentTarget.classList.add('hidden'); }}>
                             <div class="play_btn">
                                 <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M8 5v14l11-7z"/>
                                 </svg>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
        
    </div>
</section>
