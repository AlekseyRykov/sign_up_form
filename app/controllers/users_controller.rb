class UsersController < ApplicationController
  def index
  end

  def check_my_value
    user = User.new(username: params[:id])
    user.validate
    if user.errors[:username].blank?
      head :ok
    else
      head :not_found
    end
  end
end
