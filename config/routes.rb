Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :destroy]
    resources :playlists, only: [:create, :destroy, :update, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :playlist_songs, :path => '/playlists/:playlist_id/songs/:song_id', only: [:create]
    delete '/playlists/:playlist_id/songs/:song_id' => 'playlist_songs#destroy'
    resources :songs, only: [:show, :index]
    resources :search, only: [:index]
    resources :likes, only: [:index, :create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
