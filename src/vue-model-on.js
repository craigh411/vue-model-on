Vue.directive('model-on', {
    bind: function(el, binding, vnode) {
        el.value = vnode.context[binding.expression];
        el.addEventListener(binding.arg, function() {
            vnode.context[binding.expression] = el.value;
        });
    },
    update: function(el, binding, vnode) {
        el.value = vnode.context[binding.expression];
    }
});
