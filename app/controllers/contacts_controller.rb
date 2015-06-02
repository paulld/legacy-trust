class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request

    if @contact.deliver
      puts ">>>>>>>>>DELIVER"
      Message.create(contact_params)
      render :status => 202
      # flash.now[:notice] = 'Thank you for your message. We will come back to you as soon as possible'
    else
      puts ">>>>>>>>>NOOOO DELIVER"
      render :status => 422
      # flash.now[:error] = 'You message could not be sent. Please try again.'
      # render :new
    end
  end

private
  def contact_params
    params.require(:contact).permit(:name, :email, :telephone, :message)
  end
end
