/**
 * Created by Mr_Quang on 9/25/2016.
 */
var ftview = angular.module("ftview", ['ui.router', 'ngResource', 'ngAnimate']);

ftview.config(["$stateProvider", function ($stateProvider) {

    //login page state
    $stateProvider.state('ftview', {
        url: '/ftview',
        templateUrl: 'app/modules/ftview/ftview.html',
        controller: 'ftviewCtrl',
        controllerAs: 'vm',
        authenticate: false,
        adminsite :false
    });
}]);