

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

const images = shuffle(imageList.split("\n").map(filename => 'img/' + filename));
//const movieIndex = Math.floor(Math.random() * images.length);
const movieIndex = Math.floor(Math.random() * 10) + 2;

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('image-container');

    images.forEach((src, i) => {
        if (src.indexOf("output_1722451530") < 0) {

          //console.log(i);
          if (i == movieIndex) {
            const videoContainer = document.getElementById("video-container");
            console.log(videoContainer);
            if (videoContainer) {
                videoContainer.parentNode.removeChild(videoContainer);
                const imageContainer = document.getElementById("image-container");
                if (imageContainer) {
                    container.appendChild(videoContainer);
                    videoContainer.style.display = "block";
                }
            }
          }
          
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
