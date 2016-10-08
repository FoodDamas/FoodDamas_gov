/**
 * Created by Mr_Quang on 10/7/2016.
 */
dashboard.controller("FoodTruckViewCtrl", function ($scope, $location, $anchorScroll, dashboardService, $state, ModalService, $mdDateLocale) {
    var vm = this;
    $scope.ftviewpageSize =10;

    /*get FT data*/
    {
        vm.getListFT =function(){
            dashboardService.getListFTFull().then(function(data){
                console.dir(data);
                vm.listFTFill = data;
            });
        }
        vm.getListFT();
    }
    /*end get FT data*/



    console.dir("Food Truck View Ctrl.........");
});
{
    /*---------------------Modal Controller---------------------*/
    dashboard.controller('ModalController', function ($scope, close) {

        $scope.close = function (result) {
            close(result, 500); // close, but give 500ms for bootstrap to animate
        };

    });
}