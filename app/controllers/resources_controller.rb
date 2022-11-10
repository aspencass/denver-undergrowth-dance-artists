class ResourcesController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :show]

    def index 
        render json: Resource.all, status: :ok
    end 

    def show    
        resource = Resource.find(params[:id])
        render json: resource, status: :ok
    end 

    def create
        resource = Resource.create!(resource_params)
        render json: resource, status: :created
    end 

    def update 
        resource = Resource.find(params[:id])
        resource.update!(resource_params)
        render json: resource, status: :accepted
    end 

    def destroy
        resource = Resource.find(params[:id])
        resource.destroy
        head :no_content 
    end 

    private

    def resource_params
        params.permit(:title, :description, :date, :image, :location_name, :address, :city, :state, :zip )
    end 

    
end