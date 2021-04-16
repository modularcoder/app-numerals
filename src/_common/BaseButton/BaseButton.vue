<template>
  <component class="BaseButton" :is="tag" :disabled="disabled">
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
    type: {
      type: String,
      defuult: () => 'default',
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="scss" scoped>
.BaseButton {
  color: #fff;
  background: var(--color-primary);
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
  position: relative;
  overflow: hidden;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    right: 100%;
    top: 0;
    bottom: 0;
    width: 100%;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    cursor: default;
    background: var(--color-text-muted);
  }

  &:not(:disabled) {
    &:hover,
    &:focus,
    &:active {
      &::before {
        right: 0;
      }
    }
  }
}
</style>
