// ==========显示当前输入的文字
$(document).ready(function() {
    $("input").on("input", function() {
        var inputText = $(this).val();
        $("#showText").text(inputText);
    });
});

// ==========存储功能
$(function() {
    // （每次点开popup界面后）从浏览器中获取存储的金额，如果没有存储，则显示0
    chrome.storage.sync.get("total", function(items) {
        $("#total").text(items.total);
    });

    // 点击id=add按钮时：1、从浏览器中获取存储的金额；2、将本次金额加到总金额并存储；3、将更新后的总金额显示在页面上
    $("#add").click(function() {
        chrome.storage.sync.get("total", function(items) {
            // 1、从浏览器中获取存储的金额
            var newTotal = 0;
            if (items.total) {
                newTotal = parseFloat(items.total);
            }
            // 2、将本次金额加到总金额并存储
            var ThisAmount = $("#ThisAmount").val();
            if (ThisAmount) {
                newTotal += parseFloat(ThisAmount);
                chrome.storage.sync.set({ total: newTotal });
            }
            // 3、将更新后的总金额显示在页面上
            $("#total").text(newTotal);
            $("#ThisAmount").val("");
        })
    });

    // 点击id=reset按钮时：1、将总金额清零并存储；2、将更新后的总金额显示在页面上
    $("#reset").click(function() {
        chrome.storage.sync.set({ total: 0 });
        $("#total").text(0);
    });
});