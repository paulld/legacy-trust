class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request

    if @contact.deliver
      Message.create(contact_params)
      render :status => 202
    else
      render :status => 422
    end
  end

private
  def contact_params
    params.require(:contact).permit(:name, :email, :telephone, :message)
  end
end
