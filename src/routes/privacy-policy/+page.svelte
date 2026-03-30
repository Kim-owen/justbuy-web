<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import FloatingCTA from "../../components/FloatingCTA.svelte";
</script>

<svelte:head>
    <title>Privacy Policy | JustBuy</title>
    <meta name="description" content="Read the Privacy Policy for using the JustBuy platform." />
</svelte:head>

<style lang="postcss">
    @reference "../../styles/global.css";

    .legal_page { @apply min-h-screen bg-gray-50; }
    .legal_hero {
        @apply pt-28 pb-10 md:pt-36 md:pb-14 px-4 sm:px-6 text-center;
        background: linear-gradient(135deg, #0f0c3d 0%, #121063 100%);
    }
    .legal_hero h1 { @apply text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4; }
    .legal_hero p { @apply text-gray-300 text-sm md:text-base; }
    
    .legal_content {
        @apply max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 bg-white shadow-sm rounded-2xl my-[-20px] relative z-10;
    }
    .legal_content h2 { @apply text-lg md:text-xl font-bold mt-8 mb-3 text-gray-900; color: #121063; }
    .legal_content p { @apply text-sm md:text-base text-gray-600 leading-relaxed mb-4; }
    .legal_content ul { @apply list-disc list-inside text-sm md:text-base text-gray-600 mb-4 space-y-1; }
    
    .meta_info { @apply flex flex-col md:flex-row justify-between mb-8 pb-6 border-b border-gray-100 text-sm text-gray-500; }
</style>

<div class="legal_page pb-20">
    <Header />
    <FloatingCTA />

    <div class="legal_hero">
        <h1 class="font-poppins font-extrabold">Privacy Policy</h1>
        <p class="font-poppins">How we collect, use, and protect your data.</p>
    </div>

    <div class="legal_content font-poppins">
        <div class="meta_info">
            <p><strong>Effective Date:</strong> March 30, 2026</p>
            <p><strong>Last Updated:</strong> March 30, 2026</p>
        </div>

        <h2>1. Introduction</h2>
        <p>At JustBuy ("we," "our," or "us"), we are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, website, USSD services, and any other related services (collectively, the "Platform"). This policy complies with the Data Protection Act, 2012 (Act 843) of the Republic of Ghana.</p>

        <h2>2. Information We Collect</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
        <ul>
            <li><strong>Personal Data:</strong> Name, phone number, email address, and demographic information.</li>
            <li><strong>KYC (Know Your Customer) Data:</strong> Ghana Card details, residential address, or other documents required to verify your identity.</li>
            <li><strong>Financial and Transaction Data:</strong> Payment history, wallet balances, purchased services (data bundles, ECG, GWCL), and payment references.</li>
            <li><strong>Device and Usage Data:</strong> IP address, device type, operating system, and app usage activity.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul>
            <li>To create and manage your JustBuy account and wallet.</li>
            <li>To process your transactions securely and efficiently.</li>
            <li>To verify your identity and prevent fraudulent activities.</li>
            <li>To provide customer support and respond to your inquiries.</li>
            <li>To comply with regulatory and legal requirements in Ghana.</li>
        </ul>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal data. However, we may share your information with:</p>
        <ul>
            <li><strong>Service Providers:</strong> Third-party payment gateways, telecommunication networks (MTN, Telecel, AirtelTigo), and utility companies (ECG, GWCL) strictly to fulfill your requested transactions.</li>
            <li><strong>Legal Authorities:</strong> If required by law, court order, or government regulation, we may disclose your information to law enforcement or regulatory bodies.</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>We implement strict administrative, technical, and physical security measures to protect your personal information. Your sensitive data, such as payment credentials, are encrypted using industry-standard protocols. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>

        <h2>6. Your Data Rights</h2>
        <p>Under the Data Protection Act, you have the right to:</p>
        <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request corrections to any inaccurate or incomplete data.</li>
            <li>Request the deletion of your account and associated data (subject to legal retention requirements).</li>
            <li>Withdraw consent for marketing communications.</li>
        </ul>

        <h2>7. Data Retention</h2>
        <p>We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy, or as required by Ghanaian law (especially regarding financial transactions and KYC regulations).</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or relevant laws. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.</p>

        <h2>9. Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, or if you wish to exercise your data rights, please contact our support team through the JustBuy app or at support@justbuygh.shop.</p>
    </div>

    <Footer />
</div>
