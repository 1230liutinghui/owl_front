<template>
  <el-carousel height="500px">
    <el-carousel-item v-for="item in images" :key="item">
      <el-image
        style="height: 500px; width: 100%"
        :src="item"
        fit="fill"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'
export default {
  name: 'Home',
  data () {
    return {
      images: [image1, image2, image3, image4, image5, image6]
    }
  }
}
</script>

<style scoped>

</style>
