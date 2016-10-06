var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    //Can data
    person1 = {
        name: 'Tim',
        email: 'tim@gmail.com',
        number: '(111)-222-333'
    }
    person2 = {
        name: 'Mary',
        email: 'mary@gmail.com',
        number: '(666)-222-999'
    }
    person3 = {
        name: 'Alex',
        email: 'alex@gmail.com',
        number: '(444)-777-333'
    }
    var contactList = [person1, person2, person3];
    $scope.contactList = contactList;
}]);