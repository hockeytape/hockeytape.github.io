<template >
    <v-app-bar class="fadeIn" color=#020201 flat>
    
      <v-app-bar-title class="custom-font ">
  
        <div class="wrapper">
          <!-- <v-icon icon="mdi-hockey-sticks" /> -->
          <v-img
          class="smallImage"
          :max-height="getImageHeight()"
          src="@/assets/logoWatermark 3.png"
        />
          HOCKEYTAPE ‎  
        </div>
  
      </v-app-bar-title>
    </v-app-bar>
  
  </template>
  
  <script lang="ts" setup>
    //
  
    const getImageHeight = () => {
      return window.innerWidth > 900 ? 150 : 100;
};
  </script>
  
  
  <style scoped>
    @import '../fonts/custom-font.css';
  

    .custom-font {
    font-family: 'CustomFont', sans-serif;
    font-size: 1.2em;
    letter-spacing: 0.1em;
  
    /* Add other styling as needed */
  }
  
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 0.5em;
    color: #ffffff45;
  }

  .fadeIn {
  opacity: 0;
  animation: fadeIn 3s forwards;
  animation-delay: 1s;
}


.smallImage {
    max-height: 150px; /* Adjust this value as needed */
    max-width: 3em;
    width: 10%;
  }


@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
  
  
  
  </style>