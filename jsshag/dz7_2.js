const images = ['img/mountain.jpg', 'img/nature.jpg', 'img/beautiful.jpg'];
let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateGallery() {
    galleryImage.src = images[currentIndex];
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateGallery();
    }
});

updateGallery();