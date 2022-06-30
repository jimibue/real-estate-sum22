class Api::BuyersController < ApplicationController

    def index
      render json: 'buyers index'
    end

    def show
        render json: 'buyers show'
    end
end
