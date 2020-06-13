class CommentsController < ApplicationController 
    
    def index   
        comments = Comment.all 
        render(json: comments, :include => :user)
    end

    def create 
        comment = Comment.create({
            text: params[:text],
            stance: params[:stance],
            changed_mind: params[:changed_mind],
            made_me_think: params[:made_me_think],
            flag: params[:flag],
            user_id: params[:user_id],
            post_id: params[:post_id]
        })

        render(json: comment, :include => :user)
    end

    def increment 
        comment = Comment.find(params[:id])

        comment.update({params[:currentKey].to_sym => params[:newValue]})
        
        render(json: comment, :include => :user)
    end

   

    def show 
        comment = Comment.find(params[:id])

        render(json: comment, :include => :user)
    end 

    def destroy 
        comment = Comment.find(params[:id])
        comment.destroy()
    end 

end 