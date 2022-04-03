<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Cutex Beer Bottle 3D</h1></div>
    <div data-aos="fade-up" class="pf-image-banner-beer">
      <img src="@/assets/images/beer2.gif" alt="beer" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>3D Beer bottle</p>
        <p>Website</p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>Designer <a href="https://github.com/YeonjuKim05">Yeonju Kim</a></p>
      </div>
      <div class="pf-col">
        <h5>My Contribution</h5>
        <p>Logo Design</p>
        <p>3D Modeling</p>
        <p>Front-end/Html, Css, Js</p>
      </div>
      <div class="pf-col">
        <h5>Timeline</h5>
        <p>Feb — Apr 2021</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text">
        <h1>
          Created by mixing the Cute'x brand with Tetley's, this project focuses
          on working with beer bottles as a 3D model. The website is designed
          with the theme of beer campaign events.
        </h1>
      </div>
      <div class="banner-image-balm">
        <img src="@/assets/images/balm-styleframe.png" alt="apopo" />
      </div>
      <div class="banner-image-2-balm">
        <img src="@/assets/images/balm-drawing-02.png" alt="fanshawe map" />
      </div>
      <div class="two-images-beer">
        <div class="col1-image">
          <img src="@/assets/images/balm-label.gif" alt="apopo-mobile" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/mendalbalm-sketch.png" alt="apopo-logo" />
        </div>
      </div>

      <div class="banner-image-2-balm">
        <img src="@/assets/images/facebook_image_3.jpg" alt="" />
        <!-- <h1>Jusy play<br />around<br />with colors!</h1> -->
      </div>
      <div class="banner-image-beer-col3">
        <img src="@/assets/images/instagram_image_1.jpg" alt="" />
        <img src="@/assets/images/instagram_image_2.jpg" alt="" />
        <img src="@/assets/images/instagram_image_3.jpg" alt="" />
      </div>
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MendelBalm",
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
