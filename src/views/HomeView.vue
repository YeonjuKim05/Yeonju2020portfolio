<template>
  <div id="app">
    <div class="home">
      <div class="mainText" data-aos-delay="100">
        <h1 data-aos="fade-up">
          Hello, my name is
          <span class="h1-2" data-aos="fade-up" data-aos-delay="300"
            >Yeonju Kim</span
          >
          <br />
          My main interests include
          <span class="h1-2" data-aos="fade-up" data-aos-delay="300">UX/UI</span
          >,
          <span class="h1-2" data-aos="fade-up" data-aos-delay="400"
            >Web Development</span
          >, and
          <span class="h1-2" data-aos="fade-up" data-aos-delay="500"
            >Graphic Design</span
          >. I am willing to take on challenges in any project which makes me
          grow up. I always welcome new experiences and diverse perspectives.
        </h1>
      </div>

      <div class="profile">
        <div data-aos="fade-up" class="profile-img">
          <img src="@/assets/images/yeonju.jpg" alt="profile-image" />
        </div>

        <div class="profile-text">
          <div class="title-box">
            <p class="point-title" data-aos="fade-up" data-aos-delay="100">
              Education and Work experiences
            </p>
          </div>
          <div class="col-1">
            <p class="profile-year">2013-2015</p>
            <p class="profile-degree">Diploma of Education</p>
            <p class="profile-program">
              Visual Communication Design in South Korea
            </p>
          </div>

          <div class="col-1">
            <p class="profile-year">2015-2015</p>
            <p class="profile-degree">Internship</p>
            <p class="profile-program">
              Graphic Designer at Design Agency in Seoul, South Korea
            </p>
          </div>

          <div class="col-1">
            <p class="profile-year">2016-2018</p>
            <p class="profile-degree">Graphic Designer</p>
            <p class="profile-program">
              Graphic Designer at Video Production Agency in Seoul, South Korea
            </p>
          </div>

          <div class="col-1">
            <p class="profile-year">2020-2022</p>
            <p class="profile-degree">Diploma of Education</p>
            <p class="profile-program">
              Interactive media design at Fanshawe in Canada
            </p>
          </div>
        </div>
      </div>

      <div class="portfolio-home">
        <!-- <div class="title-box">
          <p class="point-title" data-aos="fade-up">Projects since 2021~</p>
        </div> -->

        <div data-aos="fade-up" class="mainText">
          <h1>
            I am a big fan of
            <span class="h1-2" data-aos="fade-up" data-aos-delay="200"
              >minimalistic</span
            >
            and
            <span class="h1-2" data-aos="fade-up" data-aos-delay="400"
              >aesthetic</span
            >
            designs.
            <br />

            My main aim is to improve my skills by working hard and trying new
            things myself in the real world.
          </h1>
        </div>

        <PortfolioView></PortfolioView>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioView from "../components/PortfolioView.vue";

export default {
  name: "HomeView",
  components: { PortfolioView },
};
</script>

<style lang="scss">
@import "@/assets/sass/_home.scss";
</style>
