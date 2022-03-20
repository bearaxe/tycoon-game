<template>
  <div id="app">
    <HUD />
    <div class="stores">
      <LemonadeStand />
      <PetShop />
      <SuperMarket />
    </div>
  </div>
</template>

<script>
import HUD from './components/HUD.vue'
import LemonadeStand from './components/LemonadeStand.vue'
import PetShop from './components/PetShop.vue'
import SuperMarket from './components/SuperMarket.vue'

export default {
  name: 'App',
  components: {
    HUD,
    LemonadeStand,
    PetShop,
    SuperMarket,
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
