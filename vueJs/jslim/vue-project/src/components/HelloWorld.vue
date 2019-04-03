  <template>
  
    <div>
     <div class="button_layout">
        <button id="gallery">Gallery</button>
        <button id="list">List</button>
    </div>
    <div class="container" id="first-img">
        <div class="main-img">
          <img :src=images[0] id="current">
        </div>
    </div>
    <div class="row">
        <img width="400px" v-for="img in images" v-bind:src="img" >
    </div>
    </div>
  </template>
  
    

<script>
export default {
  data()  {
      return  {
          images : ["./img/img1.jpeg","./img/img2.jpeg","./img/img3.jpeg","./img/img4.jpeg","./img/img5.jpeg","./img/img6.jpeg"]
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
    margin: auto;
    border: #fff solid 3px;
    background: #fff;
}

</style>
