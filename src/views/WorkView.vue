<template>
  <div class="work">
    <div class="work-card">
      <!--list starts-->

      <!-- FANSHAWE MAP -->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/FanshaweMap">
          <img src="@/assets/images/map-main.png" alt="fanshawe map" />
          <div class="card-hover"><p>Fanshawe College Map</p></div></router-link
        >
      </div>

      <!-- APOPO -->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/ApopoCam">
          <img src="@/assets/images/apopo-1.png" alt="Apopo" />
          <div class="card-hover"><p>APOPO CAMPAIGN</p></div></router-link
        >
      </div>

      <!-- 3D BEER -->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/CutexBottle">
          <img src="@/assets/images/beer-11.png" alt="Beer bottle" />
          <div class="card-hover"><p>CUTEX 3D BEER BOTTLE</p></div></router-link
        >
      </div>

      <!--SPORTS VIS -->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/SportVis">
          <img src="@/assets/images/hud-05.png" alt="hud-05.png" />
          <div class="card-hover"><p>SPORTS VIS</p></div></router-link
        >
      </div>

      <!--Mendelbalm -->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/Mendelbalm">
          <img src="@/assets/images/mendelbalm_logo.png" alt="" />
          <div class="card-hover"><p>Mendelbalm</p></div></router-link
        >
      </div>

      <!--Chatapp -->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/ChatApp">
          <img src="@/assets/images/chat-3.png" alt="" />
          <div class="card-hover"><p>Chat App</p></div></router-link
        >
      </div>

      <!--HELVETICA-->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/HelveticaView">
          <img src="@/assets/images/poster-main.png" alt="" />
          <div class="card-hover"><p>Helvetica</p></div></router-link
        >
      </div>
      <!--MusicMixer--->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/MusicMixer">
          <img src="@/assets/images/movingtitle.gif" alt="" />
          <div class="card-hover"><p>MusicMixer</p></div></router-link
        >
      </div>
      <!--BudweiserBeer-->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/BudweiserBeer">
          <img src="@/assets/images/budweiser-2.png" alt="" />
          <div class="card-hover"><p>Budweiser</p></div></router-link
        >
      </div>

      <!--BakeryShop-->
      <div data-aos="fade-up" class="work-card-list">
        <router-link to="/portfolio/BakeryShop">
          <img src="@/assets/images/fanshawe-Map.jpg" alt="" />
          <div class="card-hover">
            <p>International Bakery</p>
          </div></router-link
        >
      </div>
    </div>

    <div data-aos="fade-up" class="outline-btn">
      <router-link to="/">Back to main </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkView",
};
</script>

<style lang="scss">
@import "@/assets/sass/_work.scss";
</style>
