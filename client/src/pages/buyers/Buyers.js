import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Header, Icon, Image, Select } from "semantic-ui-react";
import PropertyCard from "../../components/shared/PropertyCard";

const Buyers = () => {
  const [agents, setAgents] = useState(null);
  const [buyers, setBuyers] = useState(null);
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    getAgents();
  }, []);
  const getAgents = async () => {
    try {
      let res = await axios.get("/api/agents");
      setAgents(res.data);
    } catch (err) {
       alert('err occured')
    }
  };
  const getAgentOptions = () => {
    if (!agents) {
      return [];
    }
    return agents.map((a) => {
      return { key: a.id, text: `${a.first_name} ${a.last_name}`, value: a.id };
    });
  };
  const handleAgentChanged = async (e, { value }) => {
    try {
      let res = await axios.get(`/api/agents/${value}/buyers`);
      setBuyers(res.data);
    } catch (err) {
      alert('err occured')
    }
  };

  const handleBuyerChanged = async (e, { value }) => {
    try {
      let res = await axios.get(`/api/buyers/${value}`);
      setProperties(res.data);
    } catch (err) {
      alert('err occured')
    }
  };

  const renderBuyerSelect = () => {
    let buyersOptions = buyers.map((b) => {
      return { key: b.id, text: `${b.first_name} ${b.last_name}`, value: b.id };
    });

    return (
      <>
        <p>Select a Buyer</p>
        <Select options={buyersOptions} onChange={handleBuyerChanged} />
      </>
    );
  };

  const renderProperties = () => {
    return properties.map((p) => <PropertyCard key={p.id} {...p}/>);
  };
  return (
    <div style={{marginTop:'10px'}}>
      <Header>Buyers Page</Header>
      <p>Select an Agents</p>
      <Select options={getAgentOptions()} onChange={handleAgentChanged} />
      {buyers && renderBuyerSelect()}
      {properties && (<Card.Group style={{marginTop:'20px'}}>{renderProperties()}</Card.Group>)}
    </div>
  );
};

export default Buyers;
