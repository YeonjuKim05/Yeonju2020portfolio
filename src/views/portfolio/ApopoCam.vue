<template>
  <div class="portfolio">
    <div class="pf-title"><h1>Apopo Charity Campaign</h1></div>
    <div data-aos="fade-up" class="pf-image-banner-apopo">
      <img src="@/assets/images/apopopo_2.png" alt="apopo" />
    </div>
    <div class="pf-info">
      <div class="pf-col">
        <h5>Project Type</h5>
        <p>NGO APOPO Campaign<br />Responsive Website</p>
        <p>
          <a
            href="https://github.com/hburne11/Burnell_Kang_Kim_FIP.git"
            target="_blank"
            >Code link</a
          >
        </p>
      </div>
      <div class="pf-col">
        <h5>Contributor</h5>
        <p>
          UXUI/Front-end <a href="https://github.com/YeonjuKim05">Yeonju Kim</a>
        </p>
        <p>
          Motion design/Back-end
          <a href="https://github.com/lightbluecactus" target="_blank"
            >Yan Kang</a
          >
        </p>
        <p>
          Graphic Design
          <a href="https://github.com/hburne11" target="_blank"
            >Hayden Burnell</a
          >,
          <a href="https://github.com/YeonjuKim05" target="_blank"
            >Yeonju Kim</a
          >
        </p>
      </div>
      <div class="pf-col">
        <h5>My Contribution</h5>
        <p>Logo Design</p>
        <p>UX/UI Design</p>
        <p>Front-end/Vuejs, Sass, Js</p>
      </div>
      <div class="pf-col">
        <h5>Timeline</h5>
        <p>Feb — Apr 2022</p>
      </div>
    </div>

    <div class="pf-info-2">
      <div data-aos="fade-up" class="info-text" style="width: 70vw">
        <h1>
          Our team carried out a campaign project by an organization called
          APOPO of NGO. Apopo, which trains rats to detect landmines
          underground, is an organization that helps people in areas suffering
          from the aftereffects of the war. <br /><br />
          Our goal is to promote the organization to the world and encourage
          people to join the donation relay to help those still suffering from
          the war and speak out against it.
        </h1>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" class="guide-image">
        <div class="image-apopo">
          <div class="col1-image-apopo">
            <img src="@/assets/images/main_runningrat.gif" alt="apopo" />
          </div>
          <img src="@/assets/images/apopo_guide.png" alt="apopo" />
        </div>
      </div>

      <div class="link-btn">
        <p class="point-title" data-aos="fade-up" data-aos-delay="100">
          <a
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:b8f64fa3-ba89-39c3-8195-a5a4c506efe5"
            target="_blank"
            >First Presentation</a
          >
        </p>

        <p class="point-title" data-aos="fade-up" data-aos-delay="100">
          <a
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:74079afe-ca6c-3f52-890a-22c7ce99e61c"
            target="_blank"
            >Final Presentation</a
          >
        </p>
      </div>

      <div data-aos="fade-up" class="banner-image-apopo">
        <img src="@/assets/images/apopowireframe.png" alt="apopo" />
      </div>

      <div data-aos="fade-up" class="banner-image-apopo">
        <img src="@/assets/images/apopo-5.png" alt="apopo" />
      </div>

      <div data-aos="fade-up" class="info-text">
        <h1>
          Participants can check their tracks in real time and access the
          location of the person they followed. And participants are free to
          donate at any time.
        </h1>
      </div>

      <div data-aos="fade-up" class="banner-image-apopo">
        <img src="@/assets/images/mapui.gif" alt="apopo" />
      </div>

      <div data-aos="fade-up" data-aos-delay="100" class="banner-image-2-apopo">
        <img src="@/assets/images/apopo-04-03.png" alt="apopo" />
      </div>

      <div data-aos="fade-up" data-aos-delay="100" class="banner-image-2-apopo">
        <img src="@/assets/images/apopopo_1.png" alt="apopo" />
      </div>
    </div>
    <div class="button-to-work">
      <button class="outline-btn" @click="portfoliopage()">Other works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApopoCam",
  methods: {
    portfoliopage() {
      this.$router.push("/WorkView");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/_portfolio.scss";
</style>
