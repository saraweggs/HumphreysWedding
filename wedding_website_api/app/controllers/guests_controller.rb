class GuestsController < ApplicationController

  def index
      render json: Guest.all
  end

  def show
      render json: Guest.find(params["id"])
  end

  def create
      render json: Guest.create(params["guest"])
  end

  def delete
      render json: Guest.delete(params["id"])
  end

  def update
      p '============================='
      p params
      render json: Guest.update(params["id"], params["guest"])
  end

end
