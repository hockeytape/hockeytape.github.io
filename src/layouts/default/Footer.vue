<template>
    <div>
      <!-- Your page content goes here -->
  
      <!-- Footer -->
      <v-footer class="footer textGrey" color="#020201" flat>
        <div class="flexRow">
            <p class="custom-font">HT</p>
                <p>&copy; 2023 HOCKEYTAPE. All rights reserved.</p>
                
        </div>
        <div class="flexRow">

            Unauthorized use or duplication of any content without expressed and written permission is strictly prohibited.
     
    </div>

        <div class="flexRow">
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
        </div>


      </v-footer>
    </div>
  </template>
  
  <script setup>
  // Your setup script goes here
  </script>
  
  <style scoped>
  @import '../../fonts/custom-font.css';
  
  .footer {
    background-color: rgba(2, 2, 1, 0) !important; /* Make sure to adjust the RGB values */
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media only screen and (min-width: 800px) {
  .footer {
    flex-direction: row;
  }
}
  
  .custom-font {
    font-family: 'CustomFont', sans-serif;
    font-size: 1.2em;
    letter-spacing: 0.2em;
    /* Add other styling as needed */
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

  .textGrey {
    color: grey !important;
    font-size: 0.8em;
  }


  </style>
  