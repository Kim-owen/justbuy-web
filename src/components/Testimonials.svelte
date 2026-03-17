<style lang="postcss">
    @reference "../styles/global.css";

    .testimonials {
        @apply bg-white h-auto w-full flex flex-col px-8 py-20;
    }
    .testimonials .heading {
        @apply text-5xl leading-14 text-heading_secondary mb-10 text-center max-w-[600px] mx-auto tracking-wider;
    }
    .testimonials .first_row {
        @apply grid grid-cols-3 gap-6 px-16;
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
        @apply grid grid-cols-2 gap-6 px-16 mt-6;
    }
</style>

<section class="testimonials">
    <h2 class="heading poppins-bold">The Trusted Choice for Airtime, Data, and Bill Payments</h2>
    <div class="first_row">
        <div class="card">
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text poppins-regular">"Just Buy has made my life easier. I can buy airtime and data for my whole family in seconds without going to a vendor. Everything works instantly."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar1.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name poppins-medium">
                        <span>Daniel K., Accra</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text poppins-regular">"I used to queue to pay my ECG bill. Now I just open the app and finish in less than a minute. It’s simple and reliable."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar3.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name poppins-medium">
                        <span>Ama O., Tema</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text poppins-regular">"I like that everything is in one place. Airtime, data, and utility payments. I don’t need three different apps anymore."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar2.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name poppins-medium">
                        <span>Kwame T., Kumasi</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="second_row">
        <div class="card">
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text poppins-regular">"The best part is how fast it is. I buy MTN data every week and the bundle arrives immediately. No delays, no stress."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar4.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name poppins-medium">
                        <span>Sarah M., East Legon</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="star_rating">
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
                <img src="/images/star.png" alt="5 star rating" />
            </div>
            <div class="content">
                <p class="review_text poppins-regular">"I was skeptical at first, but after using Just Buy for a few months it’s now my go-to for paying bills and topping up my phone."</p>
                <div class="author">
                    <div class="avatar">
                        <img src="/images/avatar5.jpg" alt="Just Buy review" />
                    </div>
                    <div class="name poppins-medium">
                        <span>Joseph A., Spintex</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>