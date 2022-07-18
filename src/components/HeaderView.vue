<template>
  <div class="navbar" id="navigation">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo-white.gif"
      /></router-link>
    </div>
    <nav>
      <div class="wide-menu">
        <li><router-link to="/">ABOUT</router-link></li>
        <li><router-link to="/WorkView">WORK</router-link></li>
        <li><router-link to="/ContactView">CONTACT</router-link></li>
        <li>
          <a
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c143d7a7-bffe-3159-b345-3812de7617e6"
            >RESUME</a
          >
          >
        </li>
      </div>
      <div class="burgermenu">
        <li><router-link to="/">ABOUT</router-link></li>
        <li><router-link to="/WorkView">WORK</router-link></li>
        <li><router-link to="/ContactView">CONTACT</router-link></li>
        <li>
          <a
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c143d7a7-bffe-3159-b345-3812de7617e6"
            >RESUME</a
          >
        </li>
        <div class="personal-info">
          <p>437-255-9778</p>
          <p><a href="mailto:kyeonjoo05@gmail.com"></a>kyeonjoo05@gmail.net</p>
        </div>
      </div>

      <button class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/_nav.scss";
</style>
