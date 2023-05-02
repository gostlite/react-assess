import React, { useState, useEffect } from "react";

export default function Table() {
  const [allData, setData] = useState([]);
  const [selected, updateSelect] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800"
      );
      if (!response.ok) return;
      const json = await response.json();
      setData(json);
      updateSelect(allData.slice(1,20))
      
    }
    fetchData().catch(err=> {
      console.log(err)
    });
  }, []);
    // const [selected, updateSelect] = useState(allData.slice(1,20))

 
    console.log(selected);
  return (
    <table>
      <thead>
        <tr>
          <th>Airline</th>
          <th>Time</th>
          <th>Departure</th>
          <th>Arrival</th>
        </tr>
      </thead>
      <tbody>
        {selected.map(val => {
        return <tr>
          <td>{val.estDepartureAirport}</td>
          <td>hello</td>
          <td>{val.firstSeen }</td>
          <td>{val.lastSeen }</td>
          </tr>
      })}  
         
  
      </tbody>
    </table>
  );
}
