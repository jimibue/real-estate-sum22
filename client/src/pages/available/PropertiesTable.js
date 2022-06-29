import React from "react";
import { Table } from "semantic-ui-react";

const PropertiesTable = ({ properties }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Beds</Table.HeaderCell>
        <Table.HeaderCell>Baths</Table.HeaderCell>
        <Table.HeaderCell>sq_ft</Table.HeaderCell>
        <Table.HeaderCell>street</Table.HeaderCell>
        <Table.HeaderCell>city</Table.HeaderCell>
        <Table.HeaderCell>zip</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {properties.map((p) => {
        return (
          <Table.Row key={p.id}>
            <Table.Cell>{p.price}</Table.Cell>
            <Table.Cell>{p.beds}</Table.Cell>
            <Table.Cell>{p.baths}</Table.Cell>
            <Table.Cell>{p.sq_ft}</Table.Cell>
            <Table.Cell>{p.street}</Table.Cell>
            <Table.Cell>{p.city}</Table.Cell>
            <Table.Cell>{p.zip}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  </Table>
);

export default PropertiesTable;
