/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 14/01/14
 * Time: 03:36 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

personApp.controller('PersonDetailCtrl',['$scope', '$routeParams', 'Person',
    function($scope, $routeParams, Person) {
        $scope.person = Person.get({personName: $routeParams.personName}, function(person) {
            //$scope.imageClicked = person.pictureUrl;
        });

        $scope.setImage = function(imageUrl) {
            $scope.imageClicked = imageUrl;
        }
    }
]);