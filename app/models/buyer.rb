class Buyer < ApplicationRecord
  belongs_to :agent
  serialize :cities, Array

  # instace method on a buyer
  def yo
    # cities an array here
    # self is the instance that just called this method
    self.cities.join('-')
  end
end
