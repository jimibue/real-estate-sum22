class Api::PropertiesController < ApplicationController
    
    def index
      # we define available in property.rb
      # calling available on the class
      render json: Property.available
    end
end
