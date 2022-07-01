# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

images = [
  'https://cdn.tollbrothers.com/communities/13198/images-resized/Pomona-Executive_Fariholm-Mediterranean_32_Front-Elevation-2_920.jpg',
  'https://cdn.abcotvs.com/dip/images/5245665_bighousepool.jpg?w=800&r=16%3A9',
  'https://charlotte.axios.com/wp-content/uploads/2022/01/02-DSC_7791_2_3_4_5.jpg.webp'
]
cities = [
    'Sandy',
    'Draper',
    'SLC',
    'Orem',
    'Provo',
    'Ogden',
    # 'Layton',
    # 'Midvale',
    # 'Murray'
  ]
  
  100.times do
    a = Agent.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.email,
      phone: Faker::PhoneNumber.cell_phone
    )
  
    50.times do
      num_cities = rand(0..cities.length - 1);
      Buyer.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        max_price: rand(99000..1500000),
        cities: cities.sample(num_cities),
        agent_id: a.id
      )
    end
    
    50.times do
      sold = rand(3) === 2
      price = rand(99000..1500000)
      percent_change = (-3..3).to_a.sample.to_f / 100
      sold_price = sold ? price * (1 + percent_change) : nil
      p = Property.create(
        price: price,
        image: images.sample,
        sold: sold,
        sold_price: sold_price,
        beds: rand(1..8),
        baths: rand(1..8),
        sq_ft: rand(1000..7000),
        agent_id: a.id
    )
    
    p.create_address(
      street: Faker::Address.street_address,
      zip: Faker::Address.zip_code,
      city: cities.sample
    )
    end
  end
  
  puts 'db seeded'
  puts "Agent size #{Agent.all.size}"
  puts "Buyer size #{Buyer.all.size}"
  puts "Property size #{Property.all.size}"
