'use strict';

angular.module('listsApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
