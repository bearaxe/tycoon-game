<template>
  <div class="hud">
    {{ moneyAmount }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['bank']),
    moneyAmount() {
      return this.$formatter.format(this.bank.money)
    }
  }
}
</script>