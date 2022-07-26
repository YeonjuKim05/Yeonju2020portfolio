<template>
  <div class="portfolio-home">
    <!-- <div class="title-box">
      <p class="point-title" data-aos="fade-up">Projects since 2021~</p>
    </div> -->
    <PortfolioView></PortfolioView>
  </div>
</template>

<script>
import PortfolioView from "../components/PortfolioView.vue";

export default {
  name: "WorkView",
  components: { PortfolioView },
};
</script>

<style lang="scss">
@import "@/assets/sass/_work.scss";
</style>
