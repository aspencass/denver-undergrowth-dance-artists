Rails.application.routes.draw do
  resources :favorites, only: [:index, :show]
  resources :resources, only: [:index, :show, :create, :update, :destroy]
  resources :categories, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  



  
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  get '/authorized_user', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'

end
