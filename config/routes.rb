Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to:"home_page#homepage"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    get 'users', to: 'users#index'
    resource :session, only: [:create, :destroy, :show]
    resources :menus, only: [:index, :create, :update, :show, :destroy]
    resources :menu_reviews, only: [:create, :update]
    resources :reservations, only: [:create, :index]
    resources :conversations, only: [:index, :show, :destroy] do
    member do
      post :reply
      post :restore
      post :mark_as_read
      post :mark_as_unread
    end
    collection do
      delete :empty_trash
    end
  end
  resources :messages, only: [:create]
  end

  get 'auth/:provider/callback', to: 'api/sessions#create', :defaults => { :format => 'json' }
  get '/', to: 'home_page#homepage'
end
