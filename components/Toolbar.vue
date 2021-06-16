<template>
  <div id="toolbar">
    <div class="logo">
      <nuxt-link to="/"><img src="/logo.png" alt="logo" /></nuxt-link>
      <div class="search" @click="search = true">
        <SearchInput v-if="search" v-model="result" />
        <img v-else src="search.svg" alt="" />
        <div v-if="result && result.length" class="results">
          <div v-for="(item, i) in result" :key="i">
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
      search: false,
      result: [],
    }
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
    }
  }
}
</style>