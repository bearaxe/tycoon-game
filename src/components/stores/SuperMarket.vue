<template>
  <div class="store">
    <div class="title">
      Super Market
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
  type: 'super-market',
  extends: Store,
  data() {
    return {
      price: 25,
      collectSeconds: 25,
      revenuePerStore: 10,
    }
  }
}
</script>