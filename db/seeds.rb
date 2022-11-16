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

resource3 = Resource.create(title: 'Contemporary Movement Exploration with TJ', description: 'I love to be amongst other movement geeks and somatic cartographers, exploring the body’s relationship with motion through meditations and stories, and the embodied illustration of music. Together in this class, we’ll breathe life into our intentions, explore our creative play space, build up some heat as we ground and stabilize our bodies, groove with a dance neighbor for a brain game or two, and then we’ll crank the music and jam some musically driven phrasework. This class is geared towards experienced movers - meaning, if you don’t have experience improvising or learning choreography, this class may be challenging. ', date: '11/22/2022 19:00', image: 'https://lh3.googleusercontent.com/p/AF1QipNxAVO-iGfBZnx32ssd4GyNEvIRq75QijzsH6sq=s680-w680-h510', location_name: 'Courageous Yoga Denver', address: '1280 Sherman St UNIT 214, Denver, CO', email: 'courageousyogadenver@gmail.com', website:'courageousyoga.us', social:'https://www.instagram.com/courageousyoga/', category_id: 1, user_id: 1)

resource4 = Resource.create(title: 'Intermediate Adult Ballet with Kris Kehl', description: 'Seeing a need to make ballet accessible to those who had never danced as well as those who wished to continue to dance for the joy of it, Kris took over the struggling adult program when she became a company member of Colorado Ballet.  Beginning with two students, Kris taught evening classes after full days of rehearsal.  The program grew through two studio moves and twenty years as a result of Kris’ dedication.  When she stopped performing in 1998, Kris focused on expanding the offerings for adult students. Kris teaches adult ballet at Denver Dance Center Mondays, Fridays, Saturdays and Sundays.  See the main schedule for times.', date: '', image: 'https://images.gofundme.com/-Sv858ImQDEcRxjuBMTclb9X5xw=/960x960/https://d2g8igdw686xgo.cloudfront.net/39056446_1585241021362966_r.jpeg', location_name: 'Denver Dance Center', address: '2496 W. 2nd Avenue, Unit 3, Denver, CO 80223', email: 'denverdancecenter@gmail.com', website:'https://www.denverdancecenter.com/home', social:'https://www.facebook.com/denverdancecenter/', category_id: 1, user_id: 1)

resource5 = Resource.create(title: 'Beginner African Brazilian Samba', description: 'In this class, you will learn the fundamentals of Brazilian and African dances of the diaspora including folkloric, Orixá and Silvestre-inspired dance. We will start with a warm-up and work on cardio, strength, endurance, and choreography. Please tip your musicians.', date: '11/12/2022 11:00', image: 'https://www.sambacolorado.com/wp-content/uploads/2018/03/S-507-1024x791.jpg', location_name: 'Denver Dance Center', address: '2496 W. 2nd Avenue, Unit 3, Denver, CO 80223', email: 'info@sambacolorado.com', website:'https://www.sambacolorado.com/', social:'https://linktr.ee/KebrinaDeJesus', category_id: 1, user_id: 1)

resource6 = Resource.create(title: 'Hannah Khan Dance Company Class', description: 'Hannah Kahn is a master teacher of modern dance technique. Her class begins with a floor barre, then progresses to upper body work and moves to the barre. A warm up combination follows preparing the class for the main combination which is drawn from Hannah Kahn’s repertory. The main influences on Kahn’s teaching are Jose Limon technique (Sally Stackhouse, Betty Jones, Jennifer Muller); ballet (Zena Rommett, Maggie Black): and in a more indirect way, the techniques of Martha Graham, Merce Cunningham and Paul Sanasardo. Class Schedule: Intermediate/Advanced classes are on Tuesdays  and Thursdays from 10:00 to 11:45. Intermediate classes are on Saturdays from 10:30-12:00', date: '', image: 'https://hannahkahndance.org/wp-content/uploads/2015/03/classes3.jpg', location_name: 'Hannah Khan Studios', address: '75 S. Cherokee St, Denver, CO 80223', email: 'hannahkahndance@gmail.com', website:'https://hannahkahndance.org/', social:'https://www.instagram.com/hannahkahndance/', category_id: 1, user_id: 1)

resource7 = Resource.create(title: 'Contemporary Movement with Brandon Welch', description: 'My class aims to create a safe space where dancers can explore full-bodied movement and engage with principles of Contemporary Release Technique. Through expression of grounded physicality, deep breathing and releasing tension in the body, participants can experience a renewal and strengthening of the mind and body. This class will encourage participants to take risks as well as move freely and confidently through floor work, partnering and contemporary phrase work.', date: '11/23/2022 11:00', image: 'https://images.squarespace-cdn.com/content/v1/5b215eebfcf7fdf81a65eccb/1651524660519-QVOUEZ1CHNGA3D975TZ9/BrandonWelch-IHeartGDC2017-byScottShaw-6.jpg?format=1500w', location_name: 'Hannah Khan Studios', address: '75 S. Cherokee St, Denver, CO 80223', email: 'brandonthomaswelch@gmail.com', website:'https://www.brandonthomaswelch.com/', social:'', category_id: 1, user_id: 1)

resource8 = Resource.create(title: 'UNDERGROWTH Denver Class Series', description: 'Join us for class every Tuesday from 10-11:45 am at 910Arts on Santa Fe in the capoeira studio. Our class series rotates teachers every two weeks to highlight the diversity of experience here in the dance community. Classes are on a sliding scale from $7-20. Classes are held every Tuesday at 10 am at 910 Santa Fe Drive.', date: '', image: 'https://presentingdenver.org/wp-content/uploads/2022/04/Undergrowth-logo-5-1.jpg', location_name: '', address: '910 Santa Fe Drive', email: 'Caroline.sharkey98@gmail.com', website:'https://undergrowthdenver.com/', social:'https://www.instagram.com/undergrowth_denver/', category_id: 1, user_id: 1)



puts "done seeding!!! OPA!"
