'use strict';

describe('myApp.index filter', function() {

  beforeEach(module('myApp.index'));

  describe('index currency filter', function(){

    it('should format currency and change to string', inject(function(customCurrencyFilter) {
      //spec body
      expect(customCurrencyFilter(1234.1234)).toEqual("1234,12");
    }));

  });
});