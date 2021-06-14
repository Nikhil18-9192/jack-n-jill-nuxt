<template>
  <div>
    <Toolbar />
    <PhoneToolbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue'
export default {
  components: { Footer },
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
</style>
