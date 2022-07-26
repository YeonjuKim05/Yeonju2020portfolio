<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Chat Application</h1></div>
    <div data-aos="fade-up" class="pf-image-banner-chat">
      <img src="@/assets/images/chat-banner.png" alt="chatapp" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>Chat Application</p>
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
        <p>Jan — Mar 2022</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text">
        <h1>
          The chat app allows you to freely communicate with someone by your
          name or anonymously, and you can check who has accessed the screen.
        </h1>
      </div>
      <div class="links">
        <button class="outline-btn width-wide" @click="chatapp()">
          View project
        </button>
      </div>
      <!-- <div class="two-images">
        <div class="col1-image"></div>
        <div class="col1-image"></div>
      </div> -->
      <!-- <div class="banner-image"></div> -->
      <!-- <div class="banner-image-2"></div> -->
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatApp",
  methods: {
    portfoliopage() {
      this.$router.push("/WorkView");
    },
    chatapp() {
      window.open("https://github.com/YeonjuKim05/ChatApp_VueCli_Yeonju_K.git");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/_portfolio.scss";
</style>
