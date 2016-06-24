(function () {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .config(Config);

  /* @ngInject */
  function Config($stateProvider) {
    $stateProvider
      .state('group-management', {
        url: '/group-management',
        templateUrl: 'app/group-management/group-management.html',
        controller: 'GroupManagementCtrl'
      });
  }
  
})();