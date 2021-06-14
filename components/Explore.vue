<template>
  <div id="explore">
    <div class="top">
      <h1>EXPLORE</h1>
      <div class="card-container">
        <div class="card" v-for="(item, i) in cards.items" :key="i">
          <nuxt-link class="global-link" to="/"></nuxt-link>
          <div class="image">
            <img :src="item.image.url" :alt="item.title" />
          </div>
          <div class="text">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import { exploreCards } from '@/utils'
export default {
  name: 'ExpoloreComponent',

  computed: {
    cards() {
      return this.$store.getters.getExploreCards
    },
  },
}
</script>

<style lang="scss" scoped>
#explore {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 85px;
  .top {
    width: 100%;
    height: 345px;
    h1 {
      font-weight: 100;
      font-size: 120px;
      line-height: 134px;
      letter-spacing: 0.16em;
      text-align: center;
    }
    .card-container {
      position: absolute;
      display: flex;
      column-gap: 40px;
      left: 85px;
      top: 293px;
      .card {
        position: relative;
        background: #fff;
        width: 300px;
        min-height: 455px;
        display: flex;
        flex-direction: column;
        transition: 0.3s ease all;

        .global-link {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .image {
          height: 275px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .text {
          flex-grow: 1;
          display: flex;
          align-items: center;
          padding: 18px;
          p {
            font-size: 18px;
            line-height: 170%;
            letter-spacing: 0.155em;
            font-weight: 400;
            max-width: 120px;
            text-transform: uppercase;
          }
        }
        &:hover {
          filter: drop-shadow(21px 20px 53px rgba(0, 0, 0, 0.18));
        }
      }
    }
  }
  .bottom {
    background: #eef4f4;
    width: 100%;
    height: 410px;
  }
}
</style>