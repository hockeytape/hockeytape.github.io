<template>
  <v-container class="fill-height app-container fadeIn">
    <v-responsive class="align-center text-center fill-height">
      <div class="dropContainer">
        <div class="helpme">
          <v-img
            class="imageHeight makeSmaller addPadding"
            :max-width="getImageHeight()"
            src="@/assets/backdropLogoDropShadow.png"
            position="absolute"
            cover
          />
        </div>

        <v-img
          class="fade imageHeight makeSmaller addPadding dropShadow"
          :max-width="getImageHeight()"
          src="@/assets/valencia.png"
        />
      </div>

      <div class="py-2" />
      <!-- <div class="text-body-2 font-weight-bold mb-n1 ">Aliens On Ice EP</div> -->
      <!-- <AnimatedHeader /> -->
      <!-- <div class="bigger font-weight-light mb-n1 font-italic coolColor ">
        Coming soon...
      </div> -->

      <div class="py-4" />

      <h1
        class="hockeytapeHeader custom-fontHeader makeSmaller colorLightOrange"
      >
        HOCKEYTAPE
      </h1>
      <!-- secret comment to test deploy script -->

      <div class="py-3" />

      <v-row class="d-flex align-center justify-center extraRoomBottom">
        <v-col cols="auto">
          <!-- <p class="text-body-2 font-weight-light mb-n1 font-italic prettyColor">Heavy dream bass for the bees and the trees...</p> -->
          <!-- <p
            class="hockeytapeHeader customFont5 warpText"
          >
            Don't you know about Hockeytape?
          </p> -->

          <p class="hockeytapeHeader customFont5 warpText">
            <span>D</span><span>o</span><span>n</span><span>'</span
            ><span>t</span> <span> </span><span>y</span><span>o</span
            ><span>u</span> <span> </span><span>k</span><span>n</span
            ><span>o</span><span>w</span> <span> </span><span>a</span
            ><span>b</span><span>o</span><span>u</span><span>t</span>
            <span> </span> <span>H</span><span>o</span><span>c</span
            ><span>k</span><span>e</span><span>y</span><span>t</span
            ><span>a</span><span>p</span><span>e</span><span>?</span>
          </p>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col class="soundCloudPlayer">
          <!-- <iframe
            class="soundCloudFrame"
            width="90%"
            height="150"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1807306176&color=%2319070f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe> -->
          <!-- <iframe
            class="max-width"
            width="75%"
            height="auto"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1979556068%3Fsecret_token%3Ds-H9QGtRDEKc8&color=%2319070f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe> -->
          <iframe
            class="max-width"
            width="75%"
            height="auto"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2152353423%3Fsecret_token%3Ds-vVAmD2KXV0k&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <div class="buttonWrapperVertical">
            <v-btn
              href="https://open.spotify.com/artist/4hcMrUBBLCuG6PwWoYfjff"
              min-width="164"
              rel="noopener noreferrer"
              target="_blank"
              variant="text"
              class="prettyColor2 addGap"
            >
              <v-icon icon="mdi-spotify" size="large" start />

              Spotify
            </v-btn>

            <v-btn
              href="https://soundcloud.com/hockeytape"
              min-width="164"
              rel="noopener noreferrer"
              target="_blank"
              variant="text"
              class="prettyColor addGap"
            >
              <v-icon icon="mdi-soundcloud" size="large" start />

              Soundcloud
            </v-btn>

            <v-btn
              href="https://music.apple.com/us/artist/hockeytape/1718487731"
              min-width="164"
              rel="noopener noreferrer"
              target="_blank"
              variant="text"
              class="appleMusic addGap"
            >
              <v-icon icon="mdi-apple" size="large" start />

              Apple Music
            </v-btn>
          </div>

          <div class="py-8" />
          <div class="py-11 help" />
          <div class="py-11 help" />
          <div class="py-10 help" />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import AnimatedHeader from "../components/AnimatedHeader.vue";
import { onMounted, ref } from "vue";

const getImageHeight = () => {
  return window.innerWidth > 900 ? 450 : 300;
};

const showBack = ref(true);

const showArt2 = ref(false);

onMounted(() => {
  // Delay showing art2.png by 5 seconds
  setTimeout(() => {
    showArt2.value = true;
  }, 8000); // 5000ms = 5 seconds
});
</script>

<style scoped>
@import "../fonts/custom-font.css";

.custom-font {
  font-family: "CustomFont", sans-serif;
  font-size: 1.2em;
}

.customFont2 {
  font-family: "CustomFont2", sans-serif;
  font-size: 1.8em;
}

.customFont3 {
  font-family: "CustomFont3", sans-serif;
  font-size: 1.8em;
}

.customFont4 {
  font-family: "CustomFont4", sans-serif;
  font-size: 1.8em;
}

.customFont5 {
  font-family: "CustomFont5", sans-serif;
  font-size: 1.8em;
}

.customFont5header {
  font-family: "CustomFont5", sans-serif;
  font-size: 0.2em;
}

.custom-fontHeader {
  font-family: "CustomFont", sans-serif;
  font-size: 3em;
}

.custom-fontHeader2 {
  font-family: "CustomFont6", sans-serif;
  font-size: 3em;
}

/* REMOVE BELOW IF YOU DON"T WANT BG TO COVER WHOLE SCREEN */
.v-container {
  max-width: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

.makeSmaller {
  margin: 20px;
}

.addPadding {
  margin-top: 64px !important;
}

.dropShadow {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Adds shadow */
  border-radius: 8px; /* Optional: adds rounded corners to the image */
}

.dropContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
}

.helpme {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.custom-font {
  font-family: "CustomFont" !important;
}

.custom-font2 {
  font-family: "CustomFont2" !important;
}

.buttonWrapperVertical {
  display: flex;
  flex-direction: row;
}

.app-container {
  background-image: url("@/assets/treeBackground8.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.fadeIn {
  opacity: 0;
  animation: fadeIn 4s forwards;
}

.fade {
  opacity: 0;
  animation: fadeIn 6s forwards;
  animation-delay: 4s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.coolColor {
  /* color: #77fef6; */
  color: #fec477;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 2.7);
}

/* Base colors */
.prettyColor {
  color: #f98057;
  transition: color 0.3s ease;
}

.appleMusic {
  color: #ff4e6b;
  transition: color 0.3s ease;
}

.extraRoomBottom {
  margin-bottom: 0em;
}

.subText {
  color: #ffffff45;
}

.prettyColor2 {
  color: #5cf957;
  transition: color 0.3s ease;
}

/* Hover effect */
.prettyColor:hover {
  color: #e76f48; /* Slightly darker shade of #F98057 */
  background-color: #8739234d;
}

.prettyColor2:hover {
  color: #4dbd4a; /* Slightly darker shade of #5cf957 */
  background-color: #1e5e1c51;
}

.appleMusic:hover {
  color: #c73d54; /* Slightly darker shade of #5cf957 */
  background-color: #7a223167;
}

/* Active (click) effect */
.prettyColor:active {
  color: #d96443; /* Slightly different shade when clicked */
}

.prettyColor2:active {
  color: #44a03f; /* Slightly different shade when clicked */
}

@media screen and (max-width: 600px) {
  .makeSmaller {
    font-size: 2em !important; /* Adjust the font size for small screens */
  }

  .buttonWrapperVertical {
    display: flex;
    flex-direction: column;
    gap: 10;
  }

  .addGap {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .py-11 {
    display: none;
  }
}

.imageHeight {
  height: 400 !important;
}

@media screen and (min-width: 600px) {
  .py-11 {
    display: none;
  }
}

@media screen and (min-width: 1250px) {
  .py-8 {
    display: none;
  }
}

.soundCloudPlayer {
  display: flex;
  justify-content: center;
  /* border-radius: 10000px;
  background-color: red; */
}

.soundCloudFrame {
  border-radius: 1px;
  max-width: 600px;
}

.hockeytapeHeader {
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 1.7);
  /* text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease; /* Adjust the duration to make it slower */
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.max-width {
  max-width: 800px;
}

.bigger {
  font-size: 1.5em;
}

.colorLightOrange {
  color: #ffefe2;
}

.warpText span {
  display: inline-block;
  animation: waveBump 5s ease-in-out infinite;
}

.warpText span:nth-child(odd) {
  animation-delay: 0s;
}

.warpText span:nth-child(even) {
  animation-delay: 0.2s;
}

@keyframes waveBump {
  0%   { transform: translateY(0) scaleY(1); }
  12.5% { transform: translateY(-1.5px) scaleY(1.01); }
  25%  { transform: translateY(-3px) scaleY(1.02); }
  37.5% { transform: translateY(-1.5px) scaleY(1.01); }
  50%  { transform: translateY(0) scaleY(1); }
  62.5% { transform: translateY(1.5px) scaleY(0.99); }
  75%  { transform: translateY(3px) scaleY(0.98); }
  87.5% { transform: translateY(1.5px) scaleY(0.99); }
  100% { transform: translateY(0) scaleY(1); }
}


.warpText {
  display: inline-block;
  animation: warpLiquid 40s ease-in-out infinite; /* slower, smooth movement */
  transform-origin: center;
  will-change: transform;
}

@keyframes warpLiquid {
  0%   { transform: translateY(0); }
  10%  { transform: translateY(-0.3px); }
  20%  { transform: translateY(0.3px); }
  30%  { transform: translateY(-0.2px); }
  40%  { transform: translateY(0.2px); }
  50%  { transform: translateY(-0.3px); }
  60%  { transform: translateY(0.3px); }
  70%  { transform: translateY(-0.2px); }
  80%  { transform: translateY(0.2px); }
  90%  { transform: translateY(-0.3px); }
  100% { transform: translateY(0); }
}



</style>
