'use strict';

describe('Controller: GroupManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyGorillaApp'));

  var GroupManagementCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupManagementCtrl = $controller('GroupManagementCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
