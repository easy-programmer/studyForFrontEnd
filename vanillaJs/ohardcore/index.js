/*import {Profile} from './Profile'

const pf = new Profile('soonone', 'soononeso@so.com')
pf.hello()

document.body.innerHTML = '<button id="btn">클릭</button>'
document.getElementById('btn').addEventListener('click', function (e) {
    fetch('https://api.github.com/users?since=1000')
    .then(function (res) { return res.json() })
    .then(function (res) {
        var target = res[2]
        return fetch('https://api.github.com/user/' + target.id)
    })
    .then(function (res) { return res.json() })
    .then(function (res) {
        var _id = 'img' + res.id
        document.body.innerHTML += '<img id="' + _id + '" src="' + res.avatar_url + '"/>'
        document.getElementById(_id).addEventListener('click', function (e) {
            this.remove()
        })
    })
    .catch(function (err) {
        console.error(err)
    })
})*/ 

const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
const opacity = 0.6;

//set first img opacity

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', (e) => 
{
    imgs.forEach(img => (img.style.opacity = 1));
    current.src = e.target.src;

    current.classList.add('fade-in');

    setTimeout(()=>current.classList.remove('fade-in'),500);

    e.target.style.opacity = opacity;
}))

function imgClick(e){

    imgs.forEach(img => (img.style.opacity = 1));

    current.src = e.target.src;
    e.target.style.opacity = opacity;
}

document.addEventListener('click', (e) =>{
    if(!event.target.matches('.btn_change')) return;

    event.preventDefault();

    
    document.querySelector('.imgs').classList.toggle('toggle');
    //document.querySelector('.imgs').style.display = 'table';
}, false);