<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .footer {
        @apply bg-[#0b1014] text-white pt-20 pb-8 px-6 md:px-24 flex flex-col relative overflow-hidden;
    }
    .footer::before {
        content: '';
        @apply absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-heading_prime via-heading_highlight to-heading_prime;
    }
    
    .footer_grid {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10;
    }
    
    .col_brand img {
        @apply h-12 mb-6 bg-white p-2 rounded-md;
    }
    .col_brand p {
        @apply text-gray-400 text-sm leading-relaxed mb-6 max-w-xs;
    }
    
    .footer_title {
        @apply font-bold text-lg mb-6 tracking-wide text-white;
    }
    
    .col_links ul, .col_contact ul {
        @apply flex flex-col gap-3;
    }
    .col_links li a, .col_contact li {
        @apply text-gray-400 text-sm hover:text-heading_highlight transition-colors duration-300;
    }
    .col_contact li {
        @apply flex items-center gap-3;
    }
    .icon {
        @apply w-5 h-5 text-heading_highlight;
    }

    .footer_bottom {
        @apply pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4;
    }
    .footer_bottom_links {
        @apply flex gap-6;
    }
    .footer_bottom_links a {
        @apply hover:text-white transition-colors;
    }
    
    .blob1 {
        @apply absolute top-0 -right-20 w-96 h-96 bg-heading_highlight opacity-10 rounded-full blur-[100px] z-0;
    }
    .blob2 {
        @apply absolute -bottom-40 -left-20 w-96 h-96 bg-heading_prime opacity-20 rounded-full blur-[100px] z-0;
    }
</style>

<footer class="footer">
    <div class="blob1 pulse-glow"></div>
    <div class="blob2 pulse-glow"></div>
    <div class="footer_grid">
        <div class="col_brand" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
            <img src="/images/jb_logo.png" alt="Just Buy logo" />
            <p>Your one-stop application for all your digital payments, airtime recharges, and utility bills. Fast, secure, and reliable.</p>
            <div class="flex gap-4">
                <!-- Social Icons Placeholder -->
                <a href="/" aria-label="Twitter Support" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="/" aria-label="Instagram Account" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
            </div>
        </div>
        
        <div class="col_links" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>
            <h3 class="footer_title">Quick Links</h3>
            <ul class="poppins-regular">
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#testimonials">Reviews</a></li>
                <li><a href="/corporate">Corporate Business</a></li>
                <li><a href="/retail">Retail Business</a></li>
            </ul>
        </div>
        
        <div class="col_links" use:reveal={{type: 'fadeInUp', delay: '0.3s'}}>
            <h3 class="footer_title">Legal</h3>
            <ul class="poppins-regular">
                <li><a href="/">Terms & Conditions</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">AML Policy</a></li>
                <li><a href="/">Cookie Policy</a></li>
            </ul>
        </div>
        
        <div class="col_contact" use:reveal={{type: 'fadeInUp', delay: '0.4s'}}>
            <h3 class="footer_title">Contact Us</h3>
            <ul class="poppins-regular">
                <li>
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>123 Innovation Drive, Accra, Ghana</span>
                </li>
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
        <p class="poppins-regular">&copy; 2026 Just Buy. All rights reserved.</p>
        <div class="footer_bottom_links poppins-regular">
            <a href="/">Support</a>
            <a href="/">FAQ</a>
        </div>
    </div>
</footer>
