<template>
  <div id="app">
    <HUD />
    <div class="stores">
      <LemonadeStand />
      <PetShop />
      <SuperMarket />
      <Theater />
      <Mall />
    </div>
  </div>
</template>

<script>
import HUD from './components/HUD.vue'
import LemonadeStand from './components/stores/LemonadeStand.vue'
import PetShop from './components/stores/PetShop.vue'
import SuperMarket from './components/stores/SuperMarket.vue'
import Theater from './components/stores/Theater.vue'
import Mall from './components/stores/Mall.vue'

export default {
  name: 'App',
  components: {
    HUD,
    LemonadeStand,
    PetShop,
    SuperMarket,
    Theater,
    Mall,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

 @import '@/assets/store.scss';
</style>
