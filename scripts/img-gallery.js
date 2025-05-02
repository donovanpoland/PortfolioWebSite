document.addEventListener("DOMContentLoaded", () => {
    const galleryData = {
      family: [
        'images/family/img2.jpeg',
        'images/family/img1.jpg',
        'images/family/img3.jpg',
        'images/family/img4.jpg',
        'images/family/img5.jpg',
        'images/family/img6.jpg',
        'images/family/img7.jpg',
        'images/family/img8.jpg',
        'images/family/img9.jpg',
        'images/family/img10.jpg',
        'images/family/img11.webp'
      ]
    };
  
    document.querySelectorAll('.image-gallery').forEach(gallery => {
        const galleryId = gallery.getAttribute('data-gallery');
        const images = galleryData[galleryId];
        let currentIndex = 0;
        let fadeTimeout;
    
        const imgElement = gallery.querySelector('.gallery-image');
        const counter = gallery.querySelector('.counter');
    
        if (!images || !imgElement || !counter) return;
    
        function updateImage() {
          imgElement.src = images[currentIndex];
          counter.textContent = `${currentIndex + 1} of ${images.length}`;
          counter.classList.remove('fade');
    
          clearTimeout(fadeTimeout);
          fadeTimeout = setTimeout(() => {
            counter.classList.add('fade');
          }, 2000);
        }
    
        updateImage();
    
        gallery.querySelector('.prev').addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          updateImage();
        });
    
        gallery.querySelector('.next').addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % images.length;
          updateImage();
        });
      });
    });
  