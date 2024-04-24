console.log('content-script.js注入成功(在manifest中静态注入)');
// cTest变量的访问成功与否，用于在浏览器console中测试其脚本作用域
let cTest = '成功访问content-script.js中的cTest变量';

// console输出页面中的特定内容
console.log("content-script.js输出网页body内容" + document.querySelector('body'));

// window.addEventListener('hashchange', function() {
//     console.log(11111111111111111111);
// });

// window.addEventListener('unload', function(event) {
//     console.log('Navigation occuring');
// });


// 等待1秒钟，再执行后续的代码（经过验证后，可以正常延迟）
detectClose();

// // 切换标签时，输出当前网页的URL
// document.addEventListener('visibilitychange', function() {
//     console.log('当前网页的URL是：' + window.location.href);
// });


// // 鼠标点击网页前进or回退时，输出当前网页的URL
// window.addEventListener('popstate', function() {
//     console.log('当前网页的URL是：' + window.location.href);
// });

// 监听搜索按钮的点击事件（用于尝试解决搜索后的b站不能重新运行js文件的问题）
document.querySelector('.search-button').addEventListener('click', function() {
    console.log('搜索按钮被点击了'); // 真能检测到，但是为啥下面的消息发不过去

    // 测试能否在这里运行函数（答案是可以）(但好像有时候不行，不知道为什么)
    detectClose();

    // // 向background script发送消息（发送失败）
    // chrome.runtime.sendMessage({ data: 'executeScript' });
});

function detectClose() {
    setTimeout(() => {
        console.log('进入setTimeout函数');
        // 1. 检测当前网页的HTML内容中是否包含字符串“xxxxxxx”
        if (document.documentElement.outerHTML.indexOf('tag-link">原神') !== -1) {
            // 2. 如果是，则关闭当前网页
            console.log('关闭之前的语句');
            // window.close();
            window.location.href = 'about:blank'

        }
        // 如果含有字符串“星穹铁道”，则关闭当前网页
        else if (document.documentElement.outerHTML.indexOf('tag-link">星穹铁道') !== -1) {
            console.log('关闭之前的语句');
            // window.close();
            window.location.href = 'about:blank'
        }
        // 如果含有字符串“手机游戏”或者“黄泉”或者“崩坏：星穹铁道”或者“游戏”或者“崩坏星穹铁道”或者“创作者激励计划”或者“英雄联盟”或者“王者荣耀”或者“LOL”或者“车祸模拟器”或者“行车记录仪”或者“车祸”或者“交通事故，则关闭当前网页
        else if (document.documentElement.outerHTML.indexOf('tag-link">手机游戏') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">黄泉') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">崩坏：星穹铁道') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">游戏') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">崩坏星穹铁道') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">创作者激励计划') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">英雄联盟') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">王者荣耀') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">LOL') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">车祸模拟器') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">行车记录仪') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">车祸') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">交通事故') !== -1) {
            console.log('关闭之前的语句');
            // window.close();
            window.location.href = 'about:blank'
        }
        // 如果含有字符串“magnet:?xt”，则关闭当前网页
        else if (document.documentElement.outerHTML.indexOf('magnet:?xt') !== -1 || document.documentElement.outerHTML.indexOf('value="舞蹈"') !== -1 || document.documentElement.outerHTML.indexOf('value="跳舞"') !== -1) {
            console.log('关闭之前的语句');
            // window.close();
            window.location.href = 'about:blank'
        }
        // 如果含有字符串：热舞、性感、尘白禁区、绝区零、MMD、纯情女高、女高中生、唐伯虎、韩舞、舞蹈、空姐、丝袜、cos、Cosplay、丝袜、擦边、>NBA、业余球探刀先生、动物、喵星、汪星、萌宠、篮球。则关闭当前网页
        else if (document.documentElement.outerHTML.indexOf('tag-link">热舞') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">性感') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">尘白禁区') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">绝区零') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">MMD') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">纯情女高') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">女高中生') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">唐伯虎') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">韩舞') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">舞蹈') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">空姐') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">丝袜') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">cos') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">Cosplay') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">丝袜') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">擦边') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">NBA') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">业余球探刀先生') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">动物') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">喵星') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">汪星') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">萌宠') !== -1 || document.documentElement.outerHTML.indexOf('tag-link">篮球') !== -1) {
            console.log('关闭之前的语句');
            // window.close();
            window.location.href = 'about:blank'
        } else {
            // 3. 如果不是，输出“当前没发现异常”
            console.log('当前没发现异常');
        }
    }, 1000);
}