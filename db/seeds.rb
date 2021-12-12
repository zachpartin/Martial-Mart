# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all
User.destroy_all

@admin = User.create!(username: 'Zach', email: 'partinzd@gmail.com', password: '123456')

puts "#{User.count} users created" 

Product.create(name: '16 oz Fairtex gloves', price: 20, description: 'Lightly used, in great condition', img_url: 'https://m.media-amazon.com/images/I/91nmX4CCTYL._AC_SY450_.jpg', user: @admin)
Product.create(name: 'Everlast 100 lb heavy bag', price: 50, description: 'Had it for a few years but still in great shape, refilled it a month ago', user: @admin)
Product.create(name: 'Venum shin guards', price: 25, description: 'Good condition', user: @admin)

puts "#{Product.count} products created"