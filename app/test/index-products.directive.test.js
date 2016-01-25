'use strict';

describe('myApp.index products directive', function() {

  beforeEach(module('myApp.index'));

  var element;
  var scope;
  beforeEach(module('myApp.index'));
  beforeEach(module('index/ProductTemplate/ProductTemplate.html'))
  beforeEach(inject(function($compile, $rootScope){
    scope = $rootScope.$new();
    scope.product = '{"number": 2, "name": "Product1", "price": 1234.56, "descriptionText":"Some information about Product1", "checked": false, "description": false}';
    element = angular.element('<index-product product="{{product}}"></index-product>');
    $compile(element)(scope);
    $rootScope.$digest();
  }));

  it('should hide property field for empty property and remove button', function (){
    expect(element.find('.product-price').length).toBe(1);
    expect(element.find('.product-checkbox').length).toBe(1);
    expect(element.find('.product-name').length).toBe(2);
    expect(element.find('.updateProduct').length).toBe(1);
    expect(element.find('.description').length).toBe(1);

    expect(element.find('.description>p').text()).toBe('Some information about Product1');
  });
});