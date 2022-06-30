class Api::BuyersController < ApplicationController

    def index
      agent = Agent.find(params[:id])  
      render json: agent.buyers
    end

    def show
        buyer = Buyer.find(params[:id])
        render json: Buyer.my_homes(buyer.id, buyer.cities)
    end
end
