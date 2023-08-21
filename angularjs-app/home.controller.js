angular.module("myAngJS").controller("HomeController", function () {
  this.colors = ["blue", "red", "green"];
  this.newColor = "";
  this.$onInit = function () {
    console.log("Home Controller is being initialized!");
  };

  this.addColor = function () {
    this.colors.push(this.newColor);
    this.newColor = "";
  };

  // this.$onDestroy = function () {
  //   console.log(
  //     "Home Controller is being destroyed -- this shouldn't trigger :("
  //   );
  // };
});
