const current = document.querySelector('#current');
const firstImg = document.querySelector('#first-img');
const imgList = document.querySelector('#img-div');
const textList = document.querySelector('#text-div');
const gallery = document.querySelector('#gallery');
const list = document.querySelector('#list');
const imgs = document.querySelectorAll('.imgs img');
const texts = document.querySelectorAll('#text-list li');
const opacity = 0.4;

// Set first img opacity
imgs[0].style.opacity.opacity;

//imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));
imgs.forEach(img => img.addEventListener('click', imgClick));

texts.forEach(li => li.addEventListener('click', textClick));

//button addEvent List
gallery.addEventListener('click',clickGallery);
list.addEventListener('click',clickList);

function imgClick(e) {
    // Reset th opacity
    imgs.forEach(img => (img.style.opacity = 1));
    // Change Current image to src of clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in',500));

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
}

function textClick(e) {
    
    // Change Current image to src of clicked imgage
    current.src = e.target.nextElementSibling.value;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in',500));

    // Change the opacity to opacity var
    //e.target.style.opacity = opacity;
}

function clickGallery(e) {
    
    imgList.style.display =  "";
    textList.style.display =  "none";

}

function clickList(e) {
    
    imgList.style.display =  "none";
    textList.style.display =  "";
}
