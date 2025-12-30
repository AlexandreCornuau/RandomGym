# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "Destruction des exercices"
Exercice.destroy_all
puts "creation des exercices"

30.times do
  Exercice.create(name: Faker::Sport.sport, description: Faker::Book.publisher, image: Faker::Games::Heroes.name )
end

puts "destruction des trainings"
Training.destroy_all
puts"done"
