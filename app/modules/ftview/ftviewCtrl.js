/**
 * Created by Mr_Quang on 9/25/2016.
 */
ftview.controller("ftviewCtrl",['$state',function($state){
    var vm = this;
    console.log("ftview ctrl ............");
    vm.menu =[
        {
            title:'Home',
            state:'homepage'
        },
        {
            title:'QnA',
            state:'qna'
        },
        {
            title:'Notice',
            state:'notice'
        }
    ];
    vm.menuclick =function(){
        if($(window).width()<=767) {
            console.log("yes");
            $("#navbarMenu").click();
        }
    }

}]);