<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Sports Visualization HUD</h1></div>
    <div data-aos="fade-up" class="pf-image-banner-beer">
      <img src="@/assets/images/Boxing-11.jpg" alt="fanshawe map" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>HUD Motion Design</p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>
          Graphic Designer
          <a href="https://github.com/YeonjuKim05">Yeonju Kim</a>
        </p>
        <p>
          Motion designer
          <a href="https://github.com/lightbluecactus">Yan Kang</a>
        </p>
      </div>
      <div class="pf-col">
        <h5>My Contribution</h5>
        <p>Data illustration</p>
        <p>HUD interface design</p>
      </div>
      <div class="pf-col">
        <h5>Timeline</h5>
        <p>Feb — Mar 2022</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text">
        <h1>
          We performed a project to observe physical movements <br />occurring
          during boxing sports and visually show the resulting data.
        </h1>
      </div>

      <!-- <div class="banner-image"></div> -->
      <div class="banner-image-2-hud">
        <img src="@/assets/images/hud-long.png" alt="fanshawe hud-long.png" />
      </div>

      <div class="info-text alert">
        <h1>Please turn down the volume and play it!</h1>
      </div>

      <div style="padding: 75% 0 0 0; position: relative">
        <iframe
          src="https://player.vimeo.com/video/695395068?h=efdc464b41&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
          title="BoxingVis_main.mp4"
        ></iframe>
      </div>
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SportVis",
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
