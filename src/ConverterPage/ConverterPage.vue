<template>
  <div class="ConverterPage">
    <div class="PageShadow"></div>
    <div class="PageContainer">
      <BaseCard class="Card">
        <BaseTitle>Convert integer to text</BaseTitle>

        <BaseField label="Enter your favorite number">
          <BaseInput
            v-model="input"
            placeholder="Enter a number here"
            type="number"
            @input="clearOutput"
          />
        </BaseField>

        <BaseField label="Your number in text">
          <p class="ResultPlaceholder" v-if="!output">
            Your number will show here
          </p>
          <div class="Result" v-if="output">{{ output }}</div>
        </BaseField>

        <footer class="CardFooter">
          <BaseButton
            class="BtnSubmit"
            :disabled="!isFormValid"
            @click="convert"
            >Convert</BaseButton
          >
        </footer>
      </BaseCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import languageConverterService from '../_services/languageConverterService'

import BaseTitle from '../_common/BaseTitle/BaseTitle'
import BaseCard from '../_common/BaseCard/BaseCard'
import BaseButton from '../_common/BaseButton/BaseButton'
import BaseField from '../_common/BaseField/BaseField'
import BaseInput from '../_common/BaseInput/BaseInput'

export default {
  name: 'ConverterPage',
  components: { BaseCard, BaseTitle, BaseButton, BaseField, BaseInput },
  data() {
    return {
      input: null,
      output: null,
    }
  },
  computed: {
    isFormValid() {
      return typeof this.input === 'number' && !Number.isNaN(this.input)
    },
  },
  methods: {
    clearOutput() {
      this.output = null
    },
    convert() {
      try {
        this.output = languageConverterService.numberToEnglishNumeral(
          this.input,
          { capitalize: true },
        )
      } catch (err) {
        this.output = ''
        alert(err.message)
      }
    },
  },
  mounted() {},
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

.PageContainer {
  width: 506px;
  position: relative;
  z-index: 1;
}

.Card {
  .CardFooter {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
  }
}

.ResultPlaceholder {
  color: var(--color-text-muted);
}

.BtnSubmit {
  margin-left: auto;
}

.PageShadow {
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
