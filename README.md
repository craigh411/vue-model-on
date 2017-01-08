# vue-model-on for Vue 2.x

By default Vue's `v-model` uses the `input` event to update the underlying model data, `vue-model-on` is a simple directive that allows you to set the event type for updating model data in Vue.js. Simply use `v-model-on:event="myVar"` instead of `v-model="myVar"`

## Install

Install via `npm`:

`npm install vue-model-on --save-dev`

Then simply use `require`:

`require('vue-model-on')`

or import for `ES6` syntax:

`import "vue-model-on"`

Also available via CDN on unpkg, simply add the following to your page:

`<script src="https://unpkg.com/vue-model-on@1.0.0" ></script>`

## Example

The following will update `myVar` on `blur` event, although you may use any javascript event you want to:

**HTML**

```HTML
<input v-model-on:blur="myVar" />
```

**Vue Instance**
```javascript
new Vue({
  el: '#app',
  data: {
    myVar: '' // declare model variable
  }
});
```

[Check it out on JSFiddle](https://jsfiddle.net/b20jk7po/)




