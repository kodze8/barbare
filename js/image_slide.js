// const slider = document.querySelector('#images-slide');
// const images = slider.querySelectorAll('img');
// const imageWidth = images[0].clientWidth;

// function cloneImages() {
//   images.forEach(img => {
//     const clone = img.cloneNode(true);
//     slider.appendChild(clone);
//   });
// }

// cloneImages();

// let currentPosition = 0;
// const speed = 1; // pixels per frame

// function animate() {
//   currentPosition -= speed;
  
//   // Reset position when we've scrolled one full set of images
//   if (Math.abs(currentPosition) >= imageWidth * images.length) {
//     currentPosition = 0;
//   }
  
//   slider.style.transform = `translateX(${currentPosition}px)`;
//   requestAnimationFrame(animate);
// }

// animate();

const slider = document.getElementById('images-slide');
const images = slider.querySelectorAll('img');
const sliderWidth = slider.scrollWidth / 2; // Since we duplicate images

let currentPosition = 0;
const speed = 1; // Adjust speed (lower = slower)

function animate() {
  currentPosition -= speed;
  
  // Reset before reaching the end to avoid a visible jump
  if (Math.abs(currentPosition) >= sliderWidth) {
    currentPosition = 0;
  }
  
  slider.style.transform = `translateX(${currentPosition}px)`;
  requestAnimationFrame(animate);
}

// Start animation
animate();