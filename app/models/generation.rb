class Generation < ApplicationRecord

  mount_uploader  :avatar, AvatarUploader
  mount_uploaders :images, ImageUploader
  mount_uploaders :videos, VideosUploader

  has_rich_text :features
  has_rich_text :vulnerability

  has_many :defects
  has_many :repairs
  has_many :phones
  has_many :models
  has_many :mods
  has_many :cources

end
