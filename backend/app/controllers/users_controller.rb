class UsersController < ApplicationController

    def index
        users = User.all
        render(json: users)
    end
    
    def create
            user = User.create({
                first_name: params[:firstName],
                last_name: params[:lastName],
                password: params[:password],
                email: params[:email],
                image: params[:image],
                verified: params[:verified],
                one_line_credential: params[:one_line_credentials],
                biographical_description: params[:biographical_description]
            })

            render(json: user)
     
    end

    def show    
        user = User.find(params[:id])

        render(json: user)
    end 

    def update 
        user = User.find(params[:id])
        user.update({
            first_name: params[:firstName],
            last_name: params[:lastName],
            password: params[:password],
            email: params[:email],
            image: params[:image],
            verified: params[:verified],
            one_line_credential: params[:one_line_credentials],
            biographical_description: params[:biographical_description]
        })
        render(json: user)
    end 


    def destroy 
        user = User.find(params[:id])
        user.destroy()
    end


end