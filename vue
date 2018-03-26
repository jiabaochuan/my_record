本篇文章记录自己学习vue所遇到的问题
 

问题一:动态绑定class（使用场景:根据当前属性来给不同的class）
  :class="['header-list',item.title==='主页'?'active':'']"
  
