

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
        if (src.indexOf("output_1722451530") < 0) {
          
        const img = document.createElement('img');
        img.src = src;
        img.loading = 'lazy';
        img.alt = 'Image';
        img.classList.add('fade-in');
        container.appendChild(img);

        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        }
    });
});
