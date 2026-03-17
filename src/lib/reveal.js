export function reveal(node, params = {}) {
    // Default values
    const options = {
        type: 'fadeInUp', // fadeInUp, fadeInDown, slideInLeft, slideInRight, zoomIn
        duration: '0.8s',
        delay: '0s',
        easing: 'ease-out',
        threshold: 0.1,
        ...params
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Apply animation styles dynamically when intersecting
                node.style.animation = `${options.type} ${options.duration} ${options.easing} ${options.delay} forwards`;
                node.style.opacity = '1';
                observer.unobserve(node);
            }
        });
    }, {
        threshold: options.threshold
    });

    // Set initial state
    node.style.opacity = '0';
    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
