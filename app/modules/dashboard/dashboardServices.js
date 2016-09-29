/**
 * Created by Mr_Quang on 9/28/2016.
 */
dashboard.service('dashboardService',['$http', '$q','apiServices',function($http, $q,apiServices){
    var dashboardService ={};
    /*QnA Service*/
    var getListQuestion = function(){
        var deferred = $q.defer();
        apiServices.getNoParam("listQuestion2").then(function(response){
            if(response)
                deferred.resolve(response);
            else
                deferred.reject("Something went wrong while processing your request. Please Contact Administrator.");
            },
            function (response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };
    var updateAnswer = function(parameters){
        var deferred = $q.defer();
        apiServices.update("editAnswer",parameters).then(function(response){
                if (response)
                    deferred.resolve(response);
                else
                    deferred.reject("Something went wrong while processing your request. Please Contact Administrator.");
            },
            function (response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };
    var createAnswer = function(parameters){
        var deferred = $q.defer();
        apiServices.create("addNewAnswer",parameters).then(function(response){
                if (response)
                    deferred.resolve(response);
                else
                    deferred.reject("Something went wrong while processing your request. Please Contact Administrator.");
            },
            function (response) {
                deferred.reject(response);
            });
        return deferred.promise;
    }
    /*End QnAService*/
    /*QnAService*/
    dashboardService.getListQuesttion = getListQuestion;
    dashboardService.editAnswer = updateAnswer;
    dashboardService.createAnswer= createAnswer;
    /*End QnAService*/
    return dashboardService;
}]);