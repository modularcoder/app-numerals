<template>
  <div class="BaseCard">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.BaseCard {
  padding: 60px 50px;
  box-shadow: 0px 8px 20px rgba(4, 16, 39, 0.08);
  border-radius: 5px;
  background: #ffffff;
  z-index: 1;
  width: 100%;
}
</style>
