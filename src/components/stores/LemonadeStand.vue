<template>
  <div class="store lemonade-stand">
    <div class="title">
      Lemonade Stand
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
  type: 'lemonade-stand',
  extends: Store,
}
</script>