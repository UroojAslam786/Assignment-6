import React from 'react';
import { useState } from "react";
import { useQuery } from 'react-query';

const App = () => {
  const [search, setSearch] = useState("");
  
  const fetchData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=250d4ebd906279665f1ad04f46b48a73&units=metric`;
    const res = await fetch(url);
    return res.json();
  }
  


      const { data, status, refetch } = useQuery("weatherData", fetchData, { enabled: false });

  
  return (
    <>
      <div>
      
        <input type="text" placeholder="Enter City" onChange={(e) => setSearch(e.target.value)}/>
        <button type='button' className="styling" onClick={refetch}>Search</button>
      </div>
      <div className="App">
        {status === "error" && <p>Error for Fetching</p>}
        {status === "loading" && <p>Fetching data</p>}
        {status === "success" && data && (
  <div>
    <p>City: {data.name}</p>
    <p>Temperature: {data.main.temp}</p>
    <p>{data.weather[0]?.main}</p>
  </div>

)}

</div>
    </>
  );
};

export default App;