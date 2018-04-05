/*
* 封装一个jsonp方法
*
* jsonp 的核心则是动态添加 <script> 标签来调用服务器提供的 js 脚本，
* 允许用户传递一个 callback 参数给服务端，
* 然后服务端返回数据时会将这个 callback 参数作为函数名来包裹住 JSON 数据，
* 这样客户端就可以随意定制自己的函数来自动处理返回数据了。
* */

export function jsonp(url,data,option,fn) {

    // 获取当前页面的 head
    let target = document.head;
    let call;
    // 判断是否data 是否是对象
    if(Object.prototype.toString.call(data) !== '[object Object]'){
        data = {};
    }

    // 判断自定义的 callback 函数
    option = typeof option !== 'string'?'callback':option;

    // 随机生成callback 函数名
    data[option] =  jsonp_random_code('jbc');

    // 拼凑url
    url += (url.indexOf('?')<0 ? '?': '&') + param(data);

    // 创建一个新的script
    let script = document.createElement('script');
    let child = target.getElementsByTagName('script')[0];
    script.src = url;
    target.insertBefore(script, child);


    // 定义全局的函数
    window[data[option]] = function (info) {
        clear(script);
        if(fn){
            fn(null,info)
        }
    };

    // 清除 函数 (script标签 和  全局函数)
    function clear(dom) {
        target.removeChild(dom);
        window[data[option]] = null;
    }


    function cancel() {
        if(window[data[option]]){
            clear(script)
        }
    }
}


export default function jsonp_promise(url,data,option) {
        return new Promise((resolve,reject)=>{
            jsonp(url,data,option,(err,info)=>{
                if(!err){
                    resolve(info)
                }else{
                    reject(err);
                }
            })
        })
}

export function param(data) {
    //Object.keys(data)
    let param = '';

    for(let i in data){
        param += '&'+i+'='+data[i];
    }

    return param.substring(1)
}


// 随机生成
export function jsonp_random_code(prefix) {

    let ending = String.fromCharCode(Math.floor(Math.random()*26)+97);

    return prefix+Date.parse(new Date())+ending;
}
