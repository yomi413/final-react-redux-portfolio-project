require 'pry'

class UsersController < ApplicationController
  def index
    users = User.all
  end

  def create
    user = User.new(user_params)
    
    if user.save && !user.email.empty? && !user.password.empty?
      render json: {success: true}, status: 200
    else
      render json: {errors: "Please fill in the blanks."}, status: 422
    end
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
