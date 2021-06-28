<template>
  <div id="hero" :style="{ height: height + 'px' }">
    <client-only>
      <carousel
        ref="slider"
        v-model="currentPage"
        class="carousel"
        :perPageCustom="[
          [320, 1],
          [375, 1],
          [768, 1],
          [1200, 1],
          [1800, 1],
        ]"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="5000"
        :mouse-drag="true"
        :paginationEnabled="false"
        :navigateTo="currentPage"
      >
        <slide class="slide" v-for="(item, index) in banners" :key="index">
          <img class="banner" :src="item" alt="" />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
  name: 'HeroComponent',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      height: null,
      currentPage: 0,
      banners: ['/hero.jpg', '/hero.jpg', '/hero.jpg'],
    }
  },
  mounted() {
    this.height =
      (document.getElementById('hero').parentElement.clientWidth * 605) / 1440
  },
}
</script>

<style lang="scss" scoped>
#hero {
  position: relative;
  width: 100%;
  @include for-phone-only {
    margin-top: 95px;
  }
  @include for-tablet-only {
    margin-top: 95px;
  }
  .carousel {
    width: 100%;
    .slide {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>