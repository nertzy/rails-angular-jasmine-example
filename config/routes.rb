Rails.application.routes.draw do
  get "/todo" => "todo_lists#index"
end
