<template>
  <v-container class="fill-height app-container fadeIn">
    <v-responsive class="align-center text-center fill-height">

      <v-img class="imageHeight" :max-height="getImageHeight()" src="@/assets/art1.png" />

      <div class="py-2" />
      <!-- <div class="text-body-2 font-weight-bold mb-n1 ">Aliens On Ice EP</div> -->
      <AnimatedHeader />
      <div class="text-body-2 font-weight-light mb-n1 font-italic coolColor">Coming soon...</div>

      <div class="py-4" />

      <h1 class="text-h3  custom-font makeSmaller">HOCKEYTAPE</h1>
    
      

      <div class="py-3" />


      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <p>Enter the mysterious realm where icy wobbles cut through the silence. Join the movement and explore the depths of sound.</p>
    

        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">


        <v-col cols="auto">
          <v-btn
            href="https://soundcloud.com/hockeytape"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            class="prettyColor"
          >
            <v-icon
              icon="mdi-soundcloud"
              size="large"
              start
            />

            Soundcloud
          </v-btn>
      
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
.app-container {
  background-image: url('@/assets/art5.png'); 
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

.prettyColor {
  color: #F98057;
}

@media screen and (max-width: 600px) {
  .makeSmaller {
    font-size: 2em !important; /* Adjust the font size for small screens */
  }
}

.imageHeight {
  height: 400 !important;
}

@media screen and (min-width: 1260px) {
  .help {
    display: none;
  }
}

</style>