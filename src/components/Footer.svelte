<style lang="postcss">
    @reference "../styles/global.css";

    .footer {
        @apply bg-[#0b0b22] text-white pt-24 pb-12 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col relative overflow-hidden;
    }
    
    .footer_grid {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 relative z-10;
    }
    
    .col_brand img {
        @apply h-10 mb-8 grayscale brightness-200 hover:grayscale-0 transition-all;
    }
    
    .col_brand p {
        @apply text-gray-400 text-sm leading-relaxed mb-8 max-w-xs;
    }
    
    .footer_title {
        @apply font-bold text-lg mb-8 tracking-tight text-white;
    }
    
    .col_links ul, .col_contact ul {
        @apply flex flex-col gap-4;
    }
    
    .col_links li a, .col_contact li {
        @apply text-gray-400 text-sm hover:text-[#3ab7bf] transition-colors duration-300;
    }
    
    .col_contact li {
        @apply flex items-center gap-4;
    }
    
    .icon {
        @apply w-5 h-5 text-[#3ab7bf]/60;
    }

    .footer_bottom {
        @apply pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-6;
    }
    
    .footer_bottom_links {
        @apply flex gap-8;
    }
    
    .footer_bottom_links a {
        @apply hover:text-white transition-colors;
    }
    
    .blob_footer {
        @apply absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#3ab7bf] opacity-5 rounded-full blur-[120px] pointer-events-none;
    }

    .footer_badges {
        @apply flex gap-3 mt-8;
    }
    .footer_badge {
        @apply transition-all duration-400 ease-out;
    }
    .footer_badge:hover {
        transform: translateY(-3px);
        filter: brightness(1.15);
    }
    .footer_badge img {
        @apply h-14 w-auto rounded-lg;
    }
    .footer_badge:hover img {
        @apply shadow-[0_6px_20px_rgba(58,183,191,0.3)];
    }
    .footer_badge.coming_soon {
        @apply relative opacity-40 cursor-default;
    }
    .footer_badge.coming_soon:hover {
        transform: none;
        filter: none;
    }
    .soon_tag {
        @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full;
        background: rgba(0, 0, 0, 0.6);
    }
</style>

<footer class="footer">
    <div class="blob_footer"></div>
    <div class="footer_grid">
        <div class="col_brand" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
            <img src="/images/jb_logo.png" alt="Just Buy logo" />
            <p>Empowering 50,000+ Ghanaians with the fastest, most affordable way to manage digital payments.</p>
            <div class="flex gap-5">
                <a href="/" aria-label="Twitter" class="text-gray-500 hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="/" aria-label="Instagram" class="text-gray-500 hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
            </div>
            <div class="footer_badges">
                <a href="https://tinyurl.com/Datankoaa" target="_blank" class="footer_badge" aria-label="Get it on Google Play">
                    <img src="/images/google_play_badge.png" alt="Get it on Google Play" />
                </a>
                <div class="footer_badge coming_soon">
                    <img src="/images/app_store_badge.png" alt="Coming soon on App Store" />
                    <span class="soon_tag font-poppins font-bold">Soon</span>
                </div>
            </div>
        </div>
        
        <div class="col_links" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>
            <h3 class="footer_title">Quick Links</h3>
            <ul class="font-poppins">
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
        
        <div class="col_links" use:reveal={{type: 'fadeInUp', delay: '0.3s'}}>
            <h3 class="footer_title">Legal</h3>
            <ul class="font-poppins">
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Service</a></li>
                <li><a href="/">AML Policy</a></li>
            </ul>
        </div>
        
        <div class="col_contact" use:reveal={{type: 'fadeInUp', delay: '0.4s'}}>
            <h3 class="footer_title">Need help?</h3>
            <ul class="font-poppins">
                <li>
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>support@justbuygh.shop</span>
                </li>
                <li>
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>030 804 7934</span>
                </li>
            </ul>
        </div>
    </div>
    
    <div class="footer_bottom z-10">
        <p class="font-poppins">&copy; 2026 JustBuy. Built by Manfred Kwami.</p>
        <div class="footer_bottom_links font-poppins">
            <a href="/">Sitemap</a>
            <a href="/">Status</a>
        </div>
    </div>
</footer>

