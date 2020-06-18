class DiscussionsController < ApplicationController 
    
    def index   
        discussions = Discussion.all 
        render(json: discussions, :include => :posts)
    end

    def create 
        discussion = Discussion.create({
            title: params[:title],
            description: params[:description],
            public_status: params[:public_status],
            image: params[:image]
        })

        render(json: discussion, :include => [:posts, :users])
    end

    def show 
        discussion = Discussion.find(params[:id])
        render(json: discussion, :include => [:posts, :users])
    end 

    def destroy 
        discussion = Discussion.find(params[:id])
        discussion.destroy()
    end 

end 