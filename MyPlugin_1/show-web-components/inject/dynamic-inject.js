console.log('dynamic-inject.js注入成功（在background.js中点击插件后动态注入');
// test变量的访问成功与否，用于在浏览器console中测试其脚本作用域
let test = '在点击插件按钮注入dynamic-inject.js之后，成功访问本js中的test变量';

// console输出页面中的#su的value
console.log("dynamic-inject.js输出网页#su的value：" + document.querySelector('#su').value);

// 在content_script中，重写默认的JSON.stringify（只作用于content_script）。因此在top下的控制台里执行stringify时，不会执行重写后的stringify
const myJsonStringfy = JSON.stringify;
JSON.stringify = (obj) => {
    console.log('you are using Json.stringify from dynamic-inject.js');
    return myJsonStringfy(obj);
}