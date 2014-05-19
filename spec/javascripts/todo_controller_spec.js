(function(){
  'use strict';

  describe('Controller: TodoController', function () {
    var scope, fakeItems;

    beforeEach(module('todo', function($provide){
      fakeItems = [ "item 1", "item 2" ];

      var fakeTodoList = {
        fetch: function() {
          return {
            success: function(callback) {
              callback({ items: fakeItems });
            }
          }
        }
      };

      $provide.value("TodoList", fakeTodoList);
    }));

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      $controller('TodoController', { $scope: scope });
    }));

    it('populates the scope with the todo list', function () {
      expect(scope.items).toEqual(fakeItems);
    });
  });
})();
