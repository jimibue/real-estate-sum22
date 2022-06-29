import { Card } from "semantic-ui-react";
import PropertiesTable from "./PropertiesTable";

const Agent = ({name, email, properties}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{name} <span style={{fontSize:'12px', color:"#999"}}>{email}</span></Card.Header>
        <Card.Description>
          <PropertiesTable properties={properties}/>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Agent;