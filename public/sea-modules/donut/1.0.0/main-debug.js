if (document.attachEvent) {
    alert("这个例子不支持 Old IE 哦");
}

define("donut/name/1.0.0/main-debug", [ "./data-debug", "./lucky-debug", "jquery-debug", "./user-debug" ], function(require) {
    var data = require("./data-debug");
    var lucky = require("./lucky-debug");
    lucky.init(data);
});
