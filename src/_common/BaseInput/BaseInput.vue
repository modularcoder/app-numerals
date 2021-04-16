<template>
  <input v-bind="$attrs" :value="value" class="BaseInput" />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: () => 'text',
    },
  },
}
</script>

<style lang="scss" scoped>
.BaseInput {
  min-height: 40px;
  padding: 11px 10px;
  color: #041027;
  background: #ffffff;
  border: 1px solid #dde5f3;
  box-sizing: border-box;
  border-radius: 2px;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--color-text-muted);
    opacity: 1; /* Firefox */
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--color-text-muted);
  }
}
</style>
