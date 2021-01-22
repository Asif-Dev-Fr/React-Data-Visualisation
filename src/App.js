import React, { useState, useEffect } from 'react';
import './App.css';
import { api } from './component/API';
import FirstChart from './component/FirstChart';

function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setResults(data.near_earth_objects);
    };
    fetchData();

  }, []);

  console.log(results);

  return (
    <div className="App">
      <FirstChart results={results} />

    </div>
  );
}

export default App;
