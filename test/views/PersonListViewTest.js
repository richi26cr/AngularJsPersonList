/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 15/01/14
 * Time: 03:40 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

describe('PersonListView', function() {

    beforeEach(function() {
        browser().navigateTo('index.html#/persons');
    });


    it('should filter the person list as user types into the search box', function() {
        expect(repeater('.persons li').count()).toBe(5);

        input('query').enter('Richard');
        expect(repeater('.persons li').count()).toBe(1);

        input('query').enter('am');
        expect(repeater('.persons li').count()).toBe(2);
    });


    it('should be possible to control person order via the drop down select box', function() {
        input('query').enter('Quebradilla');

        expect(repeater('.persons li', 'Person List').column('person.name')).
            toEqual(["Richard"]);

        select('orderProp').option('Alphabetical');

        expect(repeater('.persons li', 'Person List').column('person.name')).
            toEqual(["Richard"]);
    });


    it('should render person specific links', function() {
        input('query').enter('Richard');
        element('.persons li a').click();
        expect(browser().location().url()).toBe('/persons/Richard');
    });
});