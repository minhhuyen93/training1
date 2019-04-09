System.register(["@angular/platform-browser-dynamic", "./userModule"], function (exports_1, context_1) {
    "use strict";
    var platform_browser_dynamic_1, userModule_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (userModule_1_1) {
                userModule_1 = userModule_1_1;
            }
        ],
        execute: function () {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(userModule_1.UserModule);
        }
    };
});
//# sourceMappingURL=main.js.map