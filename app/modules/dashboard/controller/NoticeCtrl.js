/**
 * Created by Mr_Quang on 9/24/2016.
 */
dashboard.controller("NoticeCtrl",function($scope,$location,$anchorScroll){
    var vm =this;
    vm.orderByField = '';
    vm.reverseSort =false;
    $scope.pageSize =5;
    vm.viewNoticeDetail=false;
    vm.notices = [
        {
            id:1,
            title:"Notice Title #1",
            content:"Notice Content 1",
            date:"2016-09-27",
            type:"info"
        },
        {
            id:2,
            title:"Notice Title #2",
            content:"Notice Content 2",
            date:"2016-09-27",
            type:"info"
        },
        {
            id:3,
            title:"Notice Title #3",
            content:"Notice Content 3",
            date:"2016-09-27",
            type:"warning"
        },
        {
            id:4,
            title:"Notice Title #4",
            content:"Notice Content 4",
            date:"2016-09-27",
            type:"important"
        },
        {
            id:5,
            title:"Notice Title #5",
            content:"Notice Content 5",
            date:"2016-09-27",
            type:"info"
        },
        {
            id:6,
            title:"Notice Title #6",
            content:"Notice Content 6",
            date:"2016-09-27",
            type:"info"
        },
        {
            id:7,
            title:"Notice Title #7",
            content:"Notice Content 7",
            date:"2016-09-27",
            type:"info"
        },
        {
            id:8,
            title:"Notice Title #8",
            content:"Notice Content 8",
            date:"2016-09-27",
            type:"info"
        },
        {
            id:9,
            title:"Notice Title #9",
            content:"Notice Content 9",
            date:"2016-09-27",
            type:"info"
        },
        {
            id:10,
            title:"Notice Title #10",
            content:"Notice Content 10",
            date:"2016-09-27",
            type:"info"
        }
    ];
    vm.gotoCreate = function(){
        $location.hash('create');
        $anchorScroll();
    }
    vm.noticeEdit =false;
    vm.getNotice ={};

    var temp ={};
    vm.noticeView = function(data){
        vm.viewNoticeDetail =true;
        vm.getNotice =data;
        temp.title = data.title;
        temp.content = data.content;
        temp.type = data.type;

    }

    vm.cancelEdit = function(){
        vm.noticeEdit=!vm.noticeEdit;
        vm.getNotice.title = temp.title;
        vm.getNotice.content = temp.content;
        vm.getNotice.type = temp.type;
    }
    console.log("Notice Page Ctrl.............");
})