<template>
  <div id="phone-menu">
    <div class="title">
      <h4>Browse Products</h4>
    </div>
    <div class="nav-list">
      <div
        class="parent-item"
        v-for="(item, parentIndex) in menus"
        :key="parentIndex"
      >
        <button>
          <nuxt-link :to="'/browse/' + item.category.name">
            <p class="category" @click="$store.commit('toggleMenuState')">
              {{ item.category.name }}
            </p>
          </nuxt-link>
          <p
            @click="
              expandedParentIndex == parentIndex
                ? (expandedParentIndex = null)
                : (expandedParentIndex = parentIndex)
            "
          >
            {{ expandedParentIndex == parentIndex ? '-' : '+' }}
          </p>
        </button>
        <div
          class="tags"
          :class="[{ expanded: parentIndex == expandedParentIndex }]"
        >
          <nuxt-link
            :to="'/browse/' + item.category.name + '_' + tag.name"
            v-for="tag in item.tags"
            :key="tag.id"
            ><p @click="$store.commit('toggleMenuState')">
              {{ tag.name }}
            </p></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneMenuComponent',
  data() {
    return {
      expandedParentIndex: null,
    }
  },
  computed: {
    menus() {
      return this.$store.getters.getMenus
    },
  },
}
</script>

<style lang="scss" scoped>
#phone-menu {
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 375px;
  right: 0;
  min-height: 100vh;
  background: #f7f7f7;
  z-index: 2000;
  text-transform: uppercase;
  .title {
    padding: 0 20px;
    margin-top: 40px;
    h4 {
      font-weight: 400;
      font-size: 11px;
      line-height: 170%;
      letter-spacing: 0.03em;
      text-transform: capitalize;
    }
  }
  .nav-list {
    margin-top: 30px;
    .parent-item {
      button {
        width: 100%;
        border: 0.5px solid #a0a0a0;
        border-top: none;
        border-left: none;
        border-right: none;
        text-align: left;
        padding: 0 20px;
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          width: 100%;
        }
        .category {
          font-weight: 500;
          font-size: 11px;
          line-height: 535%;
          text-transform: uppercase;
        }
        p {
          font-size: 18px;
        }
      }
      .tags {
        max-height: 0px;
        overflow: hidden;
        background: #fff;
        transition: 0.3s ease all;
        a {
          p {
            font-weight: 400;
            font-size: 11px;
            line-height: 535%;
            letter-spacing: 0.08em;
            border-bottom: 0.5px solid #a0a0a0;
            padding-left: 53px;
          }
        }
      }
      .expanded {
        max-height: 100%;
      }
    }
  }
}
</style>