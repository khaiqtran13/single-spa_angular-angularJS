angular.module("myAngJS").controller("HomeController", function () {
  var vm = this;

  vm.$onInit = function () {
    vm.colors = ["blue", "red", "green"];
    vm.newColor = "";
    console.log("Home Controller is being initialized!");
  };

  vm.addColor = function () {
    vm.colors.push(vm.newColor);
    vm.newColor = "";
  };
});
