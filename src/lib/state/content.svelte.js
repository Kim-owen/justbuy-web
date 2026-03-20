// Shared content state for the entire platform
export const contentState = $state({
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

    removeVideo(id) {
        this.videos = this.videos.filter(v => v.id !== id);
    },

    toggleVideoStatus(id) {
        const v = this.videos.find(v => v.id === id);
        if (v) v.active = !v.active;
    },

    addReview(user, comment, rating = 5, location = 'Ghana') {
        this.reviews.unshift({ id: `r-${Date.now()}`, user, comment, rating, location });
    }
});
