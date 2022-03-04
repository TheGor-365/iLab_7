Rails.application.routes.draw do

  devise_for :users

  root to: 'pages#home'

  resources :owned_gadgets do
    resources :images, only: [ :create, :destroy ]
  end

  resources :categories do
    resources :images, only: [ :create, :destroy ]
  end

  resources :products do
    resources :images, only: [ :create, :destroy ]
  end

  resources :universities do
    resources :images, only: [ :create, :destroy ]
  end

  resources :quizzes do
    resources :images, only: [ :create, :destroy ]
  end

  resources :answers do
    resources :images, only: [ :create, :destroy ]
  end

  resources :quiz_questions do
    resources :images, only: [ :create, :destroy ]
  end

  resources :cources do
    resources :images, only: [ :create, :destroy ]
  end

  resources :chapters do
    resources :images, only: [ :create, :destroy ]
  end

  resources :posts do
    resources :images, only: [ :create, :destroy ]
  end

  resources :articles do
    resources :images, only: [ :create, :destroy ]
  end

  resources :order_items, only: [ :create, :update, :update_all, :destroy, :destroy_all ] do
    resources :images, only: [ :create, :destroy ]
  end

  resources :generations do
    resources :images, only: [ :create, :destroy ]
  end

  resources :models do
    resources :images, only: [ :create, :destroy ]
  end

  resources :mods do
    resources :images, only: [ :create, :destroy ]
  end

  resources :spare_parts do
    resources :images, only: [ :create, :destroy ]
  end

  resources :repairs do
    resources :images, only: [ :create, :destroy ]
  end

  resources :defects do
    resources :images, only: [ :create, :destroy ]
  end

  resources :phones do
    resources :images, only: [ :create, :destroy ]
  end

  resources :apple_watches do
    resources :images, only: [ :create, :destroy ]
  end

  resources :airpods do
    resources :images, only: [ :create, :destroy ]
  end

  resources :ipads do
    resources :images, only: [ :create, :destroy ]
  end

  resources :imacs do
    resources :images, only: [ :create, :destroy ]
  end

  resources :makbooks do
    resources :images, only: [ :create, :destroy ]
  end


  delete 'cart',  to: 'order_items#destroy_all'
  post   'cart',  to: 'order_items#update_all'

  match 'cart',   to: 'cart#show',      via: [ :get, :post ]
  match 'store',  to: 'pages#store',    via: [ :get, :post ]


  get 'terms',    to: 'pages#terms',    as: 'terms'
  get 'contacts', to: 'pages#contacts', as: 'contacts'

  get   'profiles/:username',                to: 'profiles#profile',          as: 'account'
  get   'profiles/:username/edit_profile',   to: 'profiles#edit_profile',     as: 'edit_account'
  patch 'profiles/:username',                to: 'profiles#update'

  get 'phones/phone_title/:id',              to: 'phones#phone_title',        as: 'phone_title'
  get 'phones/phone_image/:id',              to: 'phones#phone_image',        as: 'phone_photo'
  get 'phones/phone_video/:id',              to: 'phones#phone_video',        as: 'phone_video'
  get 'phones/phone_overview/:id',           to: 'phones#phone_overview',     as: 'phone_overview'

  get 'video_recordings',                    to: 'video_recordings#new',      as: 'video_recordings'
end
