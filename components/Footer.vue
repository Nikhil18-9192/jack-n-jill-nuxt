<template>
  <div id="footer">
    <div class="container">
      <div class="contact">
        <h4>Contact Us:</h4>
        <p class="phone">
          <a href="tel:917866444543" target="_blank" rel="noopener"
            >+91 786 644 4543</a
          >
        </p>
        <p>
          <a href="mailto:jjclothing@gmail.com" target="_blank" rel="noopener"
            >jjclothing@gmail.com</a
          >
        </p>
      </div>
      <div class="visit-us">
        <h4>Visit Us:</h4>
        <p>
          E Ward, opp. shahji law college, Shahupuri, Kolhapur, Maharashtra
          416001
        </p>
      </div>
      <div class="social-icon">
        <div class="icons">
          <a href="/" target="_blank" rel="noopener"
            ><img src="/fb.svg" alt="facebook icon"
          /></a>
          <a href="/" target="_blank" rel="noopener"
            ><img src="/instagram.svg" alt="instagram icon"
          /></a>
        </div>
        <p>Made by Formec Media</p>
        <p>Jack and jill / Copyright 2021 / All Rights Reserved</p>
      </div>
      <div class="qr">
        <p>Scan to pay</p>
        <img src="qr1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 100%;
  padding: 65px 170px 75px 170px;
  background: #f9f9f9;
  @include for-phone-only {
    padding: 45px 39px;
  }
  @include for-tablet-only {
    padding: 45px 60px 75px 60px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #000000;
    padding-bottom: 60px;
    @include for-phone-only {
      flex-direction: column;
      padding-bottom: 0;
      border-bottom: none;
    }
    @include for-tablet-only {
      flex-wrap: wrap;
      row-gap: 30px;
    }
    .contact {
      h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 0%;
        text-transform: uppercase;
        margin-bottom: 45px;
        @include for-phone-only {
          margin-bottom: 25px;
        }
      }
      .phone {
        font-weight: 600;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 319.5%;
        letter-spacing: 0.03em;
      }
    }
    .visit-us {
      @include for-phone-only {
        margin: 35px 0;
      }
      h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 0%;
        margin-bottom: 45px;
        @include for-phone-only {
          margin-bottom: 25px;
        }
      }
      p {
        font-weight: 400;
        max-width: 297px;
        font-size: 14px;
        line-height: 319.5%;
        letter-spacing: 0.03em;
        text-transform: uppercase;
      }
    }
    .social-icon {
      .icons {
        margin-bottom: 33px;
        a {
          margin-right: 18px;
          img {
            width: 30px;
            height: 30px;
            object-fit: contain;
          }
        }
      }
      p {
        font-weight: 400;
        font-size: 11px;
        line-height: 319.5%;
        letter-spacing: 0.03em;
        @include for-phone-only {
          font-size: 9px;
        }
      }
    }
    .qr {
      @include for-phone-only {
        margin-top: 35px;
      }
      img {
        width: 150px;
        height: 100%;
        object-fit: cover;
      }
      p {
        text-align: center;
        margin-bottom: 12px;
        @include for-phone-only {
          text-align: left;
        }
      }
    }
  }
}
</style>
