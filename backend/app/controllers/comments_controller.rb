class CommentsController < ApplicationController 
    
    def index   
        comments = Comment.all 
        render(json: comments)
    end

    def create 
        comment = Comment.create({
            text: params[:text],
            stance: params[:stance],
            rating: params[:rating],
            flag: params[:flag],
            user_id: params[:user_id],
            post_id: params[:post_id]
        })

        render(json: comment)
    end

    def show 
        comment = Comment.find(params[:id])
        render(json: comment)
    end 

    def destroy 
        comment = Comment.find(params[:id])
        comment.destroy()
    end 

end 