<template>
  <div class="store lemonade-stand">
    <div class="title">
      Lemonade Stand
    </div>
    <div class="ui">
      <div class="collection">
        <button @click="collect">Collect</button>
        {{ owned }}
        <KProgress
          :percent="collectPercentage"
          :show-text="false"
        />
      </div>
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