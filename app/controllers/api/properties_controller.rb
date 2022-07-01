class Api::PropertiesController < ApplicationController
    before_action :set_page, only:[:by_city]
    
    def index
      # we define available in property.rb
      # calling available on the class
      render json: Property.available
    end

    def cities
      render json: Property.cities
    end

    # without using find_by_sql
    # def by_city
    #   # Property.page(@page) -> this gives a specifc amount of data(25 entries by default)
    #   properties = Property.page(@page).by_city(params[:city])
    #   render json: {properties:properties, total_pages: properties.total_pages}
    # end

    # with using find_by_sql
    def by_city
      properties = Property.by_city(params[:city])
      # https://stackoverflow.com/questions/5606073/find-by-sql-and-pagination-with-kamanari
      properties = Kaminari.paginate_array(properties).page(@page)
      render json: {properties:properties, total_pages: properties.total_pages}
    end

    def city_cost
     render json:  Property.cost_by_city
    end

    private

    def set_page
      # @page = params[:page] ?  params[:page] : 1
      @page = params[:page] || 1
    end
end
