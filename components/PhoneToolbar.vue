<template>
  <div id="phone-toolbar">
    <div class="search">
      <img
        src="/search.svg"
        alt=""
        @click="$store.commit('togglePhoneSearch')"
      />
    </div>
    <div class="logo">
      <nuxt-link to="/"><img src="/logo.png" alt="logo" /></nuxt-link>
    </div>
    <div class="menu-btn"></div>
  </div>
</template>

<script>
export default {
  name: 'PhoneToolbarComponent',
}
</script>

<style lang="scss" scoped>
#phone-toolbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(255, 255, 255);
  display: none;
  padding: 18px 20px;
  z-index: 1;
  border-bottom: 0.5px solid #b8b8b8;
  @include for-phone-only {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @include for-tablet-only {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 18px 60px;
  }
  .search {
    width: 10%;
    img {
      width: 18px;
      height: 18px;
      object-fit: contain;
    }
  }
  .logo {
    flex-grow: 1;
    width: 131px;
    height: 58px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .menu-btn {
    width: 10%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>