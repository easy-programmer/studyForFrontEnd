const current = document.querySelector('#current');
const firstImg = document.querySelector('#first-img');
const imgList = document.querySelector('#img-list');
const gallery = document.querySelector('#gallery');
const list = document.querySelector('#list');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// Set first img opacity
imgs[0].style.opacity.opacity;

//imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));
imgs.forEach(img => img.addEventListener('click', imgClick));

//button addEvent List
gallery.addEventListener('click',clickGallery);
list.addEventListener('click',clickList);

function imgClick(e) {
    // Reset th opacity
    imgs.forEach(img => (img.style.opacity = 1));
    // Change Current image to src of clicked imgage
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in',500));

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
}



function clickGallery(e) {

    firstImg.style.display = "none";
    imgList.style.display =  "none";

}

function clickList(e) {
    firstImg.style.display = "";
    imgList.style.display =  "";
}
