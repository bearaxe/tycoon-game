<template>
  <div class="ui">
    <p class="owned">Owned: {{ this.$parent.owned }}</p>
    <p class="price">Price: {{ price }}</p>
    <p class="return">Return: {{ revenue }}</p>
    <KProgress
      class="progress"
      :percent="this.$parent.collectPercentage"
      :show-text="false"
    />
    <div class="collection">
      <button @click="this.$parent.collect">Collect</button>
    </div>
    <div class="buy">
      <button @click="this.$parent.buy">Buy</button>
    </div>
  </div>
</template>

<script>
import KProgress from 'k-progress';

export default {
  components: {
    KProgress,
  },

  computed: {
    revenue() {
      // a trick so it shows either total revenue of all stores or projected revenue of 1 store
      return this.$formatter.format(this.$parent.revenuePerStore * (this.$parent.owned || 1));
    },
    price() {
      return this.$formatter.format(this.$parent.price);
    }
  }
}
</script>