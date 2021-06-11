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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 25px;
  .category {
    position: relative;
    margin-right: 40px;
    transition: 0.3s ease all;
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
      top: 30px;
      background: #fff;
      min-width: 180px;
      transition: 0.3s ease all;
      z-index: 1;
      ul {
        list-style: none;
        padding: 0;
        li {
          border-bottom: 0.5px solid #000;
          padding: 15px;
          &:last-child {
            border-bottom: none;
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
      height: 100px;
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