/**
 * Created by Mr_Quang on 9/24/2016.
 */
dashboard.controller("QnACtrl", qnaFunction);

function qnaFunction($scope, $location, dashboardService,$cookies,$state) {

    var vm = this;
    $scope.search = "";
    $scope.pageSize = 3;
    $scope.currentPage = 1;

    /*  $scope.init =function(){
     console.log("init..................");
     vm.testFunc();
     }*/
    vm.createQnA = false;
    vm.viewDetail = false;


    vm.getFunc = function () {
        dashboardService.getListQuesttion().then(function (data) {
            var d = JSON.parse(angular.toJson(data));
            vm.getData = d;
            console.log(vm.getData);
        });
    };
    vm.getData = vm.getFunc();

    vm.orderByField = '';
    vm.reverseSort = false;
    vm.orderClick = function (data) {
        console.log(data);
       if(data == "id"){
           vm.orderByField ="q_id";
       }

        /*vm.orderByField = data;*/
        vm.reverseSort = !vm.reverseSort;
    };
    /*get Question vs Ans Detail*/
    vm.getQnA = {};
    var ansEditTemp = "";
    vm.viewQnADetail = function (data) {
        $location.hash("viewDetail")
        vm.viewDetail = true;
        vm.getQnA = data;
        console.log(vm.getQnA);
        if (vm.getQnA.answer != null) {
            $scope.editAnswer = vm.getQnA.answer.ans_content;
        }
    };

    /*Add Answer For Question*/
    vm.addAnswer = function () {
        var param ={
            q_id:vm.getQnA.q_id,
            ans_content :$scope.AnswerContent,
            ans_user:$cookies.get("user")
        }
        dashboardService.createAnswer(param).then(function(data){
            if (data.result == "success") {
                console.log("-------Reload---------------");
                $state.reload();
            }

        });
    };

    /*Edit Answer Part*/
    vm.editAnswer = false;
    vm.saveEditAnswer = function () {
        var answer =
        {
            ans_id: vm.getQnA.answer.ans_id,
            ans_content: $scope.editAnswer
        };
        dashboardService.editAnswer(answer).then(function (data) {
            if (data.result == "success") {
                vm.editAnswer = false;
                $state.reload();
            }
        });
    };

    console.log("QnA Page Ctrl.............");
}