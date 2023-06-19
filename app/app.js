const myNinjaApp = angular.module('myNinjaApp', []);



myNinjaApp.config(function () {

        console.log('hello confoig');
})




myNinjaApp.run(function () {
        console.log('hello run');
});



myNinjaApp.controller('NinjaController', ['$scope',function ($scope) {

        $scope.message = "hello worldie";

        $scope.message2 = 'so clever';

        $scope.ninjas2 = ['BENJI','PAPA','MAMA'];

        $scope.ninjas3 = [{
                name: 'PAPAz',
                belt: 35,
                rate: 13.54
        }, {
                name: 'LucyZ',
                belt: 38,
                rate: 26.54,
        }, {
                name: 'Benjiz',
                belt: 14,
                rate: 36.56
        }
];








}]);