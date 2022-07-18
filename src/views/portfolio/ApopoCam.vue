<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Apopo Campaign</h1></div>
    <div data-aos="fade-up" class="pf-image-banner-apopo">
      <img src="@/assets/images/Mockup-apopo-run.gif" alt="apopo" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>NGO APOPO Campaign<br />Website</p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>
          UXUI/Front-end <a href="https://github.com/YeonjuKim05">Yeonju Kim</a>
        </p>
        <p>
          Motion designer/Back-end
          <a href="https://github.com/lightbluecactus">Yan Kang</a>
        </p>
        <p>
          Graphic Designer
          <a href="https://github.com/hburne11">Hayden Burnell</a>
        </p>
      </div>
      <div class="pf-col">
        <h5>My Contribution</h5>
        <p>Logo Design</p>
        <p>UX/UI Design</p>
        <p>Front-end/Vuejs, Sass, Js</p>
      </div>
      <div class="pf-col">
        <h5>Timeline</h5>
        <p>Feb — Apr 2022</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text">
        <h1>
          Our team carried out a campaign project by an organization called
          APOPO of NGO. <br />Apopo, which trains rats to detect landmines
          underground, is an organization that <br />helps people in areas
          suffering from the aftereffects of the war. <br /><br />
          We organized a donation relay campaign to help the suffering and<br />
          oppose the war by donating to this organization.
        </h1>
      </div>
      <div data-aos="fade-up" data-aos-delay="100" class="two-images">
        <div class="col1-image-apopo">
          <img src="@/assets/images/apopo_1.gif" alt="apopo-mobile" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/apopo-grain-logo-2.gif" alt="apopo-logo" />
        </div>
      </div>
      <div data-aos="fade-up" class="banner-image-apopo">
        <img src="@/assets/images/apopo-5.png" alt="apopo" />
      </div>
      <div data-aos="fade-up" class="info-text">
        <h1>
          Participants can check their tracks in real time<br />
          and access the location of the person they followed. <br />
          And participants are free to donate at any time.
        </h1>
      </div>
      <div data-aos="fade-up" data-aos-delay="100" class="banner-image-2-apopo">
        <img src="@/assets/images/apopo-04-03.png" alt="fanshawe map" />
      </div>
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApopoCam",
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
