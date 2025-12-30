class ExercicesController < ApplicationController
  def index
    @exercices = Exercice.all
  end

  def show
  end

end
