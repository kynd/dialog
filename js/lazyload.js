

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

const images = shuffle(imageList.split("\n").map(filename => 'img/' + filename));


document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('image-container');

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.loading = 'lazy';
        img.alt = 'Image';
        img.classList.add('fade-in');
        container.appendChild(img);

        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});

/*
document.addEventListener("DOMContentLoaded", function() {

    let currentIndex = 0;
    const container = document.getElementById('image-container');

    const loadImage = (index) => {
        if (index >= images.length) return;

        const img = document.createElement('img');
        img.setAttribute('data-src', images[index]);
        container.appendChild(img);

        observer.observe(img);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.getAttribute('data-src')) {
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    img.classList.add('loaded'); 
                    observer.unobserve(img);

                    if (currentIndex < images.length) {
                        loadImage(currentIndex++);
                    }
                }
            }
        });
    }, {
        rootMargin: '200px' // Load image a bit before it enters the viewport
    });

    // Load the first two images initially
    loadImage(currentIndex++);
    loadImage(currentIndex++);
});

*/