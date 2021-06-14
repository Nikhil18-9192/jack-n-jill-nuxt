<template>
  <div id="explore">
    <div class="top">
      <h1>EXPLORE</h1>
      <p class="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et nunc,
        quis sit.
      </p>
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
  @include for-phone-only {
    padding-top: 37px;
  }
  @include for-tablet-only {
    padding-top: 45px;
  }
  .top {
    width: 100%;
    height: 345px;
    h1 {
      font-weight: 100;
      font-size: 120px;
      line-height: 134px;
      letter-spacing: 0.16em;
      text-align: center;
      @include for-phone-only {
        font-size: 45px;
        line-height: 72px;
      }
      @include for-tablet-only {
        font-size: 75px;
        line-height: 79px;
      }
    }
    .desc {
      display: none;
      @include for-phone-only {
        display: block;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.03em;
        max-width: 225px;
        margin: 0 auto;
        font-weight: 400;
      }
    }
    .card-container {
      position: absolute;
      display: flex;
      column-gap: 40px;
      left: 85px;
      top: 293px;
      @include for-phone-only {
        flex-wrap: wrap;
        left: 10px;
        top: 210px;
        column-gap: 12px;
        row-gap: 29px;
      }
      @include for-tablet-only {
        top: 165px;
        left: 60px;
        flex-wrap: wrap;
        column-gap: 24px;
        row-gap: 24px;
      }

      .card {
        position: relative;
        background: #fff;
        width: 300px;
        min-height: 455px;
        display: flex;
        flex-direction: column;
        transition: 0.3s ease all;
        @include for-phone-only {
          width: 170px;
          min-height: 100%;
        }
        @include for-tablet-only {
          width: 200px;
          min-height: 100%;
        }
        .global-link {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .image {
          height: 275px;
          @include for-phone-only {
            height: 154px;
          }
          @include for-tablet-only {
            height: 180px;
          }
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
            @include for-phone-only {
              font-size: 12px;
              line-height: 20px;
              letter-spacing: 0.155em;
              max-width: 85px;
            }
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
    @include for-phone-only {
      height: 360px;
    }
  }
}
</style>