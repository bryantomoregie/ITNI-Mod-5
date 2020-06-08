class AuthenticationController < ApplicationController

    
    def login 
      user = User.find_by({email: params[:email]})
      if (user && user.authenticate(params[:password]))
          session[:user_id] = user.id
          render(json: {success: true, user: user})
      else 
          render(json: {success: false, user: nil, message:'Not logged in.'})
      end
    end
  
      def get_session_user
          if session[:user_id]
              current_user = User.find(session[:user_id])
              render(json: current_user)
          else 
              current_user = nil
              render(json: current_user)
          end
        end
        
        def logout
          session.destroy()
        end
  
  end
  