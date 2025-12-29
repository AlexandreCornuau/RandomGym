class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def new
    @training = Training.new
  end

  def create
    raise
  end


end
