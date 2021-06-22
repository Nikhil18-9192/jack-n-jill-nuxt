<template>
  <div class="lds-ring" v-if="loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.lds-ring {
  display: inline-block;
  position: fixed;
  top: 20px;
  left: 84px;
  z-index: 1000;
  width: 80px;
  height: 80px;
  @include for-phone-only {
    left: 45px;
  }
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 35px;
  height: 35px;
  margin: 8px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
  @include for-phone-only {
    width: 25px;
    height: 25px;
  }
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>