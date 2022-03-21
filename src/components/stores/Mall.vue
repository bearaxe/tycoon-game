<template>
  <div class="store">
    <div class="title">
      Mall
    </div>
    <StoreUI />
  </div>
</template>

<script>
import Store from '../Store';
export default {
  type: 'mall',
  extends: Store,
  data() {
    return {
      price: 100000,
      collectSeconds: 60,
      revenuePerStore: 10000,
    }
  }
}
</script>