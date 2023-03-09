source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

gem "rails", "~> 7.0.2", ">= 7.0.2.2"
gem 'puma', '~> 5.0'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'image_processing', '~> 1.2'
gem 'bootsnap', '>= 1.4.4', require: false
gem 'pg'
gem 'devise'
gem 'rails_admin'
gem "omniauth-rails_csrf_protection"
gem 'mini_magick'
gem 'carrierwave'
gem "carrierwave-video"
gem 'cancancan'
gem 'activerecord-session_store'
# gem 'gmaps4rails'
# gem 'geocoder'
# gem 'sidekiq'
# gem 'mailcatcher'
# gem 'mail'
gem "actiontext"
gem 'paperclip', '~> 6.1'
gem 'paperclip-av-transcoder', '~> 0.6.4'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'carrierwave-yandex-disk', '~> 0.1.0'

# gem 'omniauth-github', github: 'omniauth/omniauth-github', branch: 'master'
# gem 'omniauth-facebook'
# gem 'omniauth-google-oauth2'

group :development, :test do
  gem 'shoulda-matchers'
  gem 'database_cleaner-active_record'
  gem "factory_bot_rails"
  gem "pry-rails"
  gem "email_spec"
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 4.1.0'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
end


group :test do
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  gem 'webdrivers'
  gem 'rspec-rails'
  gem 'factory_bot'
end
