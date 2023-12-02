document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider img');

    // Clone the first slide and append it to the end
    const firstSlideClone = slides[0].cloneNode(true);
    slider.appendChild(firstSlideClone);

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * (100 / slides.length);
        slider.style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(nextSlide, 3000); 
});
