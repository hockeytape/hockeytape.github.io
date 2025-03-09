<template>
  <v-app-bar class="fadeIn appBar" flat color="transparent">
    <v-app-bar-title class="custom-font">
      <div class="wrapper">
        <v-img
          class="smallImage"
          :max-height="getImageHeight()"
          src="@/assets/logoWatermark192A37.png"
        />
        HKTP
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
const getImageHeight = () => {
  return window.innerWidth > 900 ? 150 : 100;
};
</script>

<style scoped>
.custom-font {
  font-family: 'CustomFont', sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.1em;
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 0.5em;
  color: #192A37;
}

.fadeIn {
  opacity: 0;
  animation: fadeIn 3s forwards;
  animation-delay: 1s;
}

.smallImage {
  max-height: 150px;
  max-width: 2em;
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

.appBar {
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
}


</style>
