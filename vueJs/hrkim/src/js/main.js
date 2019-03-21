// const current = document.querySelector('#current');
// const imgs = document.querySelectorAll('.imgs img');
// const opacity = 0.4;

const [current, imgs, opacity] = [
    document.querySelector('#current'),
    document.querySelectorAll('.imgs img'),
    0.6
];
const buttons = document.querySelectorAll('button');

// Set first img opacity
imgs[0].style.opacity = opacity;
imgs.forEach(img => 
    //img.addEventListener('click', (e) => (current.src = e.target.src))
    img.addEventListener('click', imgClick)
);

function imgClick(e) {
    // Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // Change current image to src of clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class 
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
}

buttons.forEach(button => button.addEventListener('click', function() {buttonClick(button.id)}));
function buttonClick(id) {
    if ( id === 'gridButton' ) {
        alert("Click Grid !!!");
    } else {
        alert("Click List !!!");
    }
}