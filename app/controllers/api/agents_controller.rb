class Api::AgentsController < ApplicationController

    def index
       render json: Agent.all_by_unsold
    end
end
