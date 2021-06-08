<template>
  <div id="home-carousel">
    <div class="heading">
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit.Tellus et nunc,
        quis sit.
      </p>
    </div>
    <client-only>
      <carousel
        ref="slider"
        v-model="currentPage"
        class="carousel"
        :perPageCustom="[
          [320, 2],
          [375, 2],
          [768, 3],
          [1200, 4],
          [1800, 5],
        ]"
        :loop="true"
        :autoplay="false"
        :autoplayTimeout="5000"
        :mouse-drag="true"
        :paginationEnabled="false"
        :navigateTo="currentPage"
      >
        <slide class="slide" v-for="(item, i) in slides" :key="i">
          <div class="card">
            <img :src="item.src" :alt="item.title" />
            <div class="title">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import { carouselSlide } from '@/utils'
export default {
  name: 'HomeCarouselComponent',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentPage: 0,
    }
  },
  computed: {
    slides() {
      return carouselSlide
    },
  },
}
</script>

<style lang="scss" scoped>
#home-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 95px 0 65px 85px;
  .heading {
    h1 {
      font-weight: 500;
      font-size: 36px;
      line-height: 131%;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      margin-bottom: 43px;
    }
    p {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.03em;
      font-weight: 400;
      max-width: 333px;
    }
  }
  .carousel {
    width: 100%;
    margin-top: 82px;
    .slide {
      width: 352px;
      height: 468px;
      margin-right: 20px;
      .card {
        position: relative;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .title {
          background: rgba(255, 255, 255, 0.4);
          width: 100%;
          height: 140px;
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            font-weight: 500;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.155em;
          }
        }
      }
    }
  }
}
</style>