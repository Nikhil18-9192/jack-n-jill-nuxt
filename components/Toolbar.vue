<template>
  <div id="toolbar">
    <div class="logo">
      <nuxt-link to="/"><img src="/logo.png" alt="logo" /></nuxt-link>
      <img class="search" src="search.svg" alt="" />
    </div>

    <DesktopMenu />
  </div>
</template>

<script>
export default {
  name: 'ToolbarComponent',
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: relative;
  top: 0;
  width: 100%;
  height: 150px;
  padding: 0 23px;
  border-bottom: 1px solid #cccccc;
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
      top: 46px;
      width: 18px;
      height: 18px;
      object-fit: contain;
    }
  }
}
</style>