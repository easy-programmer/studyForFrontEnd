import {Profile} from './Profile'

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
})