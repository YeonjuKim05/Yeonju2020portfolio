<template>
  <div class="contact">
    <div class="contact-wrapper">
      <h1 data-aos="fade-up">Thank you for visiting!</h1>
      <div class="links">
        <button
          style="text-align: center"
          class="outline-btn width-wide"
          data-aos="fade-up"
          data-aos-delay="100"
          @click="portfoliopage()"
        >
          View Project
        </button>
        <button
          style="text-align: center"
          data-aos="fade-up"
          data-aos-delay="300"
          class="outline-btn width-wide"
          @click="linkedin()"
        >
          LinkedIn
        </button>
        <button
          style="text-align: center"
          data-aos="fade-up"
          data-aos-delay="500"
          class="outline-btn width-wide"
        >
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
