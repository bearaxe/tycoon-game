<template>
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
</template>

<script>
import KProgress from 'k-progress';

export default {
  components: {
    KProgress,
  },

  props: {
    buy: {
      type: Function,
      required: true,
    },
    collect: {
      type: Function,
      required: true,
    },
    collectPercentage: {
      type: Number,
      required: true,
    },
    owned: {
      type: Number,
      required: true
    }
  }
}
</script>