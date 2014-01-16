/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 14/01/14
 * Time: 03:01 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

personApp.controller('PersonCtrl',['$scope', '$http',
    function($scope, $http){
        $http.get('data/person.json').success(function(data) {
            $scope.persons = data;
        });

        $scope.orderProp = 'name';
    }
]);