<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from './_common/TheAppHeader/TheAppHeader'

export default {
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
:root {
  --color-text: #041027;
  --color-text-muted: #adb9ce;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fbfcff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--color-text);
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
