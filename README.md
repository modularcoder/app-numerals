# Numerals

| This app converts numerical inputs to [English numerals](https://en.wikipedia.org/wiki/English_numerals).

<img src="https://user-images.githubusercontent.com/3959008/114965848-791fdb00-9e82-11eb-8ab6-4bcf0e9baa4d.png" />



<p align="center">
  <h3>
    <a href="https://numerals.gh.am/" target="_blank"> View Demo 🏄</a>
  </h3>
</p>





### Few main points about the structure

- Unit tests are in jest, the converter function and ConverterMain page are tests
- Unit test are located within the source files so It's easy navigate
- `_common` directory contains reusable components 
- Components can be Base{Component} (building block components, there may be a few components of this type on the page at the same time) and App{FeatureName} related, which are appearing only one time on the page (this is done according Vue best practices styleguides). See (Base component names)[https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended] and (Single-instance component names)[https://vuejs.org/v2/style-guide/#Single-instance-component-names-strongly-recommended]
- The directory organization is done according "ModularCode" best practices. Each directory starting with an uppercase is assumed to be a module. Directories starting with underscore are aggregational, and they may contain things of the same time for that level of hierarchy.
- Vue router is set, assuming, that the project might contain multiple features
- Some base components are implemented in the `_common` directory, which may expand and form the apps components library. At the moment of writing `BaseButton`, `BaseCard`, `BaseField`, `BaseInput`, `BaseLogo`, `BaseTitle`
- The logo is inside the `TheAppHeader` component, assuming that project might need a navigation.
- The app is deployed to GitHub pages (https://numerals.gh.am/)[http://numerals.gh.am/]


### Things to improve

There are certanlty things that can be still improved, but were not done due to limited ammount of time.

- Extend base components functionality
- Cover base components with Jest test
- Implement storybook, where we may describe the app components. See [StoryBook for Vue](https://storybook.js.org/docs/vue/get-started/introduction)
- The app might be written with Composition api
- The input validation is hacked with using `input type="number"`. In real world we need a validation, and error feedback messages
- TypeScript support





## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```
