<template>
  <v-container class="fill-height app-container fadeIn">
    <v-responsive class="align-center text-center fill-height">

      <v-img class="imageHeight" :max-height="getImageHeight()" src="@/assets/art1.png" />

      <div class="py-2" />
      <!-- <div class="text-body-2 font-weight-bold mb-n1 ">Aliens On Ice EP</div> -->
      <AnimatedHeader />
      <div class="text-body-2 font-weight-light mb-n1 font-italic coolColor">Coming soon...</div>

      <div class="py-4" />

      <h1 class="hockeytapeHeader text-h3  custom-font makeSmaller">HOCKEYTAPE</h1>
    
      

      <div class="py-3" />


      <v-row class="d-flex align-center justify-center extraRoomBottom">
        <v-col cols="auto">
          <p class="text-body-2 font-weight-light mb-n1 font-italic prettyColor">Heavy dream bass for the bees and the trees...</p>
    

        </v-col>
      </v-row>
      
      <v-row class="d-flex align-center justify-center">
          <v-col class="soundCloudPlayer">
            <iframe class="soundCloudFrame"  width="90%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1807306176&color=%2319070f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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
            <v-icon
              icon="mdi-spotify"
              size="large"
              start
            />

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
            <v-icon
              icon="mdi-soundcloud"
              size="large"
              start
            />

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
            <v-icon
              icon="mdi-apple"
              size="large"
              start
            />

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
  import AnimatedHeader from '../components/AnimatedHeader.vue';
import { onMounted } from 'vue';
  import { ref } from 'vue';

const getImageHeight = () => {
  return window.innerWidth > 900 ? 450 : 300;
};
</script>


<style scoped>

@import '../fonts/custom-font.css';



.custom-font {
  letter-spacing: 0.1em !important;
font-family: 'CustomFont' !important;



/* Add other styling as needed */
}


.buttonWrapperVertical {
  display: flex;
  flex-direction: row;
}

.app-container {
  background-image: url('@/assets/art6.png'); 
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
  animation: fadeIn 3s forwards;
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
  color: #77FEF6;
}

/* Base colors */
.prettyColor {
  color: #F98057;
  transition: color 0.3s ease;
}

.appleMusic {
  color: #FF4E6B;
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

@media screen and (min-width: 824px) {
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

</style>