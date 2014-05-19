(function(){
  'use strict';

  var app = angular.module("todo", []);

  app.factory('TodoList', function($http){
    return {
      "fetch" : function(){
        return $http.get("/todo.json");
      }
    }
  });
})();
