<template>
  <div id="products">
    <div class="product-loader" v-if="$apollo.queries.products.loading">
      <Loading />
    </div>
    <div
      class="card-container"
      v-if="products && products[0].subProduct.length"
    >
      <div class="card" v-for="(item, i) in products[0].subProduct" :key="i">
        <img :src="item.image.url" alt="" />
        <div class="title">
          <p>{{ item.name }}</p>
          <a
            class="enquire-btn"
            target="_blank"
            :href="
              'https://api.whatsapp.com/send?text= Hello, Im interested in ' +
              item.name +
              '.!&phone=+919158641555'
            "
            rel="noreferrer"
            ><svg
              class="svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.4541 4.5091C20.086 2.13821 16.9366 0.831957 13.5815 0.830566C6.66781 0.830566 1.0411 6.45713 1.03832 13.3726C1.03739 15.5833 1.61489 17.7413 2.71258 19.6434L0.933105 26.1431L7.58243 24.3988C9.41458 25.3982 11.4773 25.9249 13.5764 25.9255H13.5816C20.4945 25.9255 26.1219 20.2985 26.1245 13.3827C26.1259 10.0311 24.8224 6.87983 22.4541 4.5091ZM13.5815 23.8072H13.5771C11.7065 23.8065 9.87189 23.3037 8.27101 22.3541L7.89049 22.128L3.94468 23.1632L4.99787 19.3161L4.74991 18.9216C3.70629 17.2617 3.15521 15.3432 3.15614 13.3734C3.1583 7.62542 7.83518 2.949 13.5856 2.949C16.3703 2.94993 18.9879 4.03572 20.9562 6.00631C22.9244 7.9769 24.0077 10.5962 24.0068 13.3819C24.0043 19.1304 19.3278 23.8072 13.5815 23.8072ZM19.3 15.9992C18.9866 15.8422 17.4457 15.0843 17.1583 14.9795C16.8713 14.875 16.6621 14.8229 16.4534 15.1365C16.2444 15.4501 15.6438 16.1562 15.4609 16.3652C15.278 16.5744 15.0954 16.6007 14.7819 16.4437C14.4684 16.2869 13.4587 15.9558 12.2615 14.8881C11.3299 14.0571 10.7009 13.0307 10.518 12.7171C10.3354 12.4032 10.5164 12.2499 10.6555 12.0775C10.9948 11.6562 11.3345 11.2145 11.4389 11.0055C11.5435 10.7963 11.4912 10.6132 11.4127 10.4564C11.3345 10.2996 10.7077 8.75694 10.4466 8.12923C10.192 7.51835 9.93384 7.60086 9.74134 7.59128C9.55873 7.58216 9.3497 7.58031 9.14066 7.58031C8.93179 7.58031 8.59221 7.65864 8.30485 7.97257C8.01764 8.28635 7.20808 9.04446 7.20808 10.5871C7.20808 12.1297 8.33111 13.62 8.48777 13.8292C8.64443 14.0384 10.6978 17.204 13.8416 18.5614C14.5894 18.8846 15.1731 19.0772 15.6284 19.2217C16.3792 19.4602 17.0623 19.4265 17.6024 19.3459C18.2046 19.2558 19.4565 18.5876 19.7179 17.8556C19.979 17.1235 19.979 16.4961 19.9005 16.3652C19.8223 16.2345 19.6133 16.1562 19.3 15.9992Z"
                fill="white"
              /></svg
            >Enquire</a
          >
        </div>
      </div>
    </div>
    <div v-else class="message">
      <p>no products available</p>
    </div>
  </div>
</template>

<script>
import productQuery from '@/apollo/queries/product.gql'
export default {
  name: 'ProductsPage',

  apollo: {
    products: {
      query: productQuery,
      prefetch: true,
      variables() {
        const param = this.$route.params.category
        return {
          category: param,
        }
      },
    },
  },
  mounted() {
    console.log(this.products)
  },
}
</script>

<style lang="scss" scoped>
#products {
  position: relative;
  width: 100%;
  height: 100%;
  @include for-phone-only {
    padding-bottom: 0;
    margin-top: 95px;
  }
  @include for-tablet-only {
    margin-top: 95px;
  }
  .product-loader {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: white;
    box-shadow: 4px 4px 32px rgba(0, 0, 0, 0.103);
    border-radius: 8px;
  }
  .card-container {
    padding: 0 85px;
    padding-bottom: 150px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2px;
    row-gap: 135px;
    border-top: 1px solid #cccccc;
    max-width: 1530px;
    margin: 0 auto;
    @include for-phone-only {
      padding: 0 10px;
      grid-template-columns: repeat(2, 1fr);
      border-top: none;
      row-gap: 85px;
      padding-bottom: 85px;
    }
    @include for-tablet-only {
      grid-template-columns: repeat(2, 1fr);
      padding: 0 45px;
      row-gap: 135px;
      padding-bottom: 150px;
    }
    .card {
      position: relative;
      width: 338px;
      height: 337px;
      transition: 0.3s ease all;
      background: rgb(250, 250, 250);

      @include for-phone-only {
        width: 175px;
        height: 175px;
        margin-bottom: 20px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        mix-blend-mode: multiply;
      }
      .name {
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.155em;
        text-align: center;
        padding: 7px 0;
        @include for-phone-only {
          font-size: 14px;
          line-height: 16px;
        }
      }
      .title {
        position: relative;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        align-items: center;
        transition: 0.3s ease all;
        @include for-phone-only {
          height: 117px;
          padding-top: 14px;
          padding-bottom: 20px;
        }
        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 170%;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin-bottom: 10px;
          @include for-phone-only {
            font-weight: 500;
            font-size: 11px;
            line-height: 170%;
            text-align: center;
            letter-spacing: 0.03em;
            margin-bottom: 11px;
          }
        }
        .enquire-btn {
          background: #272727;
          width: 210px;
          height: 60px;
          color: #fff !important;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          @include for-phone-only {
            width: 100%;
            width: 118px;
            height: 34px;
            font-size: 11px;
            line-height: 12px;
            letter-spacing: 0.03em;
            text-transform: uppercase;
          }
          .svg {
            width: 25px;
            height: 25px;
            object-fit: contain;
            margin-right: 8px;
            @include for-phone-only {
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
  }
  .message {
    text-align: center;
    padding: 50px 0;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 170%;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      margin-bottom: 10px;
      color: #cccccc;
    }
  }
}
</style>
