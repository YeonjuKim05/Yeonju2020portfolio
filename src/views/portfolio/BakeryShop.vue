<template>
  <div class="portfolio">
    <div class="pf-title">
      <h1>International Bakery Shop</h1>
    </div>
    <div data-aos="fade-up" class="pf-image-banner">
      <img src="@/assets/images/bread-2.png" alt="Bakery" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>Bakery shop Web design</p>
        <p>
          <a
            href="https://github.com/YeonjuKim05/International-bakery.git"
            target="_blank"
            >Code link</a
          >
        </p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>
          Designer/Developer
          <a href="https://github.com/YeonjuKim05" target="_blank"
            >Yeonju Kim</a
          >
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
          The International Bakery Shop seeks a bright and cute image and tries
          to approach consumers in a friendly manner. We purchased and filmed
          the product according to the brand's characteristics.
        </h1>
      </div>

      <!-- <button class="outline-btn width-wide" @click="bakery()">
        View project
      </button> -->
      <div data-aos="fade-up" class="banner-image-apopo">
        <img src="@/assets/images/0011.png" alt="Bakery" />
      </div>

      <div class="two-images">
        <div class="col1-image">
          <img src="@/assets/images/01.png" alt="bakery" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/02.png" alt="bakery" />
        </div>
      </div>

      <div data-aos="fade-up" class="banner-image-balm">
        <img src="@/assets/images/bakery-proposal.png" alt="bakery" />
      </div>
      <div class="two-images" style="margin-top: 100px">
        <div class="col1-image">
          <img src="@/assets/images/bakery-mockup.png" alt="bakery" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/bakery-mockup2.png" alt="bakery" />
        </div>
      </div>
      <!-- <div class="two-images">
        <div class="col1-image-apopo">
          <img src="@/assets/images/bakery-2.png" alt="Bakery" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/bakery-1.png" alt="Bakery" />
        </div>
      </div> -->

      <!-- <div class="banner-image-2-apopo">
        <img src="@/assets/images/apopo-04-03.png" alt="Bakery" />
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
