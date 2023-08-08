angular.module("myAngJS").controller("HomeController", function () {
  var vm = this;

  vm.$onInit = function () {
    vm.colors = ["blue", "red", "green"];
  };
});
