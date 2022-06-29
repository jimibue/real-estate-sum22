import axios from "axios";
import { useEffect, useState } from "react";
import Agent from "./Agent";

const Available = () => {
  let [agentProperties, setAgentProperties] = useState([]);
  useEffect(() => {
    getAgentProperties();
  }, []);

  const normalizeData = (rawData) => {
    const agentsIds = rawData.map((rd) => rd.agent_id);
    const uniqueIds = [...new Set(agentsIds)];
    return uniqueIds.map((id) => {
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
          zip: p.zip,
          city: p.city
        };
      });
      return {
        email: properties[0].email,
        name: `${properties[0].first_name} ${properties[0].last_name}`,
        properties: cleanedProperties,
      };
    });
  };

  const getAgentProperties = async () => {
    try {
      let res = await axios.get("/api/properties");
      let normalizedData = normalizeData(res.data);
      setAgentProperties(normalizedData);
    } catch (err) {
      alert("err");
    }
  };

  const renderAgentProperties = ()=>{
    return agentProperties.map(a=>{
      console.log(a)
      return <Agent key={a.id} {...a}/>
    })
  }

  return (
    <div>
      <h1>Available</h1>
      {renderAgentProperties()}
    </div>
  );
};

export default Available;
