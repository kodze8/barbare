history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

const slider = document.querySelector('.slider');
// const text = document.getElementById('text');
const items = document.querySelectorAll('.item');
const quantity = parseInt(getComputedStyle(slider).getPropertyValue('--quantity'));

let rotateY = 0;

window.addEventListener('wheel', (e) => {
    rotateY += (-e.deltaX + e.deltaY) * 0.2; 
    slider.style.transform = `perspective(1000px) rotateX(0deg) rotateY(${rotateY}deg)`;
    updatePositions();
});


function updatePositions() {
    // let output = '';
    let maxZ = -Infinity;
    let maxItem = null;

    items.forEach(item => {
        const position = parseInt(getComputedStyle(item).getPropertyValue('--position'));
        const baseAngle = (position - 1) * (360 / quantity);

        const totalAngleDeg = baseAngle + rotateY;
        const totalAngleRad = totalAngleDeg * (Math.PI / 180);

        const radius = 450;
        const z = Math.cos(totalAngleRad) * radius;

        // output += `Image ${position}: z=${z.toFixed(2)}<br>`;

        if (z > maxZ) {
            maxZ = z;
            maxItem = item;
        }

        item.style.transform = `
            rotateY(${baseAngle}deg)
            translateZ(${radius}px)
        `;
    });

   


    if (maxItem) {
        const position = parseInt(getComputedStyle(maxItem).getPropertyValue('--position'));
        const baseAngle = (position - 1) * (360 / quantity);

        maxItem.style.transform = `
            rotateY(${baseAngle}deg)
            translateZ(450px)
            scale(1.3)
        `;
    }
}
updatePositions()



