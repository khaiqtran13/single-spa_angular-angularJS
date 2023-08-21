// Your AngularJS setup
var app = angular.module("myAngJS", ["ui.router"]);

// Fetch the standard Single-SPA AngularJS lifecycle functions
const angularLifecycles = window.singleSpaAngularjs.default({
  angular: angular,
  mainAngularModule: "myAngJS",
  uiRouter: true,
  perserveGlobal: true,
  template: "<home />",
  domElementGetter: () => {
    return document.getElementById("angularjs-content");
  },
});

// Add Single-SPA routing event listener
window.addEventListener("single-spa:routing-event", function () {
  const appContainer = document.getElementById("angularjs-content");
  if (window.location.hash === "#!/home") {
    appContainer.style.display = "block"; // Show the AngularJS app only for '/home' route
  } else {
    appContainer.style.display = "none"; // Hide for other routes
  }
});

// Export the lifecycles for Single-SPA
System.register([], function (_export) {
  return {
    execute: function () {
      _export((window.legacyAngularApp = angularLifecycles));
    },
  };
});

app.component("home", {
  templateUrl: "angularjs-app/index.html",
  controllerAs: "vm",
  controller: "HomeController",
});

app.run([
  "$rootScope",
  function ($rootScope) {
    $rootScope.$on("$destroy", function () {
      console.log("AYOOOO AngularJS app is being destroyed");
    });
  },
]);
