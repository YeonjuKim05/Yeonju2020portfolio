<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Hevetica Poster</h1></div>
    <div data-aos="fade-up" class="pf-image-banner">
      <img src="@/assets/images/poster.png" alt="poster" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>Helvetica Poster Design</p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>Designer <a href="https://github.com/YeonjuKim05">Yeonju Kim</a></p>
      </div>
      <div class="pf-col">
        <h5>Timeline</h5>
        <p>Mar — Jun 2020</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text" style="width: 70vw">
        <h1>
          After watching the documentary of Helvetica, I learned the birth of
          the font and the power of this font. As shown in the poster,
          Helvetica, which has a very clear legibility, has been used and loved
          steadily for more than 60 years.
        </h1>
      </div>

      <div data-aos="fade-up" class="banner-image-beer-col3">
        <img src="@/assets/images/hel-poster.jpg" alt="poster" />
        <img src="@/assets/images/hel-poster2.jpg" alt="poster" />
        <img src="@/assets/images/hel-poster3.jpg" alt="poster" />
      </div>

      <!-- <div class="banner-image"></div> -->
      <div class="banner-image-2-balm">
        <img src="@/assets/images/poster-3.png" alt="poster" />
      </div>

      <div class="two-images">
        <div class="col1-image">
          <img src="@/assets/images/poster-3.gif" alt="poster" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/poster-2.gif" alt="poster" />
        </div>
      </div>
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelveticaView",
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
