$(document).ready(function() {
    $("#setLimit").click(function() {
        var number = $("#submit").val();
        alert("当前设置的预算限制为：" + number);
    });
});