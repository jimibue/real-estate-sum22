import axios from "axios";
import React, { useState } from "react";
import { Card, Select } from "semantic-ui-react";
import PropertyCard from "../../components/shared/PropertyCard";
import { useAxiosOnMount } from "../../hooks";

const Cities = () => {
  const { data: cities, loading } = useAxiosOnMount("/api/cities");
  const [properties, setProperties] = useState(null);
  const handleChange = async (e, { value }) => {
    try {
      let res = await axios.get(`/api/cities/${value}`);
      setProperties(res.data);
    } catch (err) {
      alert(err);
    }
  };
  const renderSelect = () => {
    if (loading) {
      return <Select disabled placeholder="loading" options={[]} />;
    }
    let citiesOptions = cities.map((c) => {
      return { key: c, value: c, text: c };
    });
    return (
      <Select
        onChange={handleChange}
        placeholder="Select your city"
        options={citiesOptions}
      />
    );
  };

  const renderProperties = () => {
    if (!properties) {
      return <p>no properties</p>;
    }
    return properties.map((p) => <PropertyCard key={p.id} {...p} />) 
  };
  return (
    <>
      <h1>Cities Page</h1>
      {renderSelect()}
      <Card.Group style={{marginTop:'20px'}}>
        {renderProperties()}
      </Card.Group>
    </>
  );
};

export default Cities;
