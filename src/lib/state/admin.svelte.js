// Central Admin State Manager for JustBuy Platform
export const adminState = $state({
    // --- USER MANAGEMENT ---
    users: [
        { id: 'usr-001', name: 'Manfred Kwami', email: 'm.kwami@justbuy.gh', status: 'Active', joined: '2026-01-15', avatar: '👨‍💻' },
        { id: 'usr-002', name: 'Ama Selorm', email: 'ama.s@gmail.com', status: 'Active', joined: '2026-02-10', avatar: '👩‍💼' },
        { id: 'usr-003', name: 'John Doe', email: 'j.doe@example.com', status: 'Banned', joined: '2026-02-28', avatar: '👤' },
        { id: 'usr-004', name: 'Efua Mensah', email: 'efua.m@outlook.com', status: 'Active', joined: '2026-03-05', avatar: '👩‍🎨' },
    ],
    bannedUsersCount: $derived(this.users.filter(u => u.status === 'Banned').length),

    updateUserStatus(id, newStatus) {
        const u = this.users.find(u => u.id === id);
        if (u) u.status = newStatus;
    },

    // --- TRANSACTION LOGS ---
    transactions: [
        { id: 'TX-98231', user: 'Ama Selorm', amount: 'GH₵ 45.00', type: 'Data Bundle', network: 'MTN', status: 'Success', date: '2 Mins Ago', commission: 'GH₵ 2.25' },
        { id: 'TX-98230', user: 'John Doe', amount: 'GH₵ 120.00', type: 'ECG Prepaid', network: 'ECG', status: 'Success', date: '10 Mins Ago', commission: 'GH₵ 6.00' },
        { id: 'TX-98229', user: 'Kofi Boakye', amount: 'GH₵ 10.00', type: 'Airtime', network: 'Telecel', status: 'Failed', date: '1 Hour Ago', commission: 'GH₵ 0.50' },
    ],

    // --- SERVICE CONTROL ---
    services: [
        { id: 'MTN-DATA', name: 'MTN Data API', category: 'Mobile Data', status: 'Healthy', load: 'Low', commission: '5%', active: true },
        { id: 'ECG-MAIN', name: 'ECG Utility Hub', category: 'Electricity', status: 'Degraded', load: 'High', commission: '3%', active: true },
        { id: 'VODA-AIR', name: 'Telecel Airtime', category: 'Airtime', status: 'Healthy', load: 'Medium', commission: '6%', active: false },
    ],

    toggleService(id) {
        const s = this.services.find(s => s.id === id);
        if (s) s.active = !s.active;
    },

    // --- FINANCIAL REVENUE ---
    revenueStats: {
        totalVolume: 'GH₵ 1,245,000',
        platformFee: 'GH₵ 62,250',
        activeUsers: '12,500',
        growthRate: '+12.5%'
    },

    // --- CONTENT (Merged from previous contentState) ---
    videos: [
        { id: 'v1', url: '/demo.mp4', active: true, label: 'Standard Hero' },
    ],
    reviews: [
        { id: 'r1', user: 'Kwame O.', rating: 5, comment: 'JustBuy is the fastest way to get data in Ghana! 🔥', location: 'Accra' },
        { id: 'r2', user: 'Ama S.', rating: 4, comment: 'I love how simple the interface is. No stress.', location: 'Kumasi' },
        { id: 'r3', user: 'John D.', rating: 5, comment: 'The cashback on ECG bills is a lifesaver.', location: 'Takoradi' },
    ],

    addVideo(label, url) {
        this.videos.push({ id: `v-${Date.now()}`, url, active: false, label });
    },
    toggleVideoStatus(id) {
        const v = this.videos.find(v => v.id === id);
        if (v) v.active = !v.active;
    },
    addReview(user, comment, rating = 5, location = 'Ghana') {
        this.reviews.unshift({ id: `r-${Date.now()}`, user, comment, rating, location });
    }
});
