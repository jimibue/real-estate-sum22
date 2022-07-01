Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
     get '/properties', to:'properties#index'
     get '/cities', to:'properties#cities'
     get '/cities/:city', to: 'properties#by_city'
     get '/agents', to: 'agents#index'
     get '/agents/:id/buyers', to: 'buyers#index'
     get '/buyers/:id', to: 'buyers#show'
     get '/city_cost', to:'properties#city_cost'
  end
end
