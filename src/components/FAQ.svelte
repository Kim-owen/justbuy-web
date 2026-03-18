<script>
    import { reveal } from "$lib/reveal";

    let openFaq = $state(-1);

    const toggleFaq = (index) => {
        openFaq = openFaq === index ? -1 : index;
    };

    const faqs = [
        {
            q: "Where can I buy the cheapest data bundles in Ghana?",
            a: "JustBuy offers the cheapest data bundles for MTN, Telecel, and AirtelTigo in Ghana. Simply download the app, choose your network, select a bundle, and pay instantly via mobile money. Our prices are the most affordable you'll find online."
        },
        {
            q: "How do I buy cheap MTN data on JustBuy?",
            a: "Open the JustBuy app, select 'Buy Data', choose MTN as your network, pick your preferred data bundle, enter your phone number, and pay securely. Your cheap MTN data bundle will be delivered to your phone within seconds."
        },
        {
            q: "Can I pay my ECG electricity bill with JustBuy?",
            a: "Yes! JustBuy makes it easy to pay your ECG prepaid and postpaid electricity bills instantly. Just enter your meter number, select the amount, and pay through mobile money. No more queuing at ECG offices."
        },
        {
            q: "What bills can I pay using JustBuy?",
            a: "You can pay ECG electricity bills, Ghana Water Company bills, DSTV subscriptions, GOtv subscriptions, StarTimes subscriptions, and buy airtime and data bundles for all networks — all from one affordable app."
        },
        {
            q: "Is JustBuy safe and secure?",
            a: "Absolutely. JustBuy uses bank-level encryption to protect all transactions. We are a licensed and operational platform trusted by over 50,000 users across Ghana with a 99.9% transaction success rate."
        },
        {
            q: "What networks does JustBuy support for affordable airtime?",
            a: "JustBuy supports all major Ghanaian networks: MTN, Telecel (formerly Vodafone), and AirtelTigo. Buy affordable airtime and cheap data bundles for any of these networks instantly, 24/7."
        }
    ];
</script>

<style lang="postcss">
    @reference "../styles/global.css";

    .faq_section {
        @apply w-full py-14 md:py-20 px-4 sm:px-6 md:px-8;
        background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
    }

    .faq_heading {
        @apply text-center mb-10 md:mb-14;
    }
    .faq_heading h2 {
        @apply text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-4;
        color: #121063;
    }
    .faq_heading p {
        @apply text-sm sm:text-base max-w-lg mx-auto;
        color: #626973;
    }

    .faq_list {
        @apply max-w-3xl mx-auto flex flex-col gap-3;
    }

    .faq_item {
        @apply bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300;
    }
    .faq_item.open {
        @apply shadow-md border-heading_highlight/30;
    }

    .faq_question {
        @apply w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer;
        -webkit-tap-highlight-color: transparent;
    }
    .faq_question span {
        @apply text-sm sm:text-base font-semibold pr-4;
        color: #253c49;
    }
    .faq_question .arrow {
        @apply w-5 h-5 flex-shrink-0 transition-transform duration-300;
        color: #3ab7bf;
    }
    .faq_question .arrow.rotated {
        @apply rotate-180;
    }

    .faq_answer {
        @apply px-5 sm:px-6 overflow-hidden transition-all duration-300;
        max-height: 0;
    }
    .faq_answer.open {
        max-height: 300px;
        @apply pb-5;
    }
    .faq_answer p {
        @apply text-sm leading-relaxed;
        color: #626973;
    }
</style>

<section class="faq_section" id="faq">
    <div class="faq_heading" use:reveal={{type: 'fadeInDown'}}>
        <h2 class="poppins-extrabold">Frequently Asked <span style="color: #3ab7bf;">Questions</span></h2>
        <p class="poppins-regular">Everything you need to know about buying cheap data and affordable airtime in Ghana</p>
    </div>

    <div class="faq_list">
        {#each faqs as faq, i}
            <div class="faq_item {openFaq === i ? 'open' : ''}" use:reveal={{type: 'fadeInUp', delay: `${i * 0.1}s`}}>
                <button class="faq_question" onclick={() => toggleFaq(i)} aria-label="Toggle FAQ">
                    <span class="poppins-semibold">{faq.q}</span>
                    <svg class="arrow {openFaq === i ? 'rotated' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div class="faq_answer {openFaq === i ? 'open' : ''}">
                    <p class="poppins-regular">{faq.a}</p>
                </div>
            </div>
        {/each}
    </div>
</section>
