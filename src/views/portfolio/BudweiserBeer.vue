<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Budweiser Promotion</h1></div>
    <div data-aos="fade-up" class="pf-image-banner">
      <img src="@/assets/images/budweiser-banner.png" alt="budweiser" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>Desktop website</p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>
          Designer
          <a href="https://github.com/YeonjuKim05">Yeonju Kim</a>
        </p>
      </div>
      <div class="pf-col">
        <h5>Timeline</h5>
        <p>Mar — Jun 2020</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text">
        <h1>
          The Budweiser promotion landing page strongly represents the brand
          color and emphasizes information using fonts and images suitable for
          festival events. It is designed to be useful for information delivery
          in an easy-to-understand manner.
        </h1>
      </div>
      <div class="banner-image-apopo">
        <img src="@/assets/images/budweiser-1.png" alt="budweiser" />
      </div>
      <!-- <div class="two-images">
        <div class="col1-image-beer">
          <img
            src="@/assets/images/YeonjuKim_budweiser-ad.png"
            alt="apopo-mobile"
          />
        </div>
        <div class="col1-image-beer">
          <img
            src="@/assets/images/YeonjuKim_budweiser-banner.png"
            alt="budweiser"
          />
        </div>
      </div> -->
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BudweiserBeer",
  methods: {
    portfoliopage() {
      this.$router.push("/WorkView");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/_portfolio.scss";
</style>
