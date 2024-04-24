console.log('我是background.js'); // 这没输出，但是下面的监听器都能正常工作

// 监听来自content script的消息（用于尝试解决搜索后的b站不能重新运行js文件的问题）
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('收到来自content-script的消息1');
    if (message.data === 'executeScript') {
        console.log('收到来自content-script的消息2');
        // 获取当前标签页的ID
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            // 重新执行脚本
            chrome.tabs.executeScript(tabs[0].id, { file: 'content-script.js' });
        });
    }
});

// 安装插件时，在插件图标下显示OFF
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({ text: 'OFF' }) // 注意一定是action，不是browserAction。因为"manifest_version": 3中，browserAction被废弃了
})

chrome.action.onClicked.addListener(async(tab) => {
    chrome.action.getBadgeText({ tabId: tab.id }, (result) => {
        if (result === 'ON') {
            chrome.action.setBadgeText({ text: 'OFF', tabId: tab.id })
        } else {
            chrome.action.setBadgeText({ text: 'ON', tabId: tab.id })
            chrome.scripting.executeScript({ files: ['content.js'], target: { tabId: tab.id } })
        }
    })

    // 如果当前域名是百度，console.log('当前域名是百度')，动态注入inject/dynamic-inject.js。
    if (tab.url.includes('baidu')) {
        chrome.scripting.executeScript({
            files: ['inject/dynamic-inject.js'],
            target: { tabId: tab.id },
            world: "MAIN" // world: "MAIN"表示在主世界中执行脚本，即在页面中执行脚本(听不懂)
        })
    } else {
        console.log('当前域名不是百度')
    }
})



// 每次刷新网页或者换到新的网页的时候，这个插件总会变成OFF，要怎么让我一旦设为ON之后，就一直是ON呢？