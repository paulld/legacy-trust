Rails.application.routes.draw do
  
  root 'static_pages#index'
  
  get  'contact'    => 'contacts#new', as: 'contact'
  post 'contact'    => 'contacts#create', as: 'contacts'
  get  'messages'   => 'messages#index', as: 'messages'

  get '/*path' => 'static_pages#index'

end
