class TrainingsController < ApplicationController
  def index
    @trainings = Training.all
  end

  def show
    @training = Training.find(params[:id])
    @exercices =  @training.exercices 


  end

  def create
    @training = Training.new(date: Date.today, user: current_user)
    if @training.save
      Exercice.all.sample(6).each do |exercice|
        TrainingExercice.create(training: @training, exercice: exercice)
      end
    redirect_to training_path(@training), status: :see_other
    else

      render :new, status: :unprocessable_content
    end



  end


end
