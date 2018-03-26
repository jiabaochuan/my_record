本篇文章记录自己学习vue所遇到的问题
 

问题一:动态绑定class（使用场景:根据当前属性来给不同的class）
  :class="['header-list',item.title==='index'?'active':'']"  
 
 
问题二:父组件与子组件的通信(文档很清楚的表明,在此是为了记录一下)
   父组件往往通过bind：一个需要传递的内容，通过子组件 props接受。
   而子组件往往通过$emit 去通知父组件 做相应的处理
  
问题三:关于img:src的绑定
   由于刚接触vue没多久,对其原理并不是很了解，这个时候，可能还带有原本jq的理念在里面，直接<img src="{{value.src}}">。此时程序就会报错，而正确的写法则是
   :"value.src"
   
问题四:vue 获取当前 点击事件的元素
   在项目中，曾需要获取当前点击事件的目标
   @click="toggle_video($event)
   
问题五:获取当前视频是否播放
   video 有个 paused 属性  true 代表当前为暂停的状态
   
问题六:导航栏激活
   查看了vue_router的文档可以发现
   ①直接使用 router-link vue-router 可以自动添加 active-class(也有其他的优势)
   ②但是当我用 router.push(),好像无法设置自动添加类（不知是否正确）。此时通过对比 当前 this.route.name 和当前元素 name是否匹配来添加
   
问题七：jsonp请求
   由于后端是自己开发，所以用了axios,但是目前axios本身不支持jsonp。当然我们可以借助其他jsonp的工具，来封装一个，便于请求。
