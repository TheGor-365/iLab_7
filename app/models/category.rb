class Category < ApplicationRecord

  mount_uploader  :avatar, AvatarUploader
  mount_uploaders :images, ImageUploader
  mount_uploaders :videos, VideosUploader

  has_many :products
  has_many :cources

end
