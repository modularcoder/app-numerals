# Numerals

| This app converts numerical inputs to [English numerals](https://en.wikipedia.org/wiki/English_numerals).

<img src="https://user-images.githubusercontent.com/3959008/114967057-d157dc80-9e84-11eb-8ce7-c9ba88b697eb.png" />



<p align="center">
  <h3>
    <a href="https://numerals.gh.am/" target="_blank"> View Demo 🏄</a>
  </h3>
</p>




### Few main points about the structure

- Code styling: Prettier + ESLint
- Unit tests are in jest, the converter function and ConverterMain page are tests
- Unit test are located within the source files so It's easy navigate
- E2E tests are in cypress
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


-----------------------



# Strings Engineering
## Vue Front-End Coding Exercise

## Overview
This exercise serves as a demonstration of how you solve problems using idiomatic Vue.js and Typescript or ECMAScript. Your solution will be used to facilitate a conversation on a follow-up technical interview.

## Rules
There are a few guidelines to follow while completing this exercise:
* __Keep It Confidential:__ Please keep this document, the problem, and your solution confidential between yourself and Recursive Rebels (d.b.a. Strings), even after leaving the interview
* __24-hour Time Limit:__ This should be a relatively short but fun exercise to show of your knowledge about specific technologies and software engineering principles.  Unless otherwise arranged, make handoff to Strings within 24 hours,
* __Use Generally Available Tools:__ The team evaluates new releases of tools and technologies as they become available, however for this exercise, please only use the latest version of tools and technologies that are considered Generally Available,
* __Open Documentation, Open Internet:__ Engineers spend a non-trivial amount of time sourcing information online; feel free to use online resources and be able to demonstrate why you selected one approach to solving a problem over another,
* __Deliver a Complete Project:__ The solution is delivered via a pull request. [Fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) the repository into your own, create the code, 
  test cases, and any supporting documentation required to build the project should be standardized in your project resources -- We want to be able to run your solution on our machines.

## Technical Requirements
All software projects require careful balance of both technical requirements along with functional requirements.  Your solution must comply with the following technical objectives:
* Implement your solution using a current released version of Vue and Typescript or ECMAScript,
* Must include unit tests to verify your code and include these tests in your solution,
* There is no need to provide any form of data persistence, or API.

We are looking for a **clean**, **well-factored**, idiomatic codebase that has accompanying unit tests, and a thoughtful design consistent with provided assets.

Good luck! 

## Functional Requirements
### Part 1
We would like a function that translates integers into strings that are [English numerals](https://en.wikipedia.org/wiki/English_numerals).   
For example, you can envision a function accepting an int and returning a string such that:
| Input | Output |
| ---: | ------ |
| 0    | Zero   |
| 10   | Ten    |
| 11   | Eleven |
| 55   | Fifty-five |
| 123  | One hundred and twenty-three |
| 1234 | One thousand two hundred and thirty-four | 
| 85000 | Eighty-five thousand | 

The following are the guard rails:  
* Minimum number is 0
* Maximum number is 999,999,999
* If a number group is in the range 21 to 99, and the second digit is not zero, the number is typically written as two words separated by a hyphen.

### Part 2
Stand up a new vue.js project with a simple component structure that aligns with [this Figma design](https://www.figma.com/file/uaXKogIMrylzQftufl7vMu/Take-home-exercise).
![Enter New Number](./assets/img/enter-new-number.png "Enter new number")

The input of numbers in this dialog invokes the function created in Part 1 and the response of the function is the output in this design.

Notes:
* View is full screen, desktop only. There are no responsive requirements.
* Fonts, weights, dimensions, boxes are all important details and included in the Figma designs.
* We can run the app locally, please do not host your app. We want to maintain privacy and keep this exercise private for future recruiting purposes.  
