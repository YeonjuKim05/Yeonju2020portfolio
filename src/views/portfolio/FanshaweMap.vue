<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Fanshawe College Map</h1></div>
    <div data-aos="fade-up" class="pf-image-banner">
      <img src="@/assets/images/fanshawe-1.png" alt="fanshawe map" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>Fanshawe College Map design</p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>Designer <a href="https://github.com/YeonjuKim05">Yeonju Kim</a></p>
      </div>
      <div class="pf-col">
        <h5>Timeline</h5>
        <p>Jun — Sep 2020</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text">
        <h1>
          It is designed to make it easy for people to find the complex
          structure of the school. I redesigned the existing map and emphasized
          the unity of the design so that it does not look as complicated as
          possible. I tried to obtain traffic information by referring to Google
          Maps and to obtain all the more necessary information for students and
          visitors at a glance using pictograms and icons for various
          convenience facilities.
        </h1>
      </div>
      <div class="two-images">
        <div class="col1-image">
          <img src="@/assets/images/map-2.png" alt="fanshawe map" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/Paper-Mockup2.png" alt="fanshawe map" />
        </div>
      </div>
      <!-- <div class="banner-image"></div> -->
      <div class="banner-image-2">
        <img src="@/assets/images/map-ap.gif" alt="fanshawe map" />
      </div>
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FanshaweMap",
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
