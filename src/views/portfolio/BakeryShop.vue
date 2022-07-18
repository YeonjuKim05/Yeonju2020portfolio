<template>
  <div class="portfolio">
    <div class="pf-title">
      <h1>International Bakery Shop</h1>
    </div>
    <div data-aos="fade-up" class="pf-image-banner-apopo">
      <img src="@/assets/images/bread-2.png" alt="apopo" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>Bakery Web design</p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>
          Designer/Developer
          <a href="https://github.com/YeonjuKim05">Yeonju Kim</a>
        </p>
      </div>

      <div class="pf-col">
        <h5>Timeline</h5>
        <p>July — Oct 2020</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text">
        <h1>
          I chose bright colors and cute fonts to change the existing flat
          homepage layout. <br />I took all the photos on the website myself.
        </h1>
      </div>
      <button class="outline-btn width-wide" @click="bakery()">
        View project
      </button>
      <div data-aos="fade-up" class="banner-image-apopo">
        <img src="@/assets/images/bakery-5.png" alt="apopo" />
      </div>
      <!-- <div class="two-images">
        <div class="col1-image-apopo">
          <img src="@/assets/images/bakery-2.png" alt="apopo-mobile" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/bakery-1.png" alt="apopo-logo" />
        </div>
      </div> -->

      <!-- <div class="banner-image-2-apopo">
        <img src="@/assets/images/apopo-04-03.png" alt="fanshawe map" />
      </div> -->
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BakeryShop",
  methods: {
    portfoliopage() {
      this.$router.push("/WorkView");
    },
    bakery() {
      window.open("https://github.com/YeonjuKim05/Kim_Y_MusicMixer.git");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/_portfolio.scss";
</style>
