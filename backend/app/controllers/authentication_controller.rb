class AuthenticationController < ApplicationController

    
    def login 
      user = User.find_by({email: params[:email]})
      if (user && user.authenticate(params[:password]))
          session[:user_id] = user.id
          # render :json => user.to_json(:include => [:posts, :comments => {:include => [:post, :user]}, :changedminds, :mademethinks, :follows => {:include => [:user, :post]}])
          render :json => user.to_json(:include => [:posts, :follows => {:include => [:user, :post]}, :comments => {:include => [:user, :post]}, :changedminds=> {:include => [:user, :comment => {:include => [:post]}]}, :mademethinks=> {:include => [:user, :comment => {:include => [:post]}]}])

      else 
          render(json: {success: false, user: nil, message:'Not logged in.'})
      end
    end
  
      def get_session_user
          if session[:user_id]
              current_user = User.find(session[:user_id])
              render :json => current_user.to_json(:include => [:posts, :follows => {:include => [:user, :post]}, :comments => {:include => [:user, :post]}, :changedminds=> {:include => [:user, :comment => {:include => [:post]}]}, :mademethinks=> {:include => [:user, :comment => {:include => [:post]}]}])

              # render(json: current_user)
          else 
              current_user = nil
              render(json: current_user, :include => [:comments, :posts])
          end
        end
        
        def logout
          session.destroy()
        end
  
  end
  