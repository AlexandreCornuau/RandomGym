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
      cycle_length = 5
      position_in_cycle = current_user.trainings.count % cycle_length
      last_name_exercices = []

      if position_in_cycle > 0
        last_trainings = current_user.trainings.last(position_in_cycle)
        last_trainings.each do |training|
          training.exercices.each do |exercice|
            last_name_exercices << exercice.name
          end
        end
      end

      if @training.save
        exercices_all = Exercice.all
        exercice_training_today = exercices_all.reject do |exercice|
          last_name_exercices.include?(exercice.name)
        end

        exercice_training_today.sample(7).each do |exercice|
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
