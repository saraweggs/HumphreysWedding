Rails.application.routes.draw do

  get '/guests', to: 'guests#index'
  get '/guests/:id', to: 'guests#show'
  post '/guests', to: 'guests#create'
  delete '/guests/:id', to: 'guests#delete'
  put '/guests/:id', to: 'guests#update'

end
