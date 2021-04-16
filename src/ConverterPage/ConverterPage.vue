<template>
  <div class="ConverterPage">
    <div class="BaseCard"></div>

    <div class="ConverterPageShadow"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import languageConverterService from './_services/languageConverterService'

export default {
  name: 'Home',
  components: {},
  mounted() {
    console.log(
      'languageConverterService',
      languageConverterService.numberToEnglishNumeral(85000),
    )
  },
}
</script>

<style lang="scss">
.ConverterPage {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  flex: 1;
  overflow: hidden;

  padding-top: 200px;
  padding-bottom: 200px;
}

.BaseCard {
  padding: 250px;

  background: #ffffff;
  z-index: 1;
  /* Subtle shadow - basi */

  box-shadow: 0px 8px 20px rgba(4, 16, 39, 0.08);
  border-radius: 5px;
}

.ConverterPageShadow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
  width: 940px;
  height: 940px;
  background: radial-gradient(
    48.17% 48.79% at 50.73% 49.99%,
    #c6d5f0 0%,
    rgba(214, 226, 247, 0) 100%
  );
}
</style>
