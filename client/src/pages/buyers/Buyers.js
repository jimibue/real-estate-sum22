import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Header, Icon, Image, Select } from "semantic-ui-react";

// SAVE FOR NOW MIGHT NEED FOR TESTING.
// const dummyAgents = [
//   {
//     id: 1,
//     first_name: "Bob",
//     last_name: "Dole",
//     email: "test@test.com",
//     unsold_homes: 4,
//   },
//   {
//     id: 2,
//     first_name: "Sally",
//     last_name: "Dole",
//     email: "salltst@test.com",
//     unsold_homes: 2,
//   },
// ];

// const dummyBuyers = [
//   { id: 1, first_name: "buyer", last_name: " 1" },
//   { id: 2, first_name: "buyer", last_name: "2" },
// ];

// const dummyProperties = [
//   { id: 1, price: 1234123, sq_ft: 1234, city: "slc", beds:3, bath:2 },
//   { id: 2, price: 234123, sq_ft: 234, city: "slc", beds:2, bath:1 },
// ];

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
      setProperties(dummyProperties);
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
    return properties.map((p) => {
      return (
        <Card>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMh8S2bR8jyYfK3dIKD3PZ0mjxXJlk5Gzeg&usqp=CAU"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{p.price}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="expand arrows alternate" />
              {p.sq_ft}
            </a>
            <a>
              <Icon name="bath" />
              {p.baths}
            </a>
            <a>
              <Icon name="bed" />
              {p.beds}
            </a>
          </Card.Content>
        </Card>
      );
    });
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
