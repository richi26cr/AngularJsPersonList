/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 15/01/14
 * Time: 02:42 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

describe('PersonDetail Controller', function() {
    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(angular.mock.module('personApp'));
    beforeEach(angular.mock.module('personServices'));

     describe('PersonDetailCtrl', function(){
         var scope, $httpBackend, ctrl,
             xPersonData = function() {
                 return {
                     name: 'Person x',
                     pictureUrl: 'image/url1.png'
                 }
             };


         beforeEach(angular.mock.inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
             $httpBackend = _$httpBackend_;
             $httpBackend.expectGET('persons/xperson.json').respond(xPersonData());

             $routeParams.personName = 'xperson';
             scope = $rootScope.$new();
             ctrl = $controller('PersonDetailCtrl', {$scope: scope});
         }));


         it('should fetch person detail', function() {
             expect(scope.person).toEqualData({});
             $httpBackend.flush();

             expect(scope.person.name).toEqualData(xPersonData().name);

             expect(xPersonData().name).toEqualData('Person x');

             expect(scope.person.name).toEqualData('Person x');
         });
     });
});