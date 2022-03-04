Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

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


  # USER CART

  delete 'cart', to: 'order_items#destroy_all'
  post   'cart', to: 'order_items#update_all'

  match 'cart',  to: 'cart#show', via: [ :get, :post ]


  # STORE

  match 'store', to: 'pages#store', via: [ :get, :post ]


  # STATIC PAGES

  get 'terms',    to: 'pages#terms',    as: 'terms'
  get 'contacts', to: 'pages#contacts', as: 'contacts'


  # USER PROFILE

  get   'profiles/:username',              to: 'profiles#profile',      as: 'account'
  get   'profiles/:username/edit_profile', to: 'profiles#edit_profile', as: 'edit_account'
  patch 'profiles/:username',              to: 'profiles#update'


  # PHONES

  # phones index and show partials

  get 'phones/phone_title/:id',    to: 'phones#phone_title',    as: 'phone_title'
  get 'phones/phone_image/:id',    to: 'phones#phone_image',    as: 'phone_photo'
  get 'phones/phone_video/:id',    to: 'phones#phone_video',    as: 'phone_video'
  get 'phones/phone_overview/:id', to: 'phones#phone_overview', as: 'phone_overview'

  # phone index partials

  get 'phones_block', to: 'phones#phones_block', as: 'phones_block'
  get 'phones_table', to: 'phones#phones_table', as: 'phones_table'

  # phone edit partials

  get 'edit_phone_generation/:id/edit',     to: 'phones#edit_phone_generation',     as: 'edit_phone_generation'
  get 'edit_phone_title/:id/edit',          to: 'phones#edit_phone_title',          as: 'edit_phone_title'
  get 'edit_phone_avatar/:id/edit',         to: 'phones#edit_phone_avatar',         as: 'edit_phone_avatar'
  get 'edit_phone_images/:id/edit',         to: 'phones#edit_phone_images',         as: 'edit_phone_images'
  get 'add_more_phone_images/:id/edit',     to: 'phones#add_more_phone_images',     as: 'add_more_phone_images'
  get 'delete_phone_images/:id/edit',       to: 'phones#delete_phone_images',       as: 'delete_phone_images'
  get 'edit_phone_model_overview/:id/edit', to: 'phones#edit_phone_model_overview', as: 'edit_phone_model_overview'
  get 'edit_phone_videos/:id/edit',         to: 'phones#edit_phone_videos',         as: 'edit_phone_videos'

  # phone new partials

  get 'phones/new_phone_generation/new',     to: 'phones#new_phone_generation',     as: 'new_phone_generation'
  get 'phones/new_phone_title/new',          to: 'phones#new_phone_title',          as: 'new_phone_title'
  get 'phones/new_phone_avatar/new',         to: 'phones#new_phone_avatar',         as: 'new_phone_avatar'
  get 'phones/new_phone_images/new',         to: 'phones#new_phone_images',         as: 'new_phone_images'
  get 'phones/new_phone_model_overview/new', to: 'phones#new_phone_model_overview', as: 'new_phone_model_overview'
  get 'phones/new_phone_videos/new',         to: 'phones#new_phone_videos',         as: 'new_phone_videos'


  # USER VIDEO RECORDING

  get 'video_recordings', to: 'video_recordings#new', as: 'video_recordings'
end
