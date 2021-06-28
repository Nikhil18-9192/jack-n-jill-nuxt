<template>
  <div id="hero" :style="{ height: height + 'px' }"></div>
</template>

<script>
export default {
  name: 'HeroComponent',
  data() {
    return {
      height: null,
    }
  },
  mounted() {
    this.height =
      (document.getElementById('hero').parentElement.clientWidth * 605) / 1440
  },
}
</script>

<style lang="scss" scoped>
#hero {
  position: relative;
  width: 100%;
  background-image: url('/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  @include for-phone-only {
    margin-top: 95px;
  }
  @include for-tablet-only {
    margin-top: 95px;
  }
}
</style>