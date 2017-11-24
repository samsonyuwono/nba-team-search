Rails.application.routes.draw do
  namespace :api do
    resources :teams, except: [:new, :edit]
    resources :users, only: [:create, :destroy]
  end
end
