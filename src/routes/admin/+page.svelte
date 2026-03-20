<script>
    import { reveal } from "$lib/reveal";
    import { goto } from "$app/navigation";
    
    let email = $state("");
    let password = $state("");
    let loading = $state(false);

    const handleLogin = (e) => {
        e.preventDefault();
        loading = true;
        
        // Simulating login delay 
        setTimeout(() => {
            goto("/admin/overview");
        }, 1500);
    };
</script>

<style lang="postcss">
    @reference "../../styles/global.css";

    .login_container {
        @apply min-h-screen bg-[#121063] flex items-center justify-center p-6 relative overflow-hidden;
    }

    .login_card {
        @apply w-full max-w-md bg-white rounded-[2rem] p-10 shadow-2xl relative z-10 flex flex-col gap-8;
    }

    .login_header {
        @apply text-center mb-10;
    }
    .login_header h1 {
        @apply text-3xl font-extrabold text-[#121063] poppins-extrabold mb-2;
    }
    .login_header p {
        @apply text-xs font-bold text-gray-400 uppercase tracking-widest;
    }

    .form_group {
        @apply flex flex-col gap-2;
    }
    .form_label {
        @apply text-xs font-bold text-[#121063] ml-1 uppercase tracking-tight;
    }
    .form_input {
        @apply bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-medium focus:outline-none focus:border-[#3ab7bf] transition-all;
    }

    .login_btn {
        @apply bg-[#121063] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#121063]/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-70 disabled:scale-100;
    }

    .blob_login {
        @apply absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[#3ab7bf] opacity-10 rounded-full blur-[120px] pointer-events-none;
    }
    .blob_login_top {
        @apply absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#3ab7bf] opacity-10 rounded-full blur-[120px] pointer-events-none;
    }
</style>

<div class="login_container">
    <div class="blob_login"></div>
    <div class="blob_login_top"></div>

    <div class="login_card" use:reveal={{type: 'zoomIn'}}>
        <div class="login_header">
            <h1 class="poppins-extrabold">JustBuy Admin</h1>
            <p class="poppins-bold">Authorized Personnel Only</p>
        </div>

        <form onsubmit={handleLogin} class="flex flex-col gap-6">
            <div class="form_group">
                <span class="form_label poppins-bold">Email Address</span>
                <input type="email" bind:value={email} placeholder="admin@justbuygh.shop" required class="form_input poppins-medium" />
            </div>

            <div class="form_group">
                <span class="form_label poppins-bold">Security Password</span>
                <input type="password" bind:value={password} placeholder="••••••••" required class="form_input poppins-medium" />
            </div>

            <button type="submit" class="login_btn poppins-bold" disabled={loading}>
                {#if loading}
                    <div class="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Authenticating...
                {:else}
                    Secure Login 🔐
                {/if}
            </button>
        </form>

        <p class="text-center text-[10px] text-gray-400 font-bold poppins-bold">© 2026 JustBuy Security Protocol v4.0.1</p>
    </div>
</div>
