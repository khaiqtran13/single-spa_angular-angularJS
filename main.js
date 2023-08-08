// creation through System
System.register([], function (_export) {
  return {
    execute: function () {
      _export(
        (window.legacyAngularApp = window.singleSpaAngularjs.default({
          angular: angular,
          mainAngularModule: "myAngJS",
          uiRouter: true,
          perserveGlobal: false,
        }))
      );
    },
  };
});

var app = angular.module("myAngJS", ["ui.router"]);

app.config(function ($stateProvider) {
  $stateProvider.state({
    name: "main",
    url: "/home",
    template: "<home />",
  });
});

app.component("home", {
  templateUrl: "angularjs-app/index.html",
  controllerAs: "vm",
  controller: "HomeController",
});
