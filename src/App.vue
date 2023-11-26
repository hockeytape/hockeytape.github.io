<template>
  <v-app>
    <v-main>
      <AppBar/>
      <Footer />
      <HelloWorld />
      <!-- <AnimatedHeader /> -->
    </v-main>
  </v-app>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import AppBar from '@/components/AppBar.vue'
  import Footer from '@/components/Footer.vue'
  import AnimatedHeader from './components/AnimatedHeader.vue';
</script>

<style>
body {
  background-color: #020101;
}
</style>
