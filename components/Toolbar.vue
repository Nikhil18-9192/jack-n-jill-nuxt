<template>
  <div id="toolbar">
    <div class="logo">
      <nuxt-link to="/"><img src="/logo.png" alt="logo" /></nuxt-link>
      <div class="search">
        <SearchInput v-if="$store.state.searchToggle" v-model="result" />
        <img
          v-else
          src="/search.svg"
          alt=""
          @click="$store.commit('toggleSearch')"
        />
        <div v-if="result && result.length" class="results">
          <div
            class="product"
            v-for="(item, i) in result"
            :key="i"
            @click="clearSearch"
          >
            <nuxt-link
              class="global-link"
              :to="'/browse/' + item.category.name"
            ></nuxt-link>
            <img :src="item.image.formats.thumbnail.url" alt="" />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <DesktopMenu />
  </div>
</template>

<script>
export default {
  name: 'ToolbarComponent',
  data() {
    return {
      result: [],
    }
  },
  mounted() {},
  methods: {
    clearSearch() {
      this.result = []
    },
  },
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 23px;
  border-bottom: 1px solid #cccccc;
  @include for-phone-only {
    display: none;
  }
  @include for-tablet-only {
    display: none;
  }
  .logo {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px;
    border-bottom: 1px solid #000;
    img {
      width: 131px;
      height: 58px;
      object-fit: contain;
    }
    .search {
      position: absolute;
      right: 84px;
      top: 36px;
      display: flex;
      img {
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
      .results {
        position: absolute;
        top: 37px;
        right: 0;
        width: 100%;
        background: #fff;
        z-index: 1;
        max-height: 500px;
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          width: 3px;
        }
        &::-webkit-scrollbar-track {
          background: #f9f9f9;
        }
        &::-webkit-scrollbar-thumb {
          background: #888;
        }
        .product {
          position: relative;
          display: flex;
          align-items: center;
          padding: 15px;
          box-sizing: border-box;
          border-bottom: 0.5px solid #ccc;
          .global-link {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
          }
          img {
            width: 32px;
            height: 32px;
            object-fit: contain;
            margin-right: 12px;
          }
          p {
            font-size: 12px;
            line-height: 12px;
            font-weight: 400;
          }
          &:hover {
            background: rgb(235, 235, 235);
          }
        }
      }
    }
  }
}
</style>