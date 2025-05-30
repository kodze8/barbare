const slider = document.getElementById('images-slide');
const images = slider.querySelectorAll('img');
const imageWidth = images[0].clientWidth; 
const sliderWidth = imageWidth * images.length / 2; 

let currentPosition = 0;
const speed = 0.5;
let animationId;

function animate() {
  currentPosition -= speed;
  
  if (Math.abs(currentPosition) >= sliderWidth) {
    currentPosition = 0;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(${currentPosition}px)`;
    void slider.offsetWidth;
  }
  
  slider.style.transform = `translateX(${currentPosition}px)`;
  slider.style.transition = 'transform 0.05s linear'; 
  animationId = requestAnimationFrame(animate);
}

animate();

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(animationId);
  } else {
    animate();
  }
});