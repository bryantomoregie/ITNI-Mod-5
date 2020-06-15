class InvitationsController < ApplicationController 
    
    def index   
        invitations = Invitation.all 
        render(json: invitations)
    end

    def create 
        invitation = Invitation.create({
            text: params[:text],
            stance: params[:stance],
            rating: params[:rating],
            flag: params[:flag],
            user_id: params[:user_id],
            post: params[:post_id]
        })

        render(json: invitation)
    end

    def show 
        invitation = Invitation.find(params[:id])
        render(json: invitation)
    end 

    def destroy 
        invitation = Invitation.find(params[:id])
        invitation.destroy()
    end 

end 