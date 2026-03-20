<script>
    import { reveal } from "$lib/reveal";
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .testimonials {
        @apply bg-white h-auto w-full flex flex-col px-6 md:px-8 py-14 md:py-20;
    }
    .testimonials .heading {
        @apply text-3xl md:text-5xl md:leading-14 text-heading_secondary mb-10 text-center max-w-[600px] mx-auto tracking-wider;
    }
    .testimonials .first_row {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-16;
    }
    .testimonials .first_row .card, .testimonials .second_row .card {
        @apply flex flex-col border-2 border-card_border bg-card_bg rounded-lg py-6 px-8;
    }
    .testimonials .first_row .card .star_rating, .testimonials .second_row .card .star_rating {
        @apply flex flex-row gap-1 mb-6;
    }
    .testimonials .first_row .card .content, .testimonials .second_row .card .content {
        @apply flex flex-col justify-between h-[-webkit-fill-available];
    }
    .testimonials .first_row .card .star_rating img, .testimonials .second_row .card .star_rating img {
        @apply w-6 h-6;
    }
    .testimonials .first_row .card .review_text, .testimonials .second_row .card .review_text {
        @apply italic mb-6 text-heading_secondary;
    }
    .testimonials .first_row .card .author, .testimonials .second_row .card .author {
        @apply flex flex-row items-center text-heading_secondary;
    }
    .testimonials .first_row .card .author .avatar, .testimonials .second_row .card .author .avatar {
        @apply w-10 h-10 mr-3;
    }
    .testimonials .first_row .card .author .avatar img, .testimonials .second_row .card .author .avatar img {
        @apply w-full h-full object-cover rounded-md;
    }
    .testimonials .second_row {
        @apply grid grid-cols-1 lg:grid-cols-2 gap-6 px-0 md:px-16 mt-6;
    }
</style>

<section id="testimonials" class="testimonials">
    <h2 class="heading font-poppins font-bold" use:reveal={{type: 'zoomIn'}}>The Trusted Choice for Airtime, Data, and Bill Payments</h2>
    <div class="first_row">
        <div class="card" use:reveal={{type: 'fadeInUp', delay: '0.1s'}}>
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text font-poppins">"Just Buy has made my life easier. I can buy airtime and data for my whole family in seconds without going to a vendor. Everything works instantly."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar1.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name font-poppins font-medium">
                        <span>Daniel K., Accra</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" use:reveal={{type: 'fadeInUp', delay: '0.2s'}}>
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text font-poppins">"I used to queue to pay my ECG bill. Now I just open the app and finish in less than a minute. It’s simple and reliable."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar3.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name font-poppins font-medium">
                        <span>Ama O., Tema</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" use:reveal={{type: 'fadeInUp', delay: '0.3s'}}>
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text font-poppins">"I like that everything is in one place. Airtime, data, and utility payments. I don’t need three different apps anymore."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar2.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name font-poppins font-medium">
                        <span>Kwame T., Kumasi</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="second_row">
        <div class="card" use:reveal={{type: 'fadeInUp', delay: '0.4s'}}>
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text font-poppins">"The best part is how fast it is. I buy MTN data every week and the bundle arrives immediately. No delays, no stress."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar4.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name font-poppins font-medium">
                        <span>Sarah M., East Legon</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" use:reveal={{type: 'fadeInUp', delay: '0.5s'}}>
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text font-poppins">"I was skeptical at first, but after using Just Buy for a few months it’s now my go-to for paying bills and topping up my phone."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar5.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name font-poppins font-medium">
                        <span>Joseph A., Spintex</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
