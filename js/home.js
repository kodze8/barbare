const img = document.getElementById('img');
const title = document.getElementById('title');

function triggerAnimationAndRedirect() {
    img.classList.add('move-img');
    title.classList.add('move-title');

    setTimeout(function() {
        window.location.href = "./pages/portfolio.html";
    }, 1500);
}

img.addEventListener('click', triggerAnimationAndRedirect);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault(); 
        triggerAnimationAndRedirect();
    }
})