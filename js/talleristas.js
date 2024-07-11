window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);

const banners = document.querySelectorAll('.banner');
banners.forEach(banner => {
    banner.addEventListener('mouseenter', handleMouseEnter);
    banner.addEventListener('mouseleave', handleMouseLeave);
});

function handleScroll() {
    banners.forEach(updateBannerOnScroll);
}

function handleResize() {
    if (window.innerWidth <= 768) {
        banners.forEach(resetBannerStyles);
    } else {
        handleScroll();
    }
}

function handleMouseEnter(event) {
    const banner = event.currentTarget;
    const profileInfo = banner.querySelector('.profile-info');
    const profileImage = banner.querySelector('.profile-image');

    profileInfo.style.left = '20px';
    profileInfo.style.opacity = '1';
    profileImage.style.width = '70%';
}

function handleMouseLeave(event) {
    const banner = event.currentTarget;
    const profileInfo = banner.querySelector('.profile-info');
    const profileImage = banner.querySelector('.profile-image');

    if (window.innerWidth > 768) {
        profileInfo.style.left = '-300px';
        profileInfo.style.opacity = '0';
        profileImage.style.width = '80%';
    }
}

function updateBannerOnScroll(banner) {
    const bannerRect = banner.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (bannerRect.top < windowHeight && bannerRect.bottom > 0) {
        const scrollPercentage = (windowHeight - bannerRect.top) / windowHeight;
        const profileInfo = banner.querySelector('.profile-info');
        
        if (window.innerWidth > 768) {
            profileInfo.style.left = `${Math.min(20, 300 * scrollPercentage - 300)}px`;
            profileInfo.style.opacity = Math.min(1, scrollPercentage);
        }
    }
}

function resetBannerStyles(banner) {
    const profileInfo = banner.querySelector('.profile-info');
    const profileImage = banner.querySelector('.profile-image');

    profileInfo.style.left = '0';
    profileInfo.style.opacity = '1';
    profileImage.style.width = '80%';
}
