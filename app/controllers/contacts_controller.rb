class ContactsController < ApplicationController

    def index 
        render json: Contact.all, status: :ok
    end 

    def show
        contact = Contact.find(params[:id])
        render json: contact, status: :ok
    end 

    def create
        contact = Contact.create!(contact_params)
        render json: contact, status: :created
    end 
    
    private 

    def contact_params
        params.permit(:name, :email, :phone, :website, :social)
    end 
end
