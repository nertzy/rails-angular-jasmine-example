(function(){
  'use strict';

  describe('Service: TodoList', function () {
    beforeEach(module('todo'));

    it('returns a JSON object with todo items', inject(function ($httpBackend, TodoList) {
      var items;
      $httpBackend.when('GET', '/todo.json').respond({items: ["item 1", "item 2"]}, {});

      var todoList = TodoList.fetch().success(function(response){ items = response.items; });
      expect(items).not.toBeDefined();

      $httpBackend.flush();
      expect(items).toEqual(["item 1", "item 2"]);
    }));
  });
})();

