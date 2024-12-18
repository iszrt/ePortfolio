document.addEventListener('DOMContentLoaded', function () {
    // Carousel functionality
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        let currentIndex = 0;
        const items = carousel.querySelectorAll('.carousel-item');
        const nextButton = carousel.querySelector('.next');
        const prevButton = carousel.querySelector('.prev');

        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.toggle('hidden', i !== index);
            });
        }

        nextButton.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        });

        prevButton.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        });

        // Initial display
        showItem(currentIndex);
    });
});
