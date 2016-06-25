(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .factory('group', GroupFactory);

  /* @ngInject */
  function GroupFactory($http, $q) {
    // Service logic
    // ...

    var meaningOfLife = 99;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }

})();