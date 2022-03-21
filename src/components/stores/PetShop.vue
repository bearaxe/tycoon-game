<template>
  <div class="store">
    <div class="title">
      Pet Shop
    </div>
    <StoreUI
      :buy="buy"
      :collect="collect"
      :collectPercentage="collectPercentage"
      :owned="owned"
    />
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