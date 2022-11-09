# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding users"
user1 = User.create(username: "cassidy", password:"123")
user2 = User.create!(username:'marylynn', password:'123')
puts "users seeded"

puts "seeding data"

contact1 = Contact.create(name: 'Cassidy', email:'cassidy@email.com', phone: '1234567890', website: 'https://www.gagapeople.com/en/united-states/', social: 'https://www.instagram.com/cassidymoves/')
category1 = Category.create(name: 'Class')
resource1 = Resource.create(title: 'Gaga Class', description: 'This class focuses on connecting movement to sensation.', date: '11/12/2022 11:00', image: 'https://d2g8j2z9.stackpathcdn.com/wp-content/uploads/2019/02/GAGA-C-Int-Summer-2017-169_Ascaf.jpg', location_name: 'Moovment House', address: '3250 E 6th Ave', city: 'Denver', state: 'CO', zip: '80206', category_id: 1, contact_id: 1)

UserResource.create(resource_id: 1, user_id: 1 )

contact2 = Contact.create(name: 'Mary Lynn', email:'ml@email.com', phone: '0987654321', website: 'https://moovment.house/', social: 'https://www.instagram.com/cassidymoves/')
category2 = Category.create(name: 'Class')
resource2 = Resource.create(title: 'Moovment Class with Mary Lynn Lewark', description: 'I am many beginnings. I stand in all my edges and then ease into more. I listen and feel. I fall into movement. I draw on different forms form the research of gaga movement language, ballet, improv, Ilan Lev, yoga. I have a fearless range of textures, sweat, joy and tears. I draw our the innate physicality of my body and heart. I am groove.', date: '11/11/2022 12:00', image: 'https://images.squarespace-cdn.com/content/v1/5b4f5fd5af20966d6ec57815/6983ea7a-49e0-414f-a38b-0efc76675dd8/b%26w%2Bbone.highres-07928.jpg?format=2500w', location_name: 'Moovment House', address: '3250 E 6th Ave', city: 'Denver', state: 'CO', zip: '80206', category_id: 2, contact_id: 2)

UserResource.create(resource_id: 2, user_id: 2 )




puts "done seeding"
