<template>
  <div class="cta-btn">
    <a href="/" class="btn"> Click here to shop online </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cta-btn {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .btn {
    width: 545px;
    height: 80px;
    background: rgba(6, 202, 6, 0.521);
    font-size: 28px;
    line-height: 18px;
    letter-spacing: 0.03em;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
    @include for-phone-only {
      width: 94%;
      font-size: 20px;
    }
  }
}
</style>