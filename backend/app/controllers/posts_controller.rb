class PostsController < ApplicationController 
    

    def index 
        posts = Post.all 

        render(json: posts)
    end 

    def create 
        post = Post.create ({
            original_post: params[:original_post], 
            image: params[:image], 
            user_id: params[:user_id],
            discussion_id: params[:discussion_id]
        })

        render(json: post)
    end 

    def show 
        post = Post.find(params[:id])
        
        render(json:post)
    end 

    def destroy 
        post = Post.find(params[:id])
        post.destroy()
    end

end