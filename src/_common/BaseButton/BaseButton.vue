<template>
  <component class="BaseButton" :is="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: () => 'button',
    },
  },
  type: {
    type: String,
    defuult: () => 'default',
  },
}
</script>

<style lang="scss" scoped>
.BaseButton {
  color: #fff;
  background: #adb9ce;
  box-shadow: 0px 8px 20px rgba(4, 16, 39, 0.08);
  border-radius: 3px;
  padding: 11px 6px;
  display: inline-flex;
  border: none;
  line-height: 18px;
  font-size: 14px;
  font-weight: 700;
  min-width: 152px;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover,
  &:focus,
  &:active {
    background: #909eb6;
  }
}
</style>
