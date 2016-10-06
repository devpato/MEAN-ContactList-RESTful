var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
$http.get('/contactlist').success(function(response){
    console.log("I got the data i requested");//shows this message in the browser
    $scope.contactList = response; // put the data in our html
});
    //Can data
    //we comment this out. this was for testing purposes
   /* person1 = {
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
    $scope.contactList = contactList;*/
}]);