/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 14/01/14
 * Time: 03:40 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict'

var personServices = angular.module('personServices', ['ngResource']);

personServices.factory('Person', ['$resource',
    function($resource){
        return $resource('persons/:personName.json', {}, {
            query: {method:'GET', params:{personName:'persons'}, isArray:true}
        });
    }]);