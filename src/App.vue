<template>
  <div id="app">
    <HUD />
    <div class="stores">
      <LemonadeStand />
      <LemonadeStand />
      <LemonadeStand />
      <LemonadeStand />
      <LemonadeStand />
      <LemonadeStand />
      <LemonadeStand />
      <LemonadeStand />
    </div>
  </div>
</template>

<script>
import HUD from './components/HUD.vue'
import LemonadeStand from './components/LemonadeStand.vue'

export default {
  name: 'App',
  components: {
    HUD,
    LemonadeStand
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
