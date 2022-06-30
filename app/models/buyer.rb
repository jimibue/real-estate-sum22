class Buyer < ApplicationRecord
  belongs_to :agent
  serialize :cities, Array

  def self.my_homes(id, cities)
    Buyer.find_by_sql(["SELECT p.baths, p.beds, p.sq_ft, p.price, a.city, p.id 
      FROM buyers AS b
      INNER JOIN agents AS ag ON ag.id = b.agent_id 
      INNER JOIN properties AS p ON p.agent_id = ag.id AND p.price < b.max_price
      INNER JOIN addresses AS a ON a.property_id = p.id AND city = ANY('{#{cities.join(',')}}')
      WHERE b.id = ?;",id])
  end

  # instace method on a buyer
  def yo
    # cities an array here
    # self is the instance that just called this method
    self.cities.join('-')
  end
end
