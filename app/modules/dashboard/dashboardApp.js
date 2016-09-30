/**
 * Created by Mr_Quang on 9/23/2016.
 */
var dashboard = angular.module("dashboard", ['angularModalService','angular-toArrayFilter','angularUtils.directives.dirPagination','ui.router', 'ngResource', 'ngAnimate','angular-md5','ngCookies']);

dashboard.config(["$stateProvider", function ($stateProvider) {

    //dashboard page state
    $stateProvider.state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/views/DashboardHome.html',
        controller: 'dashboardCtrl',
        controllerAs: 'vm',
        authenticate: true,
        adminsite :true
    });
    //QnA page state
    $stateProvider.state('app.qna', {
        url: '/QnA',
        templateUrl: 'app/modules/dashboard/views/QnAPage.html',
        controller: 'QnACtrl',
        controllerAs: 'vm',
        authenticate: true,
        adminsite :true
    });

    //Notice page state
    $stateProvider.state('app.notice', {
        url: '/Notice',
        templateUrl: 'app/modules/dashboard/views/NoticePage.html',
        controller: 'NoticeCtrl',
        controllerAs: 'vm',
        authenticate: true,
        adminsite :true
    });
}]);