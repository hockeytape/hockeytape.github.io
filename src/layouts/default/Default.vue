<template>
  <v-app>
    <default-bar />

    <default-view />
    <FooterBar style="flex: 0"></FooterBar>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import FooterBar from './Footer.vue'
</script>
