class Training < ApplicationRecord
  belongs_to :user
  has_many :training_exercices
  has_many :exercices, through: :training_exercices
end
