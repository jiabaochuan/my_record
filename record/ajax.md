封装一个原生ajax（不考虑过低版本ie浏览器）
```
# obj对象 包含基本的参数
function ajax(obj){
    var info = {}，
        xhq = new XMLHttpRequest();
    info.type = typeof obj.type === "string" ? obj.type : "get";
    info.async = typeof obj.async === "boolean" ? obj.async : true;
    info.data = typeof obj.data === "object" ? obj.data : {};
    info.url = typeof obj.url === "string"?  obj.url : "";
    info.success = typeof obj.success === "function" ? obj.success : function(){};
    info.error = typeof obj.error === "function" ? obj.error : function(){};
    
    if(info.type === "post"){
        xhq.send("post",info.url,info.async);
        xhq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = initData(info.data);
        xhq.send(data);
    }else{
        var url = info.url+"?"+toData(info.data);
        ajax.open(info.type,url,info.async);
        ajax.send();
    }
    
        xhq.onreadystatechange = function (){
        if (xhq.readyState == 4){
                if (xhq.status>=200&&xhq.status<300 || xhq.status==304){
                    if (info.success){
                        info.success(xhq.responseText);
                    }
                }else{
                    if (info.error){
                        info.error(xhq.status);
                    }
                }
            }
      }  
}
```

```
# 对数据进行简单的处理
function initData(data){
    if(typeof data !== "object"){
        return "";
    }
    
    var arr = [];
    for (var i in data){
        var str = i+"="+data[i];
        arr.push(str);
    }
    return arr.join("&");
}
