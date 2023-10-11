import { registerApplication, start } from "single-spa";
import singleSpaAngularJS from 'single-spa-angularjs'
import angular from 'angular'


angular.module('app', [])

angular
    .module('app')
    .component('root', {
      template: `<p> Hello World AngularJS</p><a href="/ng">Retornar ao Angular 13</a>`,
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

registerApplication(
  "angular",
  () => System.import("http://localhost:4200/main.js"),
  location => location.pathname.startsWith('/ng') && !location.pathname.includes('/js')
);

registerApplication({
  name: '@angularjs',
  app: myAngularApp,
  activeWhen: '/js'
})

start({
  urlRerouteOnly: true,
});
