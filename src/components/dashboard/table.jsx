import React, { useState, useEffect } from "react";


export default function Table() {
  const [allData, setData] = useState([]);
  const [selected, updateSelect] = useState([])
  const convertTime = function(data){
    return new Date(data*1000).toTimeString()
  }
  console.log(convertTime(1517229296))
  console.log(convertTime(1517230536))

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800"
      );
      if (!response.ok) return;
      const json = await response.json();
      setData(json);
      updateSelect(allData.slice(1,100))
      
    }
    fetchData().catch(err => {
      console.log(err)
    });
  }, []);
    // const [selected, updateSelect] = useState(allData.slice(1,20))

//   setTimeout(() => {
//    console.log(selected);
//  },10)
  
  

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
        {selected.map((val,i) => {
        return <tr key={i}>
          <td>{val.estDepartureAirport}</td>
          <td>{convertTime(val.lastSeen )}</td>
          <td>{val.estDepartureAirportVertDistance}</td>
          <td>{val.estArrivalAirportVertDistance}</td>
          </tr>
      })}  
         
      </tbody>
    </table>
  );
}
