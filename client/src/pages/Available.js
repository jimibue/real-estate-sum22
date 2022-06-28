import axios from "axios";
import { useEffect, useState } from "react";

const Available = () => {
  let [agentProperties, setAgentProperties] = useState([]);
  useEffect(() => {
    getAgentProperties();
  }, []);

  const normalizeData = (rawData) => {
    const agentsIds = rawData.map((rd) => rd.agent_id);
    const uniqueIds = [...new Set(agentsIds)];
    console.log(uniqueIds);
    let x = uniqueIds.map((id) => {
      let properties = rawData.filter((p) => p.agent_id == id);
      let cleanedProperties = properties.map((p) => {
        return {
          id: p.property_id,
          beds: p.beds,
          baths: p.baths,
          sq_ft: p.sq_ft,
          price: p.price,
          state: p.state,
          street: p.street,
          zip: p.zip
        };
      });
      return {
        email: properties[0].email,
        name: `${properties[0].first_name} ${properties[0].last_name}`,
        properties: cleanedProperties,
      };
    });

    console.log(x);
  };

  const getAgentProperties = async () => {
    try {
      let res = await axios.get("/api/properties");
      // need to normailize
      normalizeData(res.data);
      setAgentProperties(res.data);
    } catch (err) {
      alert("err");
    }
  };
  return (
    <div>
      <h1>Available</h1>
      <p>{JSON.stringify(agentProperties)}</p>
    </div>
  );
};

export default Available;
