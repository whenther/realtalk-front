'use strict';

describe('Directive: talkEvent', function () {

  // load the directive's module
  beforeEach(module('realtalkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<talk-event></talk-event>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the talkEvent directive');
  }));
});
