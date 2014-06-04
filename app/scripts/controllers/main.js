'use strict';

angular.module('listsApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.lists = [
      { id: 1, title: "Grocery" },
      { id: 2, title: "Suburbs"}
    ];

    $scope.items = [
      { id: 1, title: "Bananas", list: "Grocery" },
      { id: 2, title: "Apples", list: "Grocery" },
      { id: 3, title: "Homebrew", list: "Suburbs" },
    ];

    $scope.addItem = function(e){
      e.preventDefault();
      console.log($scope.item);
      var items = [{ id: 4, title: $scope.item.name, list: $scope.item.list }];
      $scope.items = items.concat($scope.items);
      $scope.item = {};
    };

    $scope.selectList = function(e, list) {
      angular.forEach($scope.lists, function(newList, i){
        newList.selected = list.id == newList.id;
      });
    };

  });
