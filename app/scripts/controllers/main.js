'use strict';

angular.module('listsApp')
  .controller('MainCtrl', function ($scope, $http, $location) {

    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.lists = [
      { id: 1, name: "Grocery" },
      { id: 2, name: "Suburbs"}
    ];

    $scope.items = [
      { id: 1, name: "Bananas" },
      { id: 2, name: "Apples" },
      { id: 3, name: "Homebrew" },
    ];

    $scope.addList = function(e){
      e.preventDefault();
      var list = { id: 1, name: $scope.list.name };
      $location.url('/lists/' + list.id);
    };

    $scope.addItem = function(e){
      e.preventDefault();
      var items = [{ id: 1, name: $scope.item.name }];
      $scope.items = items.concat($scope.items);
      $scope.item.name = "";
    };

    $scope.toggleComplete = function(e, item){
      var checked = e.target.checked;
      item.completed = checked;
    };

  });
