Rails.application.routes.draw do
  default_url_options :host => 'localhost:3000'
  # resources :discussions
  resources :users, :discussions, :invitations, :posts, :changedminds, :mademethinks, :follows

  get('/comments', to: 'comments#index')
  
  post('/comments', to: 'comments#create')
  
  get('/comments/:id', to: 'comments#show')
  
  patch('/comments/:id', to: 'comments#increment')

  delete('/comments/:id', to: 'comments#destroy')

  post('/login', to: 'authentication#login')
  
  get('/login', to: 'authentication#get_session_user')

  get('/logout', to: 'authentication#logout')
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
