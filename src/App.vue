<template>
  <v-app>
    <!-- removed v-main because of background image overlap -->
    <!-- <v-main> -->
      <AppBar/>
      <Footer />
      <HelloWorld />
      <!-- <AnimatedHeader /> -->
    <!-- </v-main> -->
  </v-app>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import AppBar from '@/components/AppBar.vue'
  import Footer from '@/components/Footer.vue'
  import AnimatedHeader from './components/AnimatedHeader.vue';
  import { onMounted } from "vue";

onMounted(() => {
  console.log(
  `%c
      :::    :::  ::::::::   ::::::::  :::    ::: :::::::::: :::   ::: ::::::::::: :::     :::::::::  :::::::::: 
     :+:    :+: :+:    :+: :+:    :+: :+:   :+:  :+:        :+:   :+:     :+:   :+: :+:   :+:    :+: :+:         
    +:+    +:+ +:+    +:+ +:+        +:+  +:+   +:+         +:+ +:+      +:+  +:+   +:+  +:+    +:+ +:+          
   +#++:++#++ +#+    +:+ +#+        +#++:++    +#++:++#     +#++:       +#+ +#++:++#++: +#++:++#+  +#++:++#      
  +#+    +#+ +#+    +#+ +#+        +#+  +#+   +#+           +#+        +#+ +#+     +#+ +#+        +#+            
 #+#    #+# #+#    #+# #+#    #+# #+#   #+#  #+#           #+#        #+# #+#     #+# #+#        #+#             
###    ###  ########   ########  ###    ### ##########    ###        ### ###     ### ###        ##########       
                  ┏┳┓╻ ╻┏━┓╻┏━╸   ┏━╸┏━┓┏━┓   ┏━┓┏━┓╻ ╻┏┓╻╺┳┓   ┏━┓╻ ╻┏━┓╺┳╸┏━╸┏┳┓┏━┓
                  ┃┃┃┃ ┃┗━┓┃┃     ┣╸ ┃ ┃┣┳┛   ┗━┓┃ ┃┃ ┃┃┗┫ ┃┃   ┗━┓┗┳┛┗━┓ ┃ ┣╸ ┃┃┃┗━┓
                  ╹ ╹┗━┛┗━┛╹┗━╸   ╹  ┗━┛╹┗╸   ┗━┛┗━┛┗━┛╹ ╹╺┻┛   ┗━┛ ╹ ┗━┛ ╹ ┗━╸╹ ╹┗━┛
  `,
  "color: #ff5500; font-size: 12px; font-family: monospace; font-weight: bold;"
);

});
</script>

<style>
body {
  background-color: #020101;
}


</style>

<!-- Current Live Site -->