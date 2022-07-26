<template>
  <div class="container-wrapper">
    <HeaderView></HeaderView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView";
import FooterView from "./components/FooterView";

export default {
  name: "App",
  components: { HeaderView, FooterView },
};
</script>
