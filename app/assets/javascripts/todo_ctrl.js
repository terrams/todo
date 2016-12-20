
(function () {
  "use strict";

  angular.module("app").controller("todosCtrl", function($scope) {

    $scope.firstTask = "Jump";
    $scope.secondTask = "stand";
    $scope.thirdTask = "sit";
    $scope.tasks = ['one', 'two', 'three'];

    $scope.addTask = function(inputText) {
      // if ($scope.newTask !== "" && $scope.newTask !== null && typeof $scope.newTask !== "undefined") {
      if (inputText !== "" && inputText !== null && typeof inputText !== "undefined") {
        $scope.tasks.push(inputText);
        $scope.newTask = null;
      }
    };

    $scope.deleteTask = function(deleteTask) {
      var index = $scope.tasks.indexOf(deleteTask);
      $scope.tasks.splice(index, 1);
    };

  });
})();