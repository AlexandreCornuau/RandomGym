# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "Destruction des training_exercices"
TrainingExercice.destroy_all

puts "Destruction des exercices"
Exercice.destroy_all
puts "creation des exercices"


i = 1
while i < 36 do
  is = i.to_s
  Exercice.create(name: is, description: Faker::Book.publisher, image: "#{is}.png")
   puts "Exercice #{i} créé" 
  i += 1
end

puts "destruction des trainings"
Training.destroy_all
puts"done"
