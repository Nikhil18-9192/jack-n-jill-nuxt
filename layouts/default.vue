<template>
  <div>
    <Toolbar />
    <PhoneToolbar />
    <MenuButton />
    <PhoneSearchView v-if="$store.state.phoneSearch" />
    <transition name="slide">
      <PhoneMenu v-if="menuState" />
    </transition>
    <div
      v-if="menuState"
      class="menuModal"
      @click="$store.commit('toggleMenuState')"
    ></div>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue'
export default {
  components: { Footer },
  data() {
    return {
      menuState: false,
    }
  },

  computed: {
    storeMenuState: function () {
      return this.$store.getters.getMenuState
    },
  },
  watch: {
    storeMenuState: function (newState) {
      this.menuState = newState
    },
  },
}
</script>
<style>
html {
  font-family: 'Spartan', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
a {
  color: #000;
  text-decoration: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.menuModal {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.192);
  top: 0;
  left: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.5, 1);
}
.slide-enter,
.slide-leave-active {
  transform: translateX(100%);
}
</style>
