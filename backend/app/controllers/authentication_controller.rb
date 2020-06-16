class AuthenticationController < ApplicationController

    
    def login 
      user = User.find_by({email: params[:email]})
      if (user && user.authenticate(params[:password]))
          session[:user_id] = user.id
          # comments = user.comments
          # posts = user.posts
          # render(json: {success: true, user: user, comments: comments, posts: posts})
          render :json => user.to_json(:include => [:posts, :comments])
          # render(json: {{success: true}, {user: user, :include => [:comments, :posts, :changedminds, :mademethinks, :follows])}})
  
          # render(json:{ user: user, crops: crops, success: true, id: user.id})
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
              render(json: current_user, :include => [:comments, :posts])
          end
        end
        
        def logout
          session.destroy()
        end
  
  end
  