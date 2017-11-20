Rails.application.routes.draw do
  namespace :api do
    resources :teams, except: [:new, :edit]
  end
end
