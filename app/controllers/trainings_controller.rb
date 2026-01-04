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
      last_training = current_user.trainings.last
      last_name_exercices = []
      if last_training
        last_exercices = last_training.exercices
        last_exercices.each do |exercice|
          last_name_exercices << exercice.name
        end
      end

      if @training.save
        exercices_all = Exercice.all
        exercice_training_today = exercices_all.reject do |exercice|
          last_name_exercices.include?(exercice.name)
         end

        exercice_training_today.sample(6).each do |exercice|
          TrainingExercice.create(training: @training, exercice: exercice)
        end
      redirect_to training_path(@training), status: :see_other

      else

        render :new, status: :unprocessable_content
      end



    end


  end


  # if @training.save
  #       Exercice.all.sample(6).each do |exercice|
  #         TrainingExercice.create(training: @training, exercice: exercice)
  #       end
  #     redirect_to training_path(@training), status: :see_other
