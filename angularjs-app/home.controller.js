angular.module("myAngJS").controller("HomeController", function () {
  var vm = this;

  vm.$onInit = function () {
    vm.colors = ["blue", "red", "green"];
    console.log("Home Controller is being initialized!");
  };
});
