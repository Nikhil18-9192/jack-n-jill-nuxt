<template>
  <div id="category">
    <div class="route">
      <p
        :style="[
          tag == '' ? { 'font-weight': '600' } : { 'font-weight': '400' },
        ]"
      >
        {{ category }} <span v-if="tag !== ''">/</span> <span>{{ tag }}</span>
      </p>
    </div>
    <div class="card-container">
      <div class="card" v-for="(item, i) in products" :key="i">
        <img :src="item.image.formats.thumbnail.url" alt="" />
        <div class="title">
          <p>{{ item.name }}</p>
          <a class="enquire-btn" href="/"
            ><img src="/whatsapp.svg" alt="whatsapp icon" /> Enquire</a
          >
        </div>
      </div>
    </div>
    <div class="pagi-info">
      <Pagination
        class="pagination"
        v-model="page"
        :records="totalCount"
        :per-page="productsPerPage"
        @paginate="paginate"
        :options="paginationOptions"
      />
    </div>
  </div>
</template>

<script>
import productQuery from '@/apollo/queries/products.gql'
import countQuery from '@/apollo/queries/productsCount.gql'
import Pagination from 'vue-pagination-2'
const productsPerPage = 10
export default {
  name: 'CategoryPage',
  components: {
    Pagination,
  },
  apollo: {
    products: {
      query: productQuery,
      prefetch: true,
      variables() {
        const param = this.$route.params.category
        console.log(param)
        if (param.includes('_')) {
          this.category = param.split('_')[0]
          this.tag = param.split('_')[1]
          return {
            category: this.category,
            tag: this.tag,
            start: 0,
            limit: productsPerPage,
          }
        } else {
          this.category = param
          return {
            category: param,
            tag: '',
            start: 0,
            limit: productsPerPage,
          }
        }
      },
    },
    productsConnection: {
      query: countQuery,
      prefetch: true,
      variables() {
        const param = this.$route.params.category
        this.category = param
        this.tag = ''
        if (param.includes('_')) {
          this.category = param.split('_')[0]
          this.tag = param.split('_')[1]
        }
        return {
          category: this.category,
          tag: this.tag,
        }
      },
    },
  },
  data() {
    return {
      products: [],
      productsPerPage: productsPerPage,
      category: '',
      tag: '',
      filterState: false,
      filter: {},
      query: null,
      start: 0,
      page: 1,
      filterState: false,
      paginationOptions: {
        chunk: 5,
      },
    }
  },

  methods: {
    paginate: function () {
      this.start = (this.page - 1) * productsPerPage
      this.$apollo.queries.products.fetchMore({
        variables: {
          start: this.start,
        },
        updateQuery: (oldData, { fetchMoreResult }) => {
          const newProducts = fetchMoreResult.products
          if (newProducts.length <= 0) {
            return
          }
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return {
            products: [...newProducts],
          }
        },
      })
    },
  },
  computed: {
    totalCount() {
      return this.productsConnection && this.productsConnection.aggregate
        ? this.productsConnection.aggregate.count
        : 0
    },
  },
  watch: {},
}
</script>

<style lang="scss" scoped>
#category {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 75px;
  .route {
    padding: 25px 85px;
    p {
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
      span {
        font-weight: 600;
      }
    }
  }
  .card-container {
    padding: 0 85px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    border-top: 1px solid #cccccc;
    .card {
      position: relative;
      width: 338px;
      height: 449px;
      cursor: pointer;
      transition: 0.3s ease all;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .title {
        opacity: 0;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 173px;
        background: rgba(242, 242, 242, 0.8);
        display: flex;
        flex-direction: column;
        padding-top: 35px;
        align-items: center;
        transition: 0.3s ease all;
        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 170%;
          letter-spacing: 0.03em;
          text-transform: capitalize;
          margin-bottom: 35px;
        }
        .enquire-btn {
          background: #272727;
          width: 210px;
          height: 60px;
          color: #fff !important;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 25px;
            height: 25px;
            object-fit: contain;
            margin-right: 8px;
          }
        }
      }
      &:hover .title {
        opacity: 1;
      }
    }
  }
  .pagi-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    margin-top: 32px;
    ::v-deep .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin: 0 12px;
        cursor: pointer;
      }
      ul {
        list-style: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 0.5px solid rgba(0, 0, 0, 0.137);
        margin-bottom: 8px;
        border-radius: 6px;
        padding: 4px 0;
      }
      p {
        text-align: center;
      }
      .disabled {
        opacity: 0.2 !important;
      }
      .active {
        color: red;
      }
    }
  }
}
</style>