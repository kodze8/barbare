const img = document.getElementById('img');
const title = document.getElementById('title');

img.addEventListener('click', function() {
   
    img.classList.add('move-img');
    title.classList.add('move-title');

    setTimeout(function() {
        window.location.href = "../barbare/pages/portfolio.html";
    }, 1500); 

});

