Vue.directive('model-on', {
  bind: function(el, binding, vnode) {
    el.addEventListener(binding.arg, function() {
      vnode.context[binding.expression] = el.value;
    });
  }
});