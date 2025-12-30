class RemoveExerciceFromTrainings < ActiveRecord::Migration[7.1]
  def change
    remove_reference :trainings, :exercice, null: false, foreign_key: true
  end
end
