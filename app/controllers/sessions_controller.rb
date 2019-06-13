require 'bcrypt'

class SessionsController < ApplicationController
  def new
    user = User.new
  end

  def create
    user = User.find_or_create_by(user_params)

    session[:user_id] = user.id

    render json: {success: true}, status: 200
  end

  def login
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {success: true}, status: 200
    else
      render json: {errors: "Email and/or password not valid. Please try again."}, status: 422
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_path
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end