<template>
  <div class="store">
    <div class="title">
      Pet Shop
    </div>
    <StoreUI />
  </div>
</template>

<script>
import Store from '../Store';
export default {
  type: 'pet-shop',
  extends: Store,
  data() {
    return {
      price: 6,
      collectSeconds: 8,
      revenuePerStore: 1,
    }
  }
}
</script>