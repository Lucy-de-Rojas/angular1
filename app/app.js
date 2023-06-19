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
                belt: 'ellow',
                rate: 13.54,
                available: true,
        }, {
                name: 'LucyZ',
                belt: 'black',
                rate: 26.54,
                available: false,
        }, {
                name: 'Benjiz',
                belt: 'red',
                rate: 36.56,
                available: true,
        }
];



$scope.removeNinja = function (ninja) {
        let removedNinjaIndex = $scope.ninjas3.indexOf(ninja);

        $scope.ninjas3.splice(removedNinjaIndex, 1);




}








}]);