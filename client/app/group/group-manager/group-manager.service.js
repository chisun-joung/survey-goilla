(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .service('groupManager', GroupManager);

  /* @ngInject */
  function GroupManager($http, $q, Group) {
    this.getGroup = getGroup;
    this.setGroup = setGroup;

    var _store = {};
    var _getGrouInstance = function(id, groupData) {
      var instance = this._store[id];

      if(instance) {
        instance.setData(groupData);
      } else {
        instance = new Group(groupData);
        this._store[id]
      }

      return instance;
    }

    var _search = function(id) {
      return this._store(id);
    }

    var _load = function(id, deferred) {
      var self = this
        , group = new Group();
    }


  }

})();
