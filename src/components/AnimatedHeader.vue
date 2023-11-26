<template >
<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
        <h2 class="text-body-2  mb-n0 ">ALIENS ON ICE EP</h2>
    </div>
  </div>
</div>
</template>
    
    <script lang="ts" setup>
    import { gsap } from "gsap";

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(".title", 30, { backgroundPosition: "-960px 0" });
    </script>
    
    
    <style scoped>
      @import '../fonts/custom-font.css';
  .custom-font {
    font-family: 'CustomFont', sans-serif;
    font-size: 1.2em;
    letter-spacing: 0.3em;
    /* Add other styling as needed */
  }
@keyframes lights {
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(27, 100%, 50%, 0.2),
      0 0 0.125em hsla(29, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(212, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(234, 100%, 60%, 0);
  }
  
  30% { 
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(39, 100%, 50%, 0.5),
      0 0 0.125em hsla(32, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  40% { 
    color: hsl(230, 100%, 95%);
    text-shadow:
      0 0 1em hsla(39, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }
  
  70% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(39, 100%, 55%, 0.5),
      0 0 0.125em hsla(184, 100%, 55%, 0.5),
      0.5em -0.125em 0.25em hsla(226, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 54%, 0.4);
  }
  
  100% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(180, 4%, 36%, 0.2),
      0 0 0.125em hsl(187, 76%, 45%),
      1em -0.125em 0.5em hsla(239, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
}


h2 {
  margin: auto;
  /* font-size: 3.5rem; */
  /* font-weight: 300; */
  animation: lights 5s 750ms linear infinite;
  /* font-family: 'CustomFont', sans-serif; */

}
</style>
