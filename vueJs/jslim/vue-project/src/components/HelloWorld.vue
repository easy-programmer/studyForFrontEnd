  <template>
  
    <div>
     <div class="button_layout">
        <button ref="gallery" @click="galleryClick">Gallery</button>
        <button ref="list" @click="listClick">List</button>
    </div>
    <div class="container" id="first-img">
        <div class="main-img">
          <img :src=images[0].src ref="current">
        </div>
    </div>
    <div class="imgs"  ref="imgDiv">
        <img width="400px" v-for="img in images" v-bind:src="img.src" v-bind:key="img.val" @click="imgClick" ref="imgs"/>
    </div>
     <div ref="textDiv">
        <ul id="text-list">
          <li width="400px" v-for="img in images" v-bind:key="img.src" @click="textClick" v-bind:value="img.src" class="texts">
            {{img.val}}
          </li>
        </ul>
    </div>
    </div>
  </template>
  
    

<script>
export default {
  data()  {
      return  {
          images : [{val:"img1",src:"./img/img1.jpeg"},{val:"img2",src:"./img/img2.jpeg"},{val:"img3",src:"./img/img3.jpeg"},{val:"img4",src:"./img/img4.jpeg"},{val:"img5",src:"./img/img5.jpeg"},{val:"img6",src:"./img/img6.jpeg"}]
      }
  },
  mounted() {
    this.galleryClick();
  },
  methods: {
    galleryClick: function() {
      this.$refs.imgDiv.style.display = "";
      this.$refs.textDiv.style.display ="none";
      
    }, listClick: function() {
      this.$refs.imgDiv.style.display = "none";
      this.$refs.textDiv.style.display ="";
    }, imgClick : function(e) {
      
      // Reset the opacity
      this.$refs.imgs.forEach(img => (img.style.opacity = 1));
      // Change Current image to src of clicked image
      this.$refs.current.src = e.target.src;

      // Add fade in class
      this.$refs.current.classList.add('fade-in');

      // Remove fade-in class after .5 seconds
      setTimeout(() => this.$refs.current.classList.remove('fade-in',500));

      // Change the opacity to opacity var
      e.target.style.opacity = 0.4;
    }, textClick : function(e) {
      
      this.$refs.current.src = e.target.getAttribute('value');

      // Add fade in class
      this.$refs.current.classList.add('fade-in');

      // Remove fade-in class after .5 seconds
      setTimeout(() => this.$refs.current.classList.remove('fade-in',500));

      // Change the opacity to opacity var
      //e.target.style.opacity = 0.4;
    }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.button_layout {
    float: right;
    margin-bottom : 4px;
    background: #333;
}

.container {
    margin: auto;
    border: #fff solid 3px;
    background: #fff;
}

.main-img img, 
.imgs img {
    width: 100%;
}

.imgs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
}

.texts {
  text-align: left;
}

/* Fade in animation */
@keyframes fadeIn {
    to {
        opcaity : 1;
    }
}

.fade-in {
    opacity: 0;
    animation: fadeIn 0.5s ease-in 1 forwards;
}

</style>
