import axios from "axios";
import React, { useState } from "react";
import { Card, Select } from "semantic-ui-react";
import PropertyCard from "../../components/shared/PropertyCard";
import { useAxiosOnMount } from "../../hooks";

const Cities = () => {
  const { data: cities, loading } = useAxiosOnMount("/api/cities");
  const [properties, setProperties] = useState(null);
  const [city, setCity] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
 
  // when dropdown is chagned
  const handleChange = async (e, { value }) => {
    try {
      let res = await axios.get(`/api/cities/${value}`);
      setProperties(res.data.properties);
      setPage(1);
      setCity(value);
      setTotalPages(res.data.total_pages);
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

  const getStyle = (num)=>{
    const sharedStyles = {marginLeft:'10px'}
    if(num === page){
      return {...sharedStyles, color:'red'}
    }
    return sharedStyles
  }

  // when pagination is chagned
  const pageClicked = async (pageNum)=>{
    try {
      let res = await axios.get(`/api/cities/${city}?page=${pageNum}`);
      setPage(pageNum)
      setProperties(res.data.properties);
    } catch (err) {
      alert(err);
    }
  }
  
  // have to use a for loop to create our array of jsx
  // this helps what all the map function are doing
  const renderPagination = ()=>{
    let paginationMenu = []
    for( let i = 1; i<= totalPages; i++) {
      paginationMenu.push(<span style={getStyle(i)} onClick={()=> pageClicked(i)}>{i}</span>)
    }

    return paginationMenu
  }
  return (
    <>
      <h1>Cities Page</h1>
      <p>current page: {page}</p>
      <p>total pages: {totalPages}</p>
      {renderSelect()}
      <hr />
      {renderPagination()}
      <Card.Group style={{marginTop:'20px'}}>
        {renderProperties()}
      </Card.Group>
    </>
  );
};

export default Cities;
