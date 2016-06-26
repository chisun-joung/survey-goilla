(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .controller('GroupController', GroupController);

  /* @ngInject */
  function GroupController($scope, Group) {
    var group = new Group();
    group.load(1).then(function(groupData){
      $scope.group = groupData;
    });;    
  
};

})();