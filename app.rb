require 'bundler/setup'
require 'sinatra/base'

class App < Sinatra::Application
  get '/' do
    cache_control :public

    haml :index, layout: :layout
  end
end
