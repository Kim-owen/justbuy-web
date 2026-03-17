<style lang="postcss">
    @reference "../styles/global.css";

    .services {
        @apply bg-services_bg h-auto w-full flex flex-col px-8 py-20;
    }
    .services .heading {
        @apply text-5xl leading-14 text-heading_secondary mb-10 text-center max-w-[500px] mx-auto tracking-wider;
    }
    .services .services_grid {
        @apply grid grid-cols-4 gap-6 w-full px-16;
    }
    .services .services_grid .item {
        @apply bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition ease-in-out;
    }
    .services .services_grid .item .icon {
        @apply w-10 h-10 mb-4;
    }
    .services .services_grid .item .title {
        @apply font-semibold text-lg text-heading_secondary mb-2;
    }
    .services .services_grid .item .text {
        @apply text-heading_secondary text-sm;
    }

</style>

<section class="services">
    <h2 class="heading poppins-bold">
      What You Can Do With Just Buy
    </h2>
    <div class="services_grid">
        <div class="item">
            <img src="/images/invoice_1.png" alt="Pay Bills" class="icon"/>
            <h3 class="title">Pay Bills</h3>
            <p class="text">ECG, Ghana Water, and more in seconds</p>
        </div>
        <div class="item">
            <img src="/images/phone-call_1.png" alt="Buy Airtime" class="icon"/>
            <h3 class="title">Buy Airtime</h3>
            <p class="text">Top up your phone instantly</p>
        </div>
        <div class="item">
            <img src="/images/mobile-data_1.png" alt="Purchase Data" class="icon"/>
            <h3 class="title">Purchase Data</h3>
            <p class="text">Data bundles for all networks</p>
        </div>
        <div class="item">
            <img src="/images/cedi_1.png" alt="Manage Money" class="icon"/>
            <h3 class="title">Manage Money</h3>
            <p class="text">Track expenses, savings, and payments</p>
        </div>
    </div>

</section>