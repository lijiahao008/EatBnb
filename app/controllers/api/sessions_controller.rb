class Api::SessionsController < ApplicationController

	def create
		if request.env['omniauth.auth']
	    @user = User.from_omniauth(request.env['omniauth.auth'])
			login(@user)
			redirect_to "/"
			return
	  else
			@user =  User.find_by_credentials(
	      params[:user][:email],
	      params[:user][:password]
	    )
		end

    if @user
			login(@user)
			render "api/users/show"
		else
			render(
        json: ["Invalid email/password combination"],
        status: 401
      )
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end
end
