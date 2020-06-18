class ChangedmindsController < ApplicationController 
    
    def index   
        changedminds = Changedmind.all 
        render(json: changedminds)
    end

    def create 
        changedmind = Changedmind.create({
            comment_id: params[:comment_id],
            user_id: params[:user_id]
        })

        render(json: changedmind, :include => [:user, :comment])
    end

  
    def show 
        changedmind = Changedmind.find(params[:id])

        render(json: changedmind, :include => [:user, :post])
    end 

    def destroy 
        changedmind = Changedmind.find(params[:id])
        changedmind.destroy()
    end 

end 