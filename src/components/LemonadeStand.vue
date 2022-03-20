<template>
  <div class="store lemonade-stand">
    <div class="title">
      Lemonade Stand
    </div>
    <div class="ui">
      <button @click="collect">Collect</button>
      {{ owned }}
      <button @click="buy">Buy</button>
    </div>
  </div>
</template>

<script>
import Store from './Store';
export default {
  type: 'lemonade-stand',
  extends: Store,
}
</script>