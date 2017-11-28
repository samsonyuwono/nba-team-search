Rails.application.routes.draw do

  root to: 'home#index'

  namespace :api do
    resources :players, :only => [:index, :create, :show, :update]
    resources :teams, except: [:new, :edit] do
      resources :players, :only =>[:index]
    end
  end
end
