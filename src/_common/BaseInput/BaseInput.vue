<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :type="type"
    class="BaseInput"
    @input="handleUpdate"
  />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: () => 'text',
    },
  },
  methods: {
    handleUpdate(event) {
      const value =
        this.type === 'number'
          ? parseInt(event.target.value, 10)
          : event.target.value

      this.$emit('update:modelValue', value)
    },
  },
  emits: ['update:modelValue'],
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
