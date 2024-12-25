document.querySelectorAll('.card').forEach(card => {
    const images = Array.from(card.querySelectorAll('.image'));
    let currentIndex = 0;

    // Set initial transition style to make animations smooth
    images.forEach(img => {
        img.style.transition = 'transform 0.5s ease, z-index 0s'; // Smooth transform transition
    });

    card.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Increment the index and loop around

        images.forEach((img, index) => {
            const distance = (index - currentIndex + images.length) % images.length;
            img.style.zIndex = images.length - distance;
            img.style.transform = `translateX(-${distance * 5}%) rotate(${10 - distance * 3}deg)`;
        });
    });
});
