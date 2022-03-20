<template>
  <div class="store lemonade-stand">
    <div class="title">
      Lemonade Stand
    </div>
    <div class="ui">
      <p class="owned">Owned: {{ owned }}</p>
      <KProgress
        class="progress"
        :percent="collectPercentage"
        :show-text="false"
      />
      <div class="collection">
        <button @click="collect">Collect</button>
      </div>
      <div class="buy">
        <button @click="buy">Buy</button>
      </div>
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