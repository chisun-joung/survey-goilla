(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .controller('GroupController', GroupController);

  /* @ngInject */
  function GroupController($scope, $log, groupManager) {
    groupManager.getGroup(1).then(function(groupData){
      $scope.group = groupData;
    });

};

})();
