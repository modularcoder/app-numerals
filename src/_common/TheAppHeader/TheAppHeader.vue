<template>
  <header class="AppHeader">
    <RouterLink to="/">
      <BaseLogo class="AppHeaderLogo" />
    </RouterLink>
  </header>
</template>

<script>
import BaseLogo from '../BaseLogo/BaseLogo'

export default {
  components: {
    BaseLogo,
  },
}
</script>

<style lang="scss" scoped>
.AppHeader {
  padding: 37px 59px;
  display: flex;
  position: relative;
  z-index: 10;
  width: 100%;
}

.AppHeaderLogo {
  margin-right: auto;
}
</style>
