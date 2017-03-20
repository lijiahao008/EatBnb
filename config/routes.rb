Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to:"home_page#homepage"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy, :show]
    resources :menus, only: [:index, :create, :update, :show, :destroy]
    resources :menu_reviews, only: [:create, :update]
    resources :reservations, only: [:create, :index]
  end
  get 'auth/facebook/callback', to: 'api/sessions#create', :defaults => { :format => 'json' }
  get '/', to: 'home_page#homepage'
end
