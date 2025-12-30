class Training < ApplicationRecord
  belongs_to :user
  has_many :training_exercices
end
