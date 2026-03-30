<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import FloatingCTA from "../../components/FloatingCTA.svelte";
</script>

<svelte:head>
    <title>AML Policy | JustBuy</title>
    <meta name="description" content="Read the Anti-Money Laundering (AML) Policy for the JustBuy platform." />
</svelte:head>

<style lang="postcss">
    @reference "../../styles/global.css";

    .legal_page { @apply min-h-screen bg-gray-50; }
    .legal_hero {
        @apply pt-28 pb-10 md:pt-36 md:pb-14 px-4 sm:px-6 text-center;
        background: linear-gradient(135deg, #0f0c3d 0%, #121063 100%);
    }
    .legal_hero h1 { @apply text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4; }
    .legal_hero p { @apply text-gray-300 text-sm md:text-base max-w-2xl mx-auto; }
    
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
        <h1 class="font-poppins font-extrabold">Anti-Money Laundering Policy</h1>
        <p class="font-poppins">Our commitment to preventing financial crimes, money laundering, and the financing of terrorism.</p>
    </div>

    <div class="legal_content font-poppins">
        <div class="meta_info">
            <p><strong>Effective Date:</strong> March 30, 2026</p>
            <p><strong>Last Updated:</strong> March 30, 2026</p>
        </div>

        <h2>1. Introduction</h2>
        <p>JustBuy Limited ("we," "our," or "us") is strictly committed to the prevention of money laundering and terrorist financing. We maintain a zero-tolerance policy towards the use of our platform for illegal activities. This Anti-Money Laundering (AML) Policy outlines the steps we take to detect, prevent, and report suspicious activities.</p>

        <h2>2. Regulatory Compliance</h2>
        <p>Our AML Policy is designed to comply with local and international regulations, including the <strong>Anti-Money Laundering Act, 2020 (Act 1044)</strong> of the Republic of Ghana, and the guidelines issued by the Bank of Ghana (BoG) and the Financial Intelligence Centre (FIC).</p>

        <h2>3. Know Your Customer (KYC) Procedures</h2>
        <p>To ensure a safe ecosystem, JustBuy implements strict Customer Due Diligence (CDD). Before granting full access to wallet services or high-volume transactions, we require users to verify their identity. Verification involves:</p>
        <ul>
            <li>Providing accurate personal information (Full Name, Date of Birth).</li>
            <li>Submitting a valid Government-issued ID (such as the Ghana Card).</li>
            <li>Verifying the registered mobile money numbers associated with the account.</li>
        </ul>

        <h2>4. Transaction Monitoring</h2>
        <p>We actively monitor all transactions taking place on the JustBuy platform. We utilize automated systems and human oversight to identify unusual patterns, including but not limited to:</p>
        <ul>
            <li>Unusually large transaction volumes.</li>
            <li>Rapid consecutive transactions without a clear economic purpose.</li>
            <li>Inconsistencies with the user's historical transaction behavior.</li>
        </ul>

        <h2>5. Suspicious Activity Reporting</h2>
        <p>If our systems or personnel detect suspicious or potentially illegal activities, we are legally mandated to investigate. If an activity is deemed suspicious under the law, we will file a <strong>Suspicious Transaction Report (STR)</strong> with the Financial Intelligence Centre (FIC) and law enforcement, without prior notice to the User.</p>

        <h2>6. Account Suspension and Termination</h2>
        <p>JustBuy reserves the right to immediately suspend, restrict, or permanently terminate any account that violates our AML Policy, fails to provide requested KYC documentation, or is reasonably suspected of involvement in fraudulent or money-laundering activities.</p>

        <h2>7. Record Keeping</h2>
        <p>As required by law, we retain all customer identification records, KYC documents, and transaction histories for a minimum period of <strong>five (5) years</strong> after the closure of an account or the completion of a transaction.</p>

        <h2>8. Contact Information</h2>
        <p>If you have any questions regarding our AML compliance, or if you wish to report suspicious activities on the JustBuy platform, please contact our Compliance Team at <strong>compliance@justbuygh.shop</strong>.</p>
    </div>

    <Footer />
</div>
