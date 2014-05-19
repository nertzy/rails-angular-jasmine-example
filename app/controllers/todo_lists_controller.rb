class TodoListsController < ApplicationController
  respond_to :json

  def index
    respond_with(
      { items: [ "Write Test", "Write Code", "Refactor" ] }
    )
  end
end
