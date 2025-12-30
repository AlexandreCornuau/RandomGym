class Exercice < ApplicationRecord
  has_many :training_exercices
  has_many :trainings, through: :training_exercices
end
