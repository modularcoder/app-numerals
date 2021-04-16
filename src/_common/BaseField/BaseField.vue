<template>
  <div class="BaseField">
    <label class="BaseFieldLabel" v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.BaseField {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.BaseFieldLabel {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.2px;
  font-weight: 700;
  color: #041027;
}
</style>
