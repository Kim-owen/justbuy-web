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
        @apply absolute z-30 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl flex items-center gap-3 border border-white/20;
    }
</style>

<section class="demo_section" id="demo">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 w-full">
        
        <!-- Left Column: Copywriting & CTA -->
        <div class="flex-1 text-center lg:text-left z-20" use:reveal={{type: 'slideInLeft', delay: '0.1s'}}>
            <span class="inline-block py-1.5 px-4 rounded-full bg-white/10 text-heading_highlight text-sm font-bold uppercase tracking-widest mb-6 border border-white/10">The JustBuy App</span>
            
            <h2 class="font-poppins font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6">
                Experience the <br class="hidden lg:block"/><span class="text-heading_highlight">Fastest Way</span> to Pay.
            </h2>
            
            <p class="font-poppins text-gray-300 text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Watch how easy it is to buy airtime, top up your data, and pay your utility bills — all in under 60 seconds. No USSD codes, no queues, just instant transactions.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10">
                <div class="flex items-center gap-3 text-left">
                    <span class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl shadow-inner border border-white/5">⚡</span> 
                    <p class="text-white font-poppins font-semibold text-sm leading-tight">Instant execution <br/><span class="text-gray-400 font-normal">on all networks</span></p>
                </div>
                <div class="flex items-center gap-3 text-left">
                    <span class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl shadow-inner border border-white/5">🔒</span> 
                    <p class="text-white font-poppins font-semibold text-sm leading-tight">Bank-grade security <br/><span class="text-gray-400 font-normal">256-bit encryption</span></p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a href="https://tinyurl.com/Datankoaa" target="_blank" class="flex items-center px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(58,183,191,0.4)] text-white" aria-label="Get it on Google Play">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-8 h-8 mr-3">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <div class="flex flex-col items-start leading-tight">
                        <span class="text-[11px] uppercase font-medium tracking-[0.05em] mb-0.5 opacity-80">GET IT ON</span>
                        <span class="text-xl font-semibold tracking-tight">Google Play</span>
                    </div>
                </a>
                <div class="flex items-center px-6 py-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 opacity-60 cursor-default text-white relative transition-all duration-300" aria-label="App Store - Coming Soon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" class="w-8 h-8 mr-3">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    <div class="flex flex-col items-start leading-tight">
                        <span class="text-[11px] uppercase font-medium tracking-[0.05em] mb-0.5 opacity-80">Download on the</span>
                        <span class="text-xl font-semibold tracking-tight">App Store</span>
                    </div>
                    <span class="absolute inset-0 flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest rounded-xl bg-black/60 backdrop-blur-[2px]">Coming Soon</span>
                </div>
            </div>
        </div>

        <!-- Right Column: Interactive Phone Demo -->
        <div class="flex-1 relative flex justify-center lg:justify-end w-full mt-10 lg:mt-0" use:reveal={{type: 'zoomIn', delay: '0.3s'}}>
            
            <!-- Live Social Proof Notification 1 -->
            <div class="glass_notification floating -left-4 sm:-left-12 top-10" style="animation-delay: 1.5s;">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">💸</div>
                <div class="text-left">
                    <p class="text-xs text-gray-500 font-poppins font-semibold uppercase tracking-wider">Just now</p>
                    <p class="text-sm text-heading_prime font-poppins font-bold">Kwami bought 2GB MTN Data</p>
                </div>
            </div>

            <!-- Live Social Proof Notification 2 -->
            <div class="glass_notification floating right-0 sm:-right-8 bottom-20" style="animation-delay: 0.5s;">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">💡</div>
                <div class="text-left">
                    <p class="text-xs text-gray-500 font-poppins font-semibold uppercase tracking-wider">2 mins ago</p>
                    <p class="text-sm text-heading_prime font-poppins font-bold">Paid ECG Bill GHS 50</p>
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

