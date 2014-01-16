'use strict';

describe('PersonListCtrl controller', function(){

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(angular.mock.module('personApp'));
    beforeEach(angular.mock.module('personServices'));

    describe('PersonListCtrl', function(){
        var scope, ctrl, $httpBackend;

        beforeEach(angular.mock.inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('persons/persons.json').
                respond([{name: 'Richard'}, {name: 'Javier'}]);

            scope = $rootScope.$new();
            ctrl = $controller('PersonListCtrl', {$scope: scope});
        }));


        it('should create "persons" model with 2 persons fetched from xhr', function() {
            expect(scope.persons).toEqualData([]);
            $httpBackend.flush();

            expect(scope.persons).toEqualData(
                [{name: 'Richard'}, {name: 'Javier'}]);
        });


        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('age');
        });
    });
});