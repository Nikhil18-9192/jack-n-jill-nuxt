<template>
  <div id="hero" :style="{ height: height + 'px' }">
    <img class="left-nav nav" src="/left.png" alt="left-icon" @click="prev" />
    <img
      class="right-nav nav"
      src="/right.png"
      alt="right-icon"
      @click="next"
    />
    <client-only>
      <carousel
        ref="heroSlider"
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
        :autoplayTimeout="3000"
        :mouse-drag="true"
        :paginationEnabled="true"
        paginationPosition="bottom-overlay"
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
      banners: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg'],
      pageCount: 0,
    }
  },
  mounted() {
    this.height =
      (document.getElementById('hero').parentElement.clientWidth * 605) / 1440
  },
  methods: {
    next() {
      this.pageCount = this.$refs.heroSlider.pageCount - 1
      this.currentPage < this.$refs.heroSlider.pageCount - 1
        ? this.currentPage++
        : (this.currentPage = 0)
    },
    prev() {
      this.pageCount = this.$refs.heroSlider.pageCount - 1
      this.currentPage <= 0
        ? (this.currentPage = this.$refs.heroSlider.pageCount - 1)
        : this.currentPage--
    },
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
        object-fit: contain;
      }
    }
  }

  .nav {
    position: absolute;
    top: 40%;
    z-index: 1;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: 0.3s ease all;
    @include for-phone-only {
      width: 24px;
      height: 24px;
      top: 45%;
    }
    &:active {
      transform: scale(0.8);
    }
  }
  .right-nav {
    right: 16px;
    @include for-phone-only {
      right: 8px;
    }
  }
  .left-nav {
    left: 16px;
    @include for-phone-only {
      left: 8px;
    }
  }
}
</style>