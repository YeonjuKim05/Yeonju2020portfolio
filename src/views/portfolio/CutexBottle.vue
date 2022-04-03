<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Cutex Beer Bottle 3D</h1></div>
    <div class="pf-image-banner-beer">
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
      <div class="info-text">
        <h1>
          Created by mixing the Cute'x brand with Tetley's, this project focuses
          on working with beer bottles as a 3D model. The website is designed
          with the theme of beer campaign events.
        </h1>
      </div>
      <div class="two-images-beer">
        <div class="col1-image-beer">
          <img src="@/assets/images/beer-logo-move.gif" alt="apopo-mobile" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/beer-8.gif" alt="apopo-logo" />
        </div>
      </div>
      <div class="banner-image-beer">
        <img src="@/assets/images/beer-10.png" alt="apopo" />
      </div>
      <div class="banner-image-2-beer">
        <img src="@/assets/images/beer1.gif" alt="fanshawe map" />
        <!-- <h1>Jusy play<br />around<br />with colors!</h1> -->
      </div>
      <div class="banner-image-beer-col3">
        <img src="@/assets/images/beer-5.png" alt="apopo" />
        <img src="@/assets/images/beer-6.png" alt="apopo" />
        <img src="@/assets/images/beer-7.png" alt="apopo" />
      </div>
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CutexBottle",
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
