/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 15/01/14
 * Time: 10:52 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var personControllers = angular.module('personControllers', []);

personControllers.controller('PersonListCtrl',['$scope', 'Person',
    function($scope, Person) {
        $scope.persons = Person.query();
        $scope.orderProp = 'age';
    }
]);

personControllers.controller('PersonDetailCtrl',['$scope', '$routeParams', 'Person',
    function($scope, $routeParams, Person) {
        $scope.person = Person.get({personName: $routeParams.personName}, function(person) {
            $scope.mainImageUrl = person.pictureUrl;
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }
]);