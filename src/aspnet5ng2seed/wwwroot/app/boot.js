System.register(['angular2/http', 'angular2/platform/browser', 'angular2/core', './app.component', "angular2/router"], function(exports_1) {
    var http_1, browser_1, core_1, app_component_1, router_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })])
                .then(function (success) { return console.log('Bootstrap successfully!'); })
                .catch(function (err) { return console.log(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map