class Api::PropertiesController < ApplicationController
    
    def index
      # we define available in property.rb
      # calling available on the class
      render json: Property.available
    end

    def cities
      render json: Property.cities
    end

    def by_city
      render json: Property.by_city(params[:city])
    end

    def city_cost
      render json: Property.cost_by_city
    end
end
