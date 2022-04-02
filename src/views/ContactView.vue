<template>
  <div class="contact">
    <div class="contact-wrapper">
      <h1>Thank you for visiting!</h1>
      <div class="links">
        <button class="outline-btn width-wide" @click="portfoliopage()">
          View project
        </button>
        <button class="outline-btn width-wide" @click="linkedin()">
          LinkedIn
        </button>
        <button class="outline-btn width-wide">
          <a href="mailto:kyeonjoo05@gmail.com">Email</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  methods: {
    portfoliopage() {
      this.$router.push("/WorkView");
    },
    linkedin() {
      window.open("https://www.linkedin.com/in/yeonjukim05");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/_contact.scss";
</style>
