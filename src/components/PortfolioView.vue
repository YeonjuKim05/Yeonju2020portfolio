<template>
  <div class="work">
    <div class="work-card" style="margin-top: 40px">
      <!--list starts-->

      <!-- APOPO -->
      <div data-aos="fade-up" class="work-card-list" data-aos-delay="100">
        <router-link to="/portfolio/ApopoCam">
          <img src="@/assets/images/apopo-1.png" alt="Apopo" />
          <div class="card-hover">
            <p>APOPO CAMPAIGN</p>
            <p class="design-type">App Design</p>
          </div></router-link
        >
      </div>

      <!-- 3D BEER -->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/CutexBottle">
          <img src="@/assets/images/beer-11.png" alt="Beerbottle" />
          <div class="card-hover">
            <p>CUTEX 3D BEER BOTTLE</p>
            <p class="design-type">3D/Web Design</p>
          </div></router-link
        >
      </div>

      <!--BakeryShop-->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/BakeryShop">
          <img src="@/assets/images/bakery_logo.png" alt="logo" />
          <div class="card-hover">
            <p>International Bakery</p>
            <p class="design-type">Branding/Web Design</p>
          </div></router-link
        >
      </div>
      <!--BudweiserBeer-->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/BudweiserBeer">
          <img src="@/assets/images/budweiser-2.png" alt="budweiser" />
          <div class="card-hover">
            <p>Budweiser</p>
            <p class="design-type">Web Design</p>
          </div></router-link
        >
      </div>
      <!--SPORTS VIS -->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/SportVis">
          <img src="@/assets/images/hud-05.png" alt="sportvis" />
          <div class="card-hover">
            <p>SPORTS VIS</p>
            <p class="design-type">Graphic HUD Design</p>
          </div></router-link
        >
      </div>

      <!--Chatapp -->
      <!-- <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/ChatApp">
          <img src="@/assets/images/chat-3.png" alt="" />
          <div class="card-hover">
            <p>Chat App</p>
            <p class="design-type">App design/development</p>
          </div></router-link
        >
      </div> -->

      <!--MusicMixer--->
      <!-- <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/MusicMixer">
          <img src="@/assets/images/movingtitle.gif" alt="" />
          <div class="card-hover">
            <p>MusicMixer</p>
            <p class="design-type">App Design/development</p>
          </div></router-link
        >
      </div> -->

      <!--Mendelbalm -->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/Mendelbalm">
          <img src="@/assets/images/mendelbalm_logo.png" alt="Mendelbalm" />
          <div class="card-hover">
            <p>Mendelbalm</p>
            <p class="design-type">Branding Packaging Design</p>
          </div></router-link
        >
      </div>

      <!-- FANSHAWE MAP -->
      <div data-aos="fade-up" data-aos-delay="200" class="work-card-list">
        <router-link to="/portfolio/FanshaweMap">
          <img src="@/assets/images/map-main.png" alt="fanshawe map" />
          <div class="card-hover">
            <p>Fanshawe College Map</p>
            <p class="design-type">Graphic Design</p>
          </div>
        </router-link>
      </div>

      <!--HELVETICA-->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/HelveticaView">
          <img src="@/assets/images/poster-main.png" alt="Helvetica" />
          <div class="card-hover">
            <p>Helvetica</p>
            <p class="design-type">Poster Design</p>
          </div></router-link
        >
      </div>
    </div>

    <div class="button-to-work" data-aos="fade-up">
      <button class="outline-btn" @click="mainpage()">Back to main</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    mainpage() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/_work.scss";
</style>
