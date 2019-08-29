<template>
    <div id="body">
        <div id="container">
            <p>{{ title }}</p>
            <div class="btn">
                <button class="fas fa-list" id="listButton" title="List" v-on:click="buttonClick"></button>
                <button class="fas fa-th-large" id="gridButton" title="Grid" v-on:click="buttonClick"></button>
            </div>

            <div class="imgsView" id="imgsView">
                <div class="main-img">
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oEN19w8TEfPkPvjSlm8DYrVUyVQ.jpg" id="current"/>
                </div>
                <div class="imgs" id="imgs">
                    <img v-for="image in images" :key="image.id" :src="image.src" :alt="image.title" v-on:click="imgClick"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const opacity = 0.6
const images = []
export default {
    data() { // 해당 Vue에서 사용할 데이터 정보
        return {
            //opacity: 0.6,
            title: 'Movie',
            images: []
        }
    },
    created() {
        this.$http.get('http://localhost:3000/movies').then(response => {
                this.images = response.data
            })
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            imgs.style.display = "grid";
            //imgs[0].style.opacity = 0.6;
        },
        imgClick(event) {
            current.src = event.target.src;
            current.classList.add('fade-in');
            setTimeout(() => current.classList.remove('fade-in'), 500);
            event.target.style.opacity = opacity;
        },
        buttonClick(event) {
            const buttonId = event.target.id;
            if ( buttonId === 'listButton' ) {
                imgs.style.display = "table";
            } else {
                imgs.style.display = "grid";
            }
        }
    }
}
</script>

<style>
#body {
    width: 100%;
    height: 100%;
    background-color: black
}
#container {
    max-width: 600px;
    margin: auto;
    border: fff solid 3px;
    background: rgb(66, 65, 65);
    font-family: Arial, sans-serif;
    font-size: 25px;
}

#gallery {
    font-family: Arial, sans-serif;
    font-size: 25px;
}

p {
    text-align: left;
    color: white;
}

.btn {
    margin: 10px 0;
    padding: 0 4px 0 0;
    text-align: right;
}

.btn button {
    border-radius: 4px;
    background-color:rgb(221, 222, 223);
    color: rgb(10, 97, 36);
}

.main-img img,
.imgs img {
    width: 99%;
    max-height: 600px;
}

.imgs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    table-layout: auto;
}

/* Fade in animation */
@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.fade-in {
    opacity: 0;
    animation: fadeIn 0.5s ease-in 1 forwards;
}
</style>