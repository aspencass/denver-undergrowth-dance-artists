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


puts "seeding categories"
category1 = Category.create(name: 'Class')
category2 = Category.create(name: 'Workshop')
category3 = Category.create(name: 'Performance')
category4 = Category.create(name: 'Rehearsal Space')
category5 = Category.create(name: 'Funding Opportunity')
category6 = Category.create(name: 'Audition')
category7 = Category.create(name: 'Choreographic Opportunity')
category8 = Category.create(name: 'Jobs & Internships')
category9 = Category.create(name: 'Volunteering')
puts "categories seeded"


puts "seeding resources"
resource1 = Resource.create(title: 'Gaga Class', description: 'Gaga classes are based on a deep activation of the body and physical sensations. While class instructions are often imbued with rich imagery that stimulates the imagination, the layering of information builds into a multisensory, physically challenging experience. Gaga offers a workout that develops flexibility, stamina, agility, coordination, and efficiency of movement. The exploration of form, speed, and effort is accompanied by the playful investigation of soft and thick textures, delicacy and explosive power, and understatement and exaggeration. Ohad Naharin continues to develop and research his movement language, and the classes evolve and vary accordingly. We invite you to join us in the studio and connect to your passion to move.', date: '11/12/2022 11:00', image: 'https://d2g8j2z9.stackpathcdn.com/wp-content/uploads/2019/02/GAGA-C-Int-Summer-2017-169_Ascaf.jpg', location_name: 'Moovment House', address: '3250 E 6th Ave, Denver, CO 80206', email: 'cassidymoves@gmail.com', website:'https://www.gagapeople.com/en/united-states/', social:'https://www.instagram.com/cassidymoves/', category_id: 1, user_id: 1)



resource2 = Resource.create(title: 'Moovment Class with Mary Lynn Lewark', description: 'I am many beginnings. I stand in all my edges and then ease into more. I listen and feel. I fall into movement. I draw on different forms form the research of gaga movement language, ballet, improv, Ilan Lev, yoga. I have a fearless range of textures, sweat, joy and tears. I draw our the innate physicality of my body and heart. I am groove.', date: '11/11/2022 12:00', image: 'https://images.squarespace-cdn.com/content/v1/5b4f5fd5af20966d6ec57815/6983ea7a-49e0-414f-a38b-0efc76675dd8/b%26w%2Bbone.highres-07928.jpg?format=2500w', location_name: 'Moovment House', address: '3250 E 6th Ave, Denver, CO 80206', email: 'moovment.house@gmail.com', website:'https://moovment.house/', social:'https://www.instagram.com/moovment.house/', category_id: 1, user_id: 2)



puts "done seeding!!! OPA!"
