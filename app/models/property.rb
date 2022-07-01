class Property < ApplicationRecord
  belongs_to :agent
  has_one :address

  # class method called on class
  # self here refers to the class
  def self.available
    Property.find_by_sql("SELECT ag.first_name, ag.last_name, ag.email, p.id as property_id, p.beds, p.sq_ft, p.price,p.agent_id, p.baths,a.city, a.zip, a.street, a.id as address_id
      FROM properties AS p
      INNER JOIN addresses AS a ON p.id = a.property_id
      INNER JOIN agents AS ag ON ag.id = p.agent_id
      WHERE p.sold <> TRUE;")
  end

  def self.cities
    cities = Address.find_by_sql("SELECT DISTINCT city 
      FROM addresses")
    cities.map do |c|
      c.city
    end
  end

  def self.by_city(city)
    Property.find_by_sql(["SELECT p.id, price, beds, baths, sq_ft, city, image
      FROM properties AS p
      INNER JOIN addresses AS a ON a.property_id = p.id
      WHERE SOLD <> true AND LOWER(a.city) = ?", city.downcase])
  end

  def self.cost_by_city
     Property.find_by_sql("
      SELECT DISTINCT a.city, SUM(sold_price) as total, STRING_AGG( CAST(p.sold_price AS VARCHAR),', ') AS prices, COUNT(*) price 
      FROM properties as p
      INNER JOIN addresses as a ON p.id = a.property_id
      WHERE p.sold IS true
      GROUP BY a.city;
      ")
  end

  # instance method called on instance
  def available
    # self here refers to the insance of class
    self.sold ? 'I have been sold' : 'I have not been sold'
  end
end
