/**
 * Created by Mr_Quang on 9/30/2016.
 */
view.controller("homepageViewCtrl",function($http, $scope,$resource,appSettings){
    var vm = this;
    var apiBase = appSettings.apiBase;
    console.dir(apiBase);
    vm.getListNotice = function () {
        var myNoticeRecords = $resource(apiBase + '/listnotice');
        var myNoticeRecord = myNoticeRecords.query(function () {
            console.dir(myNoticeRecord);
        });
    }
    vm.getListNotice();
    console.log("home page ............");
});