<template>
  <div id="app">
    <div class="home">
      <div class="mainText">
        <h1>
          Hello, my name is
          <span class="h1-2">Yeonju Kim</span>
          <br />
          My main interests include
          <span class="h1-2">UX/UI designer</span>,<br />
          <span class="h1-2">Web development</span>, and
          <span class="h1-2">Graphic design</span>.<br />
          I am willing to take on challenges in any project<br />
          which makes me grow up! I always welcome new <br />experiences and
          share diverse perspectives.
        </h1>
      </div>

      <div class="profile">
        <div class="profile-img">
          <!-- <img src="" alt="profile-image" /> -->
        </div>

        <div class="profile-text">
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
              Graphic Designer at Design Agency in Seoul
            </p>
          </div>

          <div class="col-1">
            <p class="profile-year">2016-2018</p>
            <p class="profile-degree">Graphic Designer</p>
            <p class="profile-program">
              Graphic Designer at Video Production Agency in Seoul
            </p>
          </div>

          <div class="col-1">
            <p class="profile-year">2020-2022</p>
            <p class="profile-degree">Diploma of Education</p>
            <p class="profile-program">
              Interactive Media Design at Fanshawe in Canada
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss">
@import "@/assets/sass/_home.scss";
</style>
