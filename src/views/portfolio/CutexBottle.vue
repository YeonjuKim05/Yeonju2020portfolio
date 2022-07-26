<template>
  <div class="portfolio">
    <div class="pf-title">
      <h1>CUTE'X Beer Website</h1>
    </div>
    <div data-aos="fade-up" class="pf-image-banner">
      <img src="@/assets/images/beer-main.jpg" alt="beer" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>3D Beer bottle</p>
        <p>Responsive Website</p>
        <p>
          <a
            href="https://https://github.com/YeonjuKim05/Kim_Y_FIP-2021.git"
            target="_blank"
            >Code link</a
          >
        </p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>
          Designer
          <a href="https://github.com/YeonjuKim05" target="_blank"
            >Yeonju Kim</a
          >
        </p>
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
      <div class="two-images" data-aos="fade-up">
        <div class="info-text-3" data-aos="fade-up">
          <h1>
            This project required mixing two different brands. I brought the
            nail brand Cutex to the beer name and the beer brand Tetley's to the
            design concept.
          </h1>
        </div>
        <div class="col1-image-3" data-aos="fade-up">
          <div
            class="banner-image-beer-2"
            data-aos="fade-up"
            data-aos-delay="100"
            style="margin: 40px 0 0 0"
          >
            <img src="@/assets/images/logo-mixup.gif" alt="beer" />
          </div>
        </div>
      </div>

      <div
        class="banner-image-beer-3"
        data-aos="fade-up"
        data-aos-delay="200"
        style="margin: 40px 0 0 0"
      >
        <img src="@/assets/images/beer-logo.png" alt="beer" />
      </div>

      <div
        class="banner-image-beer-2"
        data-aos="fade-up"
        data-aos-delay="400"
        style="margin: 40px 0 0 0"
      >
        <img src="@/assets/images/beer-3logo.png" alt="beer" />
      </div>
      <div data-aos="fade-up" class="info-text">
        <h1>
          Using Cinema 4D, the beer bottle was modeled with a glass texture and
          the animation effect was given to make it more lively.
        </h1>
      </div>
      <div
        class="banner-image-beer-2"
        data-aos="fade-up"
        data-aos-delay="400"
        style="margin: 40px 0 0 0; //border: 15px solid #f8f9f0//"
      >
        <img src="@/assets/images/beer-3.jpg" alt="beer" />
      </div>

      <div
        class="banner-image-beer-2"
        data-aos="fade-up"
        data-aos-delay="400"
        style="margin: 40px 0 0 0"
      >
        <img src="@/assets/images/beer2.gif" alt="beer" />
      </div>

      <div data-aos="fade-up" class="banner-image-2-beer">
        <img src="@/assets/images/beer1.gif" alt="beer" />
        <!-- <h1>Jusy play<br />around<br />with colors!</h1> -->
      </div>

      <div data-aos="fade-up" class="info-text" style="margin: 70px 0">
        <h1>
          Understanding the original design concept of Tetley's,<br />
          I designed posters to promote beer brand products.
        </h1>
      </div>

      <div data-aos="fade-up" class="banner-image-beer-col3">
        <img src="@/assets/images/beer-5.png" alt="beer" />
        <img src="@/assets/images/beer-6.png" alt="beer" />
        <img src="@/assets/images/beer-7.png" alt="beer" />
      </div>

      <div class="two-images" data-aos="fade-up">
        <div class="col1-image-2" data-aos="fade-up">
          <img src="@/assets/images/beer-8.gif" alt="beer" />
        </div>
        <div class="col1-image-2-1" data-aos="fade-up">
          <img src="@/assets/images/beer-logo-move.gif" alt="beer" />
        </div>
      </div>

      <div
        data-aos="fade-up"
        class="banner-image-beer-2"
        style="background-color: transparent"
      >
        <img src="@/assets/images/beer-10.png" alt="beer" />
      </div>
      <div data-aos="fade-up" class="banner-image-3-beer">
        <img src="@/assets/images/beer-mobile.png" alt="beer" />
      </div>
      <div data-aos="fade-up" class="banner-image-3-beer" style="margin: 0">
        <img src="@/assets/images/beer-guide.png" alt="beer" />
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
