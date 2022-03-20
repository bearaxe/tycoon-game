<template>
  <div class="hud">
    {{ moneyAmount }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default {
  computed: {
    ...mapState(['bank']),
    moneyAmount() {
      return formatter.format(this.bank.money)
    }
  }
}
</script>