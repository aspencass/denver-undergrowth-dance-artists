class UserResourcesController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :show ]

    def index
        userResource = UserResource.all 
        render json: userResource, status: :ok
    end

    def show
        userResource = UserResource.find(params[:id])
        render json: userResource, status: :ok
    end
    
end
