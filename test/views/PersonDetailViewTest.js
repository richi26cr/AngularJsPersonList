/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 16/01/14
 * Time: 09:22 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

describe('PersonDetailview', function() {

    beforeEach(function() {
        browser().navigateTo('index.html#/persons/Richard');
    });


    it('should display Richard page', function() {
        expect(binding('person.name')).toBe('Richard');
    });


    it('should display the person image as the main person image', function() {
        expect(element('.person-pic img').attr('src')).toBe('pic/img1.jpg');
    });

    it('should display empty value image before clicked the person image', function() {
        expect(element('.person-info img').attr('src')).toBe('');
    });

    it('should swap below image if a mai image is clicked on', function() {
        element('.person-pic img').click();
        expect(element('.person-info img').attr('src')).toBe('pic/img1.jpg');
    });
});