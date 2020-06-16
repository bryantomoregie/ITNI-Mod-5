class FollowsController < ApplicationController 
    
    def index   
        follows = Follow.all 
        render(json: follows, :include => [:user, :post])
    end

    def create 
        follow = Follow.create({
            post_id: params[:post_id],
            user_id: params[:user_id]
        })

        render(json: follow, :include => [:user, :post])
    end

  
    def show 
        follow = Follow.find(params[:id])

        render(json: follow, :include => [:user, :post])
    end 

    def destroy 
        follow = Follow.find(params[:id])
        follow.destroy()
    end 

end 