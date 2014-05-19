Rails.application.routes.draw do
  root 'welcome#index'
  get "/todo" => "todo_lists#index"
end
