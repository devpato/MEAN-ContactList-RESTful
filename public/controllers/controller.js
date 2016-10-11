var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    var refresh = function(){
        $http.get('/contactlist').success(function(response){
            console.log("I got the data i requested");//shows this message in the browser
            $scope.contactList = response; // put the data in our html
            $scope.contact = "";
        });
     };
    refresh();
    
    $scope.addContact = function () {
        console.log($scope.contact);
        //this sends the input data to the server
        $http.post('/contactList',$scope.contact).success(function(response){
            console.log(response);
            refresh();
        });     
    };
    
}]);



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