// 等待2秒钟，再执行后续的代码（经过验证后，可以正常延迟）
setTimeout(() => {
    // 1. 检测当前网页的HTML内容中是否包含字符串“xxxxxxx”
    if (document.documentElement.outerHTML.indexOf('tag-link">原神') !== -1) {
        // 2. 如果是，则关闭当前网页
        window.close();
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
}, 2000);

// // 1. 检测当前网页的HTML内容中是否包含字符串“xxxxxxx”
// if (document.documentElement.outerHTML.indexOf('tag-link">原神') !== -1) {
//     // 2. 如果是，则关闭当前网页
//     window.close();
// } else {
//     // 3. 如果不是，输出“当前没发现异常”
//     console.log('当前没发现异常');
// }