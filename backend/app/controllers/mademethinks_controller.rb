class MademethinksController < ApplicationController 
    
    def index   
        mademethinks = Mademethink.all 
        render(json: mademethinks)
    end

    def create 
        mademethink = Mademethink.create({
            comment_id: params[:comment_id],
            user_id: params[:user_id]
        })

        render(json: mademethink, :include => [:user, :comment])
    end

  
    def show 
        mademethink = Mademethink.find(params[:id])

        render(json: mademethink, :include => [:user, :post])
    end 

    def destroy 
        mademethink = Mademethink.find(params[:id])
        mademethink.destroy()
    end 

end 