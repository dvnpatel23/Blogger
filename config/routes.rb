Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
        resources :users, only: [:create, :show]
        resource :session, only: [:create, :destroy, :show]
        resources :posts, only: [:create, :show, :index, :destroy, :update]

         get "/user_posts/:id", to: "posts#user_posts", as: :user_posts
    end
    root "static_pages#root"
end
