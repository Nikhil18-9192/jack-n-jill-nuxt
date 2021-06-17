<template>
  <div id="phone-search">
    <div>
      <SearchInput v-model="result" />
    </div>
    <div class="close" @click="$store.commit('togglePhoneSearch')">
      &#x2715;
    </div>
    <div
      class="product"
      v-for="(item, i) in result"
      :key="i"
      @click="$store.commit('togglePhoneSearch')"
    >
      <nuxt-link
        class="global-link"
        :to="'/browse/' + item.category.name"
      ></nuxt-link>
      <div class="image">
        <img :src="item.image.formats.thumbnail.url" alt="" />
      </div>
      <div class="text">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneSearchComponent',
  data() {
    return {
      result: [],
    }
  },
}
</script>

<style lang="scss" scoped>
#phone-search {
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: #fff;
  z-index: 20;

  padding-top: 85px;

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #000;
    color: #fff;
    box-sizing: border-box;
  }
  .product {
    display: flex;
    position: relative;
    align-items: center;

    padding: 8px 30px;
    border-bottom: 0.5px solid #ccc;
    .global-link {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .image {
      width: 30%;
      display: flex;
      justify-content: center;
      img {
        width: 60x;
        height: 60px;
        object-fit: contain;
        margin-right: 18px;
      }
    }
    .text {
      width: 70%;
      p {
        font-size: 12px;
        line-height: 12px;
        font-weight: 400;
      }
    }
  }
}
</style>