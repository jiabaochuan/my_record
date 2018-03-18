Promise学习记录

1.首先什么是Promise?
  根据MDN所说: 一个 Promise 就是一个代表了异步操作最终完成或者失败的对象。Promise 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象.
 
2.语法
```
  new Promise( 
      //executor
      function(resolve, reject) {
      
      })
  );
  ```
  解释:executor是带有 resolve 和 reject 两个参数的函数 。Promise构造函数执行时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor（executor 函数在Promise构造函数返回新建对象前被调用）。resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）
  
3.简单的实例
  那么怎么使用promise呢？
  ```
  var promise = new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log('promise');
        // 此处分种情况
        1.不调用resolve()
        2.resolve() 不带参数
        3.resolve("OK") 
      })
  })
  promise.then(function(value){
      console.log("promise+"+value);
  })
  
  结果:分别为 "" , "promise+undefined", "promise+OK";
  ```


结尾:
1.http://fex.baidu.com/blog/2015/07/we-have-a-problem-with-promises/
