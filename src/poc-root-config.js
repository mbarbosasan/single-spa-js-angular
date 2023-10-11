import { registerApplication, start } from "single-spa";
import singleSpaAngularJS from 'single-spa-angularjs'

angular.module('app', [])

angular
    .module('app')
    .component('root', {
      template: '<p> Hello World AngularJS</p>',
      controller: function () {
        this.$onInit = function () {
          console.log("AngularJS Bootstrapped")
        }

        this.$onDestroy = function () {
          console.log("AngularJS Unmounted!")
        }
      }
    })


window.myAngularApp = singleSpaAngularJS({
  angular: window.angular,
  mainAngularModule: 'app',
  uiRouter:true,
  preserveGlobal: false,
  template: '<root/>'
})

registerApplication({
  name: "angular",
  app: () => System.import("http://localhost:4200/main.js"),
  activeWhen: ["/"]
});

registerApplication({
  name: '@angularjs',
  app: myAngularApp,
  activeWhen: '/js'
})

start({
  urlRerouteOnly: true,
});
