import axios from "axios";
import { useEffect, useState } from "react";
import CityCostChart from "./CityCostChart";

const CityCost = () => {
  const [cityCostData, setCityCostData] = useState(null);
  useEffect(() => {
    getCityCost();
  }, []);


  const normalizeData=(apiData)=>{
      // figured out how to map and get in my chart() UI
      return apiData.map(d=>{
          // convert to array with split
          let prices = d.prices.split(', ')
          // find sum
          let sum = 0;
          prices.forEach(n=>{
              // need to convert n to Integer
              sum += parseInt(n)
          })
          return {city:d.city, cost:Math.round(sum/prices.length)}
      })
  }

  const getCityCost = async () => {
    try {
      let res = await axios.get("/api/city_cost");
      let normalizedData = normalizeData(res.data)
      setCityCostData(normalizedData)
    } catch (err) {
      alert("err");
    }
  };
  return (
    <div>
      <h1>Average Cost of house in each city</h1>
      {cityCostData && <CityCostChart data={cityCostData} />}
    </div>
  );
};

export default CityCost;
