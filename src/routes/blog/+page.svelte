<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import FloatingCTA from "../../components/FloatingCTA.svelte";
    import { reveal } from "$lib/reveal";

    const posts = [
        {
            slug: "cheapest-data-bundles-ghana-2026",
            title: "The Cheapest Data Bundles in Ghana 2026 — Complete Price Guide",
            excerpt: "Compare the most affordable MTN, Telecel, and AirtelTigo data bundles. Find out which network gives you the best data deal for your money in 2026.",
            date: "March 15, 2026",
            readTime: "5 min read",
            tag: "Data Deals",
            color: "#3ab7bf"
        },
        {
            slug: "how-to-pay-ecg-bill-online",
            title: "How to Pay Your ECG Bill Online in Ghana — Step by Step Guide",
            excerpt: "Stop queuing at ECG offices. Learn how to pay your electricity bill online in under 60 seconds using JustBuy app with mobile money.",
            date: "March 12, 2026",
            readTime: "4 min read",
            tag: "Bill Payment",
            color: "#f59e0b"
        },
        {
            slug: "best-mtn-data-plans-cheap",
            title: "Best Cheap MTN Data Plans in Ghana — Which Bundle Saves You Money?",
            excerpt: "MTN has dozens of data plans but which ones give you the most GBs for the least cedis? We break down every affordable MTN data bundle.",
            date: "March 10, 2026",
            readTime: "6 min read",
            tag: "MTN Data",
            color: "#eab308"
        },
        {
            slug: "affordable-dstv-gotv-payment",
            title: "How to Pay DSTV & GOtv Subscription Cheaply in Ghana",
            excerpt: "Renew your DSTV or GOtv subscription instantly without visiting a payment center. The most affordable way to stay entertained in Ghana.",
            date: "March 8, 2026",
            readTime: "3 min read",
            tag: "TV Subscription",
            color: "#6366f1"
        },
        {
            slug: "telecel-vs-mtn-cheapest-data",
            title: "Telecel vs MTN — Which Network Has the Cheapest Data in 2026?",
            excerpt: "A detailed comparison of Telecel and MTN data bundle prices. Find out which network offers more affordable internet data for your budget.",
            date: "March 5, 2026",
            readTime: "5 min read",
            tag: "Comparison",
            color: "#ef4444"
        },
        {
            slug: "save-money-airtime-ghana",
            title: "5 Smart Ways to Save Money on Airtime and Data in Ghana",
            excerpt: "Stop overpaying for airtime and data. These simple tips will help you get the best affordable deals and stretch your cedis further.",
            date: "March 1, 2026",
            readTime: "4 min read",
            tag: "Tips",
            color: "#10b981"
        }
    ];
</script>

<svelte:head>
    <title>Blog — Cheap Data Deals, Affordable Airtime Tips & Bill Payment Guides | JustBuy Ghana</title>
    <meta name="description" content="Read the latest tips on buying cheap data bundles, finding affordable airtime deals, paying ECG bills online, and getting the best data plans in Ghana. JustBuy blog." />
</svelte:head>

<style lang="postcss">
    @reference "../../styles/global.css";

    .blog_page {
        @apply min-h-screen;
        background: #f8fafc;
    }

    .blog_hero {
        @apply pt-28 pb-14 md:pt-36 md:pb-20 px-4 sm:px-6 md:px-8 text-center;
        background: linear-gradient(135deg, #0f0c3d 0%, #1a1660 40%, #121063 100%);
    }
    .blog_hero h1 {
        @apply text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide;
    }
    .blog_hero .accent {
        color: #3ab7bf;
    }
    .blog_hero p {
        @apply text-sm sm:text-base text-gray-300 max-w-xl mx-auto;
    }

    .blog_grid {
        @apply max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6;
    }

    .blog_card {
        @apply bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col;
    }

    .blog_card_header {
        @apply px-6 pt-6 pb-2 flex items-center justify-between;
    }
    .blog_tag {
        @apply text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white;
    }
    .blog_date {
        @apply text-xs;
        color: #9ca3af;
    }

    .blog_card_body {
        @apply px-6 pb-6 flex flex-col flex-1;
    }
    .blog_card_body h2 {
        @apply text-lg sm:text-xl font-bold mb-3 leading-snug;
        color: #121063;
    }
    .blog_card_body h2:hover {
        color: #3ab7bf;
    }
    .blog_card_body p {
        @apply text-sm leading-relaxed flex-1 mb-4;
        color: #626973;
    }

    .read_more {
        @apply flex items-center gap-2 text-sm font-semibold transition-colors;
        color: #3ab7bf;
    }
    .read_more:hover {
        color: #121063;
    }
    .read_more svg {
        @apply w-4 h-4 transition-transform;
    }
    .read_more:hover svg {
        @apply translate-x-1;
    }
</style>

<div class="blog_page">
    <Header />
    <FloatingCTA />

    <div class="blog_hero">
        <h1 class="font-poppins font-extrabold">JustBuy <span class="accent">Blog</span></h1>
        <p class="font-poppins">Tips on cheap data deals, affordable airtime, and the smartest ways to save money in Ghana</p>
    </div>

    <div class="blog_grid">
        {#each posts as post, i}
            <a href="/blog/{post.slug}" class="blog_card" use:reveal={{type: 'fadeInUp', delay: `${i * 0.1}s`}}>
                <div class="blog_card_header">
                    <span class="blog_tag font-poppins font-bold" style="background-color: {post.color}">{post.tag}</span>
                    <span class="blog_date font-poppins">{post.date} · {post.readTime}</span>
                </div>
                <div class="blog_card_body">
                    <h2 class="font-poppins font-bold">{post.title}</h2>
                    <p class="font-poppins">{post.excerpt}</p>
                    <span class="read_more font-poppins font-semibold">
                        Read Article
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                </div>
            </a>
        {/each}
    </div>

    <Footer />
</div>

