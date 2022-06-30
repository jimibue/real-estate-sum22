class Agent < ApplicationRecord
    has_many :properties
    has_many :buyers

    def self.all_by_unsold
      Agent.find_by_sql("
        SELECT  a.id, a.first_name, a.last_name, a.email, COUNT(*) AS unsold_homes
        FROM agents AS a
        INNER JOIN properties AS p ON p.agent_id = a.id
        WHERE sold <> true
        GROUP BY a.id, sold
        ORDER BY unsold_homes DESC;
        ")
    end
end
