<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo-white.gif"
      /></router-link>
    </div>
    <nav>
      <li><router-link to="/">ABOUT</router-link></li>
      <li><router-link to="/WorkView">WORK</router-link></li>
      <li><router-link to="/ContactView">CONTACT</router-link></li>
      <li><a href="@/assets/images/resume.pdf">RESUME</a></li>
    </nav>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/_nav.scss";
</style>
