/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 14/01/14
 * Time: 03:35 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

personApp.controller('PersonListCtrl',['$scope', 'Person',
    function($scope, Person) {
        $scope.persons = Person.query();
        $scope.orderProp = 'age';
    }
]);