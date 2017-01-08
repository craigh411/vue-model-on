# vue-model-on

Allows you to set the event type for the vue.js `v-model` directive.

## Example

The following will update myVar on blur event, although you may use any javascript event you want to:

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




