Rails.application.routes.draw do
  resources :favorites
  resources :resources
  resources :user_resources, only: [:index, :show]
  resources :resources, only: [:index, :show, :create, :update, :destroy]
  resources :categories, only: [:index, :show, :create]
  resources :contacts, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  



  
  post '/login', to: 'sessions#create'
  get '/authorized_user', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'

end
