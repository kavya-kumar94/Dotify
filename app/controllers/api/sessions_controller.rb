class Api::SessionsController < ApplicationController

    def create
        errors = []
        
        if params[:user][:username] == ""
            errors << 'username'
        end

        # if params[:user][:email] == ""
        #     errors << 'email'
        # end

        if params[:user][:password] == ""
            errors << 'password'
        end



        if errors.length > 0
            render json: errors, status: 422
            return
        else
            @user = User.find_by_credentials(
                params[:user][:username],
                params[:user][:password]
            )

            
            if @user
                login(@user)
                render "api/users/show"
            else
                render json: ['Incorrect username/password.'], status: 422
            end
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end
