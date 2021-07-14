<template>
  <div id="desktop-menu">
    <div class="category" v-for="(item, i) in menus" :key="i">
      <nuxt-link :to="'/browse/' + item.category.name">
        <h4 class="title">{{ item.category.name }}</h4>
      </nuxt-link>
      <div v-if="item.tags && item.tags.length" class="tags">
        <ul>
          <li v-for="tag in item.tags" :key="tag.id">
            <nuxt-link :to="'/browse/' + item.category.name + '_' + tag.name">
              <p>{{ tag.name }}</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopMenuComponent',
  computed: {
    menus() {
      return this.$store.getters.getMenus
    },
  },
}
</script>

<style lang="scss" scoped>
#desktop-menu {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .category {
    position: relative;
    padding: 25px;
    transition: 0.3s ease all;
    cursor: pointer;
    // &:last-child {
    //   .tags {
    //     left: -40px;
    //   }
    // }
    .title {
      font-size: 11px;
      line-height: 12px;
      font-weight: 400;
      text-transform: uppercase;
      transition: 0.3s ease all;
    }
    .tags {
      display: none;
      position: absolute;
      top: 62.5px;
      background: #fff;
      min-width: 180px;
      transition: 0.3s ease all;
      z-index: 2;
      max-height: 500px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background: #f9f9f9;
      }
      &::-webkit-scrollbar-thumb {
        background: #888;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          border-bottom: 0.5px solid #000;
          padding: 15px;
          &:last-child {
            border-bottom: none;
          }
          &:first-child {
            border-top: 1px solid #cccccc;
          }
          p {
            font-size: 11px;
            line-height: 12px;
            font-weight: 400;
            text-transform: uppercase;
            transition: 0.3s ease all;
            &:hover {
              font-weight: 600;
            }
          }
        }
      }
    }
    &:hover {
      transition: 0.3s ease all;
      .title {
        font-weight: 600;
      }
      .tags {
        display: block;
      }
    }
  }
}
</style>