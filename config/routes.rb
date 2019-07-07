Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :playlists, only: [:create, :destroy, :update, :show, :index]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :playlistsongs, only: [:create, :destroy]
    resources :songs, only: [:show, :index]

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
