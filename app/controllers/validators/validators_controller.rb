module Validators
  class ValidatorsController < ApplicationController
    def username
      if User.where(username: params[:username]).exists?
        head :ok
      else
        head :no_content
      end
    end

    def email
      if User.where(email: params[:email]).exists?
        head :ok
      else
        head :no_content
      end
    end
  end
end
