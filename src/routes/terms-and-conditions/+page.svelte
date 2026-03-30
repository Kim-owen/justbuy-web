<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import FloatingCTA from "../../components/FloatingCTA.svelte";
</script>

<svelte:head>
    <title>Terms and Conditions | JustBuy</title>
    <meta name="description" content="Read the Terms and Conditions for using the JustBuy platform." />
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
    
    .meta_info { @apply flex flex-col md:flex-row justify-between mb-8 pb-6 border-b border-gray-100 text-sm text-gray-500; }
</style>

<div class="legal_page pb-20">
    <Header />
    <FloatingCTA />

    <div class="legal_hero">
        <h1 class="font-poppins font-extrabold">Terms & Conditions</h1>
        <p class="font-poppins">Please read these terms carefully before using JustBuy.</p>
    </div>

    <div class="legal_content font-poppins">
        <div class="meta_info">
            <p><strong>Effective Date:</strong> March 30, 2026</p>
            <p><strong>Last Updated:</strong> March 30, 2026</p>
        </div>

        <h2>1. Introduction</h2>
        <p>These Terms and Conditions govern the use of the JustBuy platform, including the mobile application, USSD services, website, and all related products and services. By accessing or using JustBuy, you agree to be legally bound by these Terms.</p>

        <h2>2. Definitions</h2>
        <p><strong>“JustBuy”</strong> refers to JustBuy Limited and its digital platforms.<br>
        <strong>“User”</strong> refers to any person who accesses or uses the Platform.<br>
        <strong>“Wallet”</strong> refers to the stored-value account maintained by JustBuy.<br>
        <strong>“Services”</strong> include payments, utilities, airtime, data, and digital services.</p>

        <h2>3. Eligibility</h2>
        <p>Users must be at least 18 years old and legally capable of entering into a binding agreement. Certain services require successful KYC verification.</p>

        <h2>4. Account Registration and KYC</h2>
        <p>Users must provide accurate and complete information. JustBuy reserves the right to request verification documents and to suspend or terminate accounts that fail verification.</p>

        <h2>5. Wallet Services</h2>
        <p>JustBuy provides an internal wallet for KYC-verified users. Wallet balances are non-interest bearing and may only be used on the JustBuy platform.</p>

        <h2>6. Payments and Transactions</h2>
        <p>All payments are processed through approved third-party providers. Transactions are confirmed only upon receipt of a successful callback from the payment processor.</p>

        <h2>7. Failed Transactions and Wallet Credits</h2>
        <p>If payment succeeds but service delivery fails, the amount paid will be credited to the user’s JustBuy Wallet. No automatic Mobile Money refunds will be made unless required by law.</p>

        <h2>8. Utilities and Digital Services</h2>
        <p>Utility and digital service transactions depend on third-party providers. JustBuy does not guarantee uninterrupted service delivery.</p>

        <h2>9. No Token Guarantee</h2>
        <p>Some services, including ECG Direct and GWCL, do not generate recharge tokens. Successful transactions may result in direct account or meter credit without token issuance.</p>

        <h2>10. Fees and Charges</h2>
        <p>JustBuy may charge service or processing fees. All applicable fees will be disclosed before transaction confirmation.</p>

        <h2>11. User Obligations</h2>
        <p>Users must not misuse the platform, engage in fraud, or attempt unauthorized access. Users are responsible for securing their account credentials.</p>

        <h2>12. Suspension and Termination</h2>
        <p>JustBuy may suspend or terminate accounts for violations of these Terms, suspected fraud, or regulatory requirements.</p>

        <h2>13. Limitation of Liability</h2>
        <p>JustBuy shall not be liable for indirect, incidental, or consequential damages arising from platform use or third-party failures.</p>

        <h2>14. Indemnification</h2>
        <p>Users agree to indemnify JustBuy against claims arising from misuse of the platform or violation of these Terms.</p>

        <h2>15. Privacy and Data Protection</h2>
        <p>User data is handled in accordance with applicable data protection laws and the JustBuy Privacy Policy.</p>

        <h2>16. Amendments</h2>
        <p>JustBuy may update these Terms at any time. Continued use of the platform constitutes acceptance of the revised Terms.</p>

        <h2>17. Governing Law</h2>
        <p>These Terms are governed by the laws of the Republic of Ghana.</p>

        <h2>18. Contact Information</h2>
        <p>Users may contact JustBuy support through official communication channels for assistance or complaints.</p>
    </div>

    <Footer />
</div>
