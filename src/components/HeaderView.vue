<template>
  <div class="navbar">
    <div class="logo"><img src="@/assets/images/logo-white.gif" /></div>
    <nav>
      <li><router-link to="/">ABOUT</router-link></li>
      <li><router-link to="/about">WORK</router-link></li>
      <li><router-link to="/about">CONTACT</router-link></li>
      <li><router-link to="/about">RESUME</router-link></li>
    </nav>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/_nav.scss";
</style>
