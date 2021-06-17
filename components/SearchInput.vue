<template>
  <div id="search-input">
    <input
      v-model="text"
      type="text"
      @input="search"
      placeholder="Search Product"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInputComponent',
  data() {
    return {
      text: '',
      result: [],
    }
  },
  methods: {
    async search() {
      if (this.text !== '') {
        this.result = await this.$axios.$get(
          `/products?keywords_contains=${this.text}`
        )
        this.$emit('input', this.result)
      } else {
        this.result = []
        this.$emit('input', this.result)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#search-input {
  position: relative;
  width: 100%;
  width: 100%;
  input {
    width: 225px;
    height: 37px;
    border: 1px solid #cccc;
    border-radius: 64px;
    outline: none;
    padding: 0 12px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
  }
}
</style>