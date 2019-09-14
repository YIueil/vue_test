// vue插件库
(function(){
	//向外暴露的插件对象
	const MyPlugin = {};
	//安装方法,给传入的参数是vue和
	MyPlugin.install = function (Vue, options) {
	  // 1. 添加全局方法或属性
	  Vue.myGlobalMethod = function () {
	    // 逻辑...
		console.log("添加全局方法或属性调用了")
	  }
	
	  // 2. 添加全局资源
	  Vue.directive('my-directive',function(el,binding){
		  el.textContent=binding.value.toLowerCase();
	  })
	
	  // 3. 注入组件选项
	  Vue.mixin({
	    created: function () {
	      // 逻辑...
	    }
	  })
	
	  // 4. 添加实例方法
	  Vue.prototype.$myMethod = function (methodOptions) {
	    // 逻辑...
		console.log("添加的实例方法调用了")
	  }
	}
	window.MyPlugin = MyPlugin;
})()
