<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Music Mixer Player</h1></div>
    <div class="pf-image-banner-apopo">
      <img src="@/assets/images/music-4.png" alt="poster" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>Music Player Application</p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>
          Designer/Developer
          <a href="https://github.com/YeonjuKim05">Yeonju Kim</a>
        </p>
      </div>
      <div class="pf-col">
        <h5>Timeline</h5>
        <p>Jan — Apr 2021</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div class="info-text">
        <h1>
          Using the drag-and-drop function, you can drag the block to
          automatically play the song and have fun visually. Look for a
          harmonious beat.
        </h1>
      </div>
      <button class="outline-btn width-wide" @click="music()">
        View project
      </button>
      <div class="two-images">
        <div class="col1-image">
          <img src="@/assets/images/movingtitle2.gif" alt="movingtitle" />
        </div>
        <div class="col1-image">
          <img src="@/assets/images/music-3.png" alt="movingtitle" />
        </div>
      </div>
      <div class="banner-image-music">
        <div style="padding: 53.75% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/695444108?h=7ad7b27473&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="Lego Music Mixer PlayGame - Chrome 2022-04-04 02-05-04.mp4"
          ></iframe>
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
      this.$router.push("/HelveticaView");
    },
    music() {
      window.open("https://github.com/YeonjuKim05/Kim_Y_MusicMixer.git");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/_portfolio.scss";
</style>
