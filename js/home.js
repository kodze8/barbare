const img = document.getElementById('img');
const title = document.getElementById('title');

const txt = document.getElementById("test")

function triggerAnimationAndRedirect() {
    img.classList.add('move-img');
    title.classList.add('move-title');

    setTimeout(function() {
        window.location.href = "./pages/portfolio.html";
    }, 1500);
}


// img.addEventListener('click', triggerAnimationAndRedirect);
img.addEventListener('keydown', function(event) {
    txt.textContent = event.code
    if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault();
        triggerAnimationAndRedirect();
    }
})

document.addEventListener('keydown', function(event) {
    txt.textContent = event.code
    if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault();
        triggerAnimationAndRedirect();
    }
})