<template>
    <div>
      <!-- Your page content goes here -->
  
      <!-- Footer -->
      <v-footer class="footer textGrey gap zindex fadeIn" color="#020201" flat>
        <div class="flexRow2 ">
            <p class="custom-font">HT</p>
                <p>&copy; 2023 HOCKEYTAPE. All rights reserved.  Unauthorized use or duplication of any content without expressed and written permission is strictly prohibited.</p>
                
        </div>
        <div class="flexRow">

           
     
        </div>

        <div class="flexRow zindex groupLeft">
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

          <v-btn
            href="https://twitter.com/hockeytapemusic"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            class="prettyColor"
          >
            <v-icon
              icon="mdi-twitter"
              size="large"
              start
            />

            Twitter
          </v-btn>

          <v-btn
            href="https://www.instagram.com/hockeytapemusic/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            class="prettyColor"
          >
            <v-icon
              icon="mdi-instagram"
              size="large"
              start
            />

            Instagram
          </v-btn>

          <v-btn
            href="https://open.spotify.com/artist/4hcMrUBBLCuG6PwWoYfjff"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            class="prettyColor"
          >
            <v-icon
              icon="mdi-spotify"
              size="large"
              start
            />

            Spotify
          </v-btn>
        </div>


      </v-footer>
    </div>
  </template>
  
  <script lang="ts" setup>
  // Your setup script goes here
  </script>
  
  <style scoped>
  @import '../fonts/custom-font.css';
  
  
  .footer {
    background-color: rgba(2, 2, 1, 0) !important; /* Make sure to adjust the RGB values */
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .zindex {
    z-index: 5000;
  }


  @media only screen and (min-width: 1200px) {
  .footer {
    flex-direction: row;
  }
  
}

@media only screen and (max-width: 1250px) {
    .groupLeft {
    flex-direction: column  !important;
  }
  
}




.fadeIn {
  opacity: 0;
  animation: fadeIn 3s forwards;
  animation-delay: 2s;
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
  
  .custom-font {
    font-family: 'CustomFont', sans-serif;
    font-size: 1.2em;
    letter-spacing: 0.2em;
    /* Add other styling as needed */
  }

  .gap {
    gap: 5px;
  }
  
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 0.5em;
  }

  .centerStuff {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .spaceBetween {
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    align-items: center;
  }

  .flexRow {
    display: flex;
    gap: 1em;
    /* justify-content: center; */
    text-align: center;
  }

  .flexRow2 {
    display: flex;
    gap: 1em;
    /* justify-content: center; */
    text-align: center;
    align-items: center;
  }

  @media only screen and (max-width: 800px) {
  .flexRow2 {
    flex-direction: column;
  }
}

  .textGrey {
    color: grey !important;
    font-size: 0.8em;
  }

 

  </style>
  