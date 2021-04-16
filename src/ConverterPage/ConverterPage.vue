<template>
  <div class="home">
    <h1>This is an about page</h1>
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
