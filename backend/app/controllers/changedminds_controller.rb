class ChangedmindsController < ApplicationController 
    
    def index   
        changedminds = Changedmind.all 
        render(json: changedminds)
    end

    def create 
        changedmind = Changedmind.create({
            # text: params[:text],
            # stance: params[:stance],
            # changed_mind: params[:changed_mind],
            # made_me_think: params[:made_me_think],
            # flag: params[:flag],
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
        comment.destroy()
    end 

end 