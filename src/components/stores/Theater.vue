<template>
  <div class="store">
    <div class="title">
      Theater
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
  type: 'theater',
  extends: Store,
  data() {
    return {
      price: 600,
      collectSeconds: 38,
      revenuePerStore: 9,
    }
  }
}
</script>