<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Mendelbalm Branding Design</h1></div>
    <div data-aos="fade-up" class="pf-image-banner">
      <img src="@/assets/images/balm-23.jpg" alt="Mendelbalm" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>Package Design</p>
        <p>Brand Design</p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>Designer <a href="https://github.com/YeonjuKim05">Yeonju Kim</a></p>
      </div>
      <div class="pf-col">
        <h5>My Contribution</h5>
        <p>Logo/Label Design</p>
        <p>Commercial Poster</p>
      </div>
      <div class="pf-col">
        <h5>Timeline</h5>
        <p>Feb — Apr 2021</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text">
        <h1>
          Mendelbalm is a clean natural beauty bodycare brand for healthy and
          eco-friendly green life. In order to approach consumers in a
          nature-friendly manner, plants that symbolize the raw material of the
          brand are included in a symbol.
        </h1>
      </div>
      <div data-aos="fade-up" class="banner-image-balm">
        <img src="@/assets/images/balm-styleframe.png" alt="Mendelbalm" />
      </div>
      <div data-aos="fade-up" class="banner-image-2-balm">
        <img src="@/assets/images/balm-drawing-02.png" alt="Mendelbalm" />
      </div>
      <div data-aos="fade-up" class="two-images-beer">
        <div class="col1-image">
          <img src="@/assets/images/balm-label.gif" alt="Mendelbalm" />
        </div>
        <div data-aos="fade-up" class="col1-image">
          <img src="@/assets/images/mendalbalm-sketch.png" alt="Mendelbalm" />
        </div>
      </div>

      <div data-aos="fade-up" class="banner-image-2-balm">
        <img src="@/assets/images/facebook_image_3.jpg" alt="Mendelbalm" />
        <!-- <h1>Jusy play<br />around<br />with colors!</h1> -->
      </div>
      <div data-aos="fade-up" class="banner-image-beer-col3">
        <img src="@/assets/images/instagram_image_1.jpg" alt="Mendelbalm" />
        <img src="@/assets/images/instagram_image_2.jpg" alt="Mendelbalm" />
        <img src="@/assets/images/instagram_image_3.jpg" alt="Mendelbalm" />
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
