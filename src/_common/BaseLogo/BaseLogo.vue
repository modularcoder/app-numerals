<template>
  <img :src="path" />
</template>

<script>
export default {
  name: 'BaseLogo',
  data() {
    return {
      path: require('./BaseLogo.svg'),
    }
  },
}
</script>

<style lang="scss" scoped></style>
