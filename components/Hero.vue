<template>
  <div id="hero"></div>
</template>

<script>
export default {
  name: 'HeroComponent',
}
</script>

<style lang="scss" scoped>
#hero {
  position: relative;
  width: 100%;
  height: 605px;
  background-image: url('/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  @include for-phone-only {
    background-image: url('/hero1.jpg');
    height: 299px;
    margin-top: 95px;
  }
  @include for-tablet-only {
    margin-top: 95px;
  }
}
</style>