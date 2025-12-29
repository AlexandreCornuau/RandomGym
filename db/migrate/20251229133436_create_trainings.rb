class CreateTrainings < ActiveRecord::Migration[7.1]
  def change
    create_table :trainings do |t|
      t.datetime :date
      t.references :user, null: false, foreign_key: true
      t.references :exercice, null: false, foreign_key: true

      t.timestamps
    end
  end
end
