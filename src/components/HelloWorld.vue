<template>
  <v-container class="fill-height app-container fadeIn">
    <v-responsive class="align-center text-center fill-height">
      <div class="dropContainer">
        <div 
        
        class="helpme">
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
            src="@/assets/art2.png"
          />
      </div>

      <div class="py-2" />
      <!-- <div class="text-body-2 font-weight-bold mb-n1 ">Aliens On Ice EP</div> -->
      <AnimatedHeader />
      <div class="text-body-2 font-weight-light mb-n1 font-italic coolColor">
        Coming soon...
      </div>

      <div class="py-4" />

      <h1 class="hockeytapeHeader text-h3 custom-font makeSmaller">
        HOCKEYTAPE
      </h1>
      <!-- secret comment to test deploy script -->

      <div class="py-3" />

      <v-row class="d-flex align-center justify-center extraRoomBottom">
        <v-col cols="auto">
          <!-- <p class="text-body-2 font-weight-light mb-n1 font-italic prettyColor">Heavy dream bass for the bees and the trees...</p> -->
          <p
            class="text-body-2 font-weight-light mb-n1 font-italic prettyColor"
          >
            Don't you know about Hockeytape?
          </p>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col class="soundCloudPlayer">
          <iframe
            class="soundCloudFrame"
            width="90%"
            height="150"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1807306176&color=%2319070f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
  }, 10000); // 5000ms = 5 seconds
});
</script>

<style scoped>
@import "../fonts/custom-font.css";

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
  letter-spacing: 0.1em !important;
  font-family: "CustomFont" !important;

  /* Add other styling as needed */
}

.buttonWrapperVertical {
  display: flex;
  flex-direction: row;
}

.app-container {
  background-image: url("@/assets/treeBackground.png");
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
  animation: fadeIn 7s forwards;
  animation-delay: 5s;
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
  color: #77fef6;
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

.hockeytapeHeader {
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
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 2.7);
  /* text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease; /* Adjust the duration to make it slower */
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
