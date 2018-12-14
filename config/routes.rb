Rails.application.routes.draw do
  root to:"users#index"

  devise_for :users

  resources :users

  namespace :validators do
    get :username, to: 'validators#username'
    get :email, to: 'validators#email'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
