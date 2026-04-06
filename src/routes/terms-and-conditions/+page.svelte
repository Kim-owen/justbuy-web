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
    .legal_content ul { @apply list-disc list-inside text-sm md:text-base text-gray-600 leading-relaxed mb-4 space-y-1 pl-2; }
    .legal_content li { @apply leading-relaxed; }
    
    .meta_info { @apply flex flex-col md:flex-row justify-between mb-8 pb-6 border-b border-gray-100 text-sm text-gray-500; }
</style>

<div class="legal_page pb-20">
    <Header />
    <FloatingCTA />

    <div class="legal_hero">
        <h1 class="font-poppins font-extrabold">Terms & Conditions</h1>
        <p class="font-poppins">Please read these Terms carefully before using JustBuy.</p>
    </div>

    <div class="legal_content font-poppins">
        <div class="meta_info">
            <p><strong>Effective Date:</strong> March 30, 2026</p>
            <p><strong>Last Updated:</strong> March 30, 2026</p>
        </div>

        <h2>1. Introduction</h2>
        <p>These Terms and Conditions ("Terms") govern your access to and use of the JustBuy platform, including the mobile application, USSD services, website, and all related services (collectively, the "Platform").</p>
        <p>By accessing or using JustBuy, you agree to be bound by these Terms.</p>

        <h2>2. Definitions</h2>
        <ul>
            <li><strong>"JustBuy"</strong> refers to JustBuy Limited and its digital services.</li>
            <li><strong>"User"</strong> refers to any individual who accesses or uses the Platform.</li>
            <li><strong>"Balance"</strong> refers to the prepaid stored value available within the Platform.</li>
            <li><strong>"Services"</strong> include airtime, data bundles, utility payments, and other digital services offered on the Platform.</li>
        </ul>

        <h2>3. Eligibility</h2>
        <p>You must be at least 18 years old and capable of entering into a legally binding agreement to use the Platform. Certain features may require identity verification (KYC).</p>

        <h2>4. Account Registration and Verification</h2>
        <p>You agree to provide accurate and complete information during registration. JustBuy reserves the right to request verification documents and may suspend or restrict accounts that fail verification requirements.</p>

        <h2>5. Platform Balance (Stored Value)</h2>
        <p>JustBuy may provide users with a prepaid balance for convenience when purchasing services.</p>
        <ul>
            <li>The balance is <strong>non-interest bearing</strong></li>
            <li>It is <strong>non-transferable</strong></li>
            <li>It <strong>cannot be withdrawn as cash</strong></li>
            <li>It can only be used to purchase services within the Platform</li>
        </ul>
        <p>The balance does not constitute a bank account or financial account.</p>

        <h2>6. Payments and Transactions</h2>
        <p>All payments are processed through authorized third-party payment providers. A transaction is considered successful only after confirmation from the payment processor.</p>

        <h2>7. Failed Transactions and Balance Credit</h2>
        <p>Where payment is successful but service delivery fails, the corresponding amount will be credited to the user's JustBuy balance.</p>
        <p>Refunds to external payment methods (e.g., Mobile Money) are not automatic and will only be processed where required by law or at JustBuy's discretion.</p>

        <h2>8. Utilities and Digital Services</h2>
        <p>Service delivery depends on third-party providers. While JustBuy strives for reliability, we do not guarantee uninterrupted or error-free service availability.</p>

        <h2>9. Service-Specific Conditions (No Token Issuance)</h2>
        <p>Certain services (e.g., ECG Direct or GWCL payments) may not generate recharge tokens. Successful transactions may result in direct account or meter credit without token issuance.</p>

        <h2>10. Fees and Charges</h2>
        <p>Applicable service or processing fees may be charged. All fees will be clearly displayed before transaction confirmation.</p>

        <h2>11. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
            <li>Use the Platform only for lawful purposes</li>
            <li>Provide accurate transaction details</li>
            <li>Maintain the confidentiality of your account credentials</li>
        </ul>
        <p>You must not engage in fraud, abuse, or unauthorized access.</p>

        <h2>12. Suspension and Termination</h2>
        <p>JustBuy may suspend or terminate access to the Platform where:</p>
        <ul>
            <li>There is a violation of these Terms</li>
            <li>Fraudulent or suspicious activity is detected</li>
            <li>Required by law or regulatory authorities</li>
        </ul>

        <h2>13. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, JustBuy shall not be liable for any indirect, incidental, or consequential damages arising from:</p>
        <ul>
            <li>Use of the Platform</li>
            <li>Failed or delayed transactions</li>
            <li>Third-party service disruptions</li>
        </ul>

        <h2>14. Indemnification</h2>
        <p>You agree to indemnify and hold JustBuy harmless from any claims, losses, or damages resulting from your misuse of the Platform or violation of these Terms.</p>

        <h2>15. Privacy and Data Protection</h2>
        <p>Your personal data is handled in accordance with applicable data protection laws and the JustBuy Privacy Policy.</p>

        <h2>16. Amendments</h2>
        <p>JustBuy reserves the right to update or modify these Terms at any time. Continued use of the Platform after changes constitutes acceptance of the revised Terms.</p>

        <h2>17. Governing Law</h2>
        <p>These Terms shall be governed by and interpreted in accordance with the laws of the Republic of Ghana.</p>

        <h2>18. Contact Information</h2>
        <p>For support, complaints, or inquiries, users may contact JustBuy through official support channels provided on the Platform.</p>
    </div>

    <Footer />
</div>
