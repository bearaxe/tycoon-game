<template>
  <div class="store lemonade-stand">
    <div class="title">
      Lemonade Stand
    </div>
    <StoreUI />
  </div>
</template>

<script>
import Store from '../Store';
export default {
  type: 'lemonade-stand',
  extends: Store,
}
</script>