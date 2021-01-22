import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const FirstChart = ({ results }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // We retrieve all the information that we need for the chart :
    let chartData = results.map((result) => (
      [
        result.name,
        result.estimated_diameter.kilometers.estimated_diameter_min,
        result.estimated_diameter.kilometers.estimated_diameter_max,
      ]
    ));

    // Sorted by average estimated diameter descending
    chartData.sort((a, b) => b[2] - a[2]);

    // We add the information for the header : 
    chartData = [
      [
        "NEO Name", "Min Estimated Diameter (km)", "Max Estimated Diameter (km)"
      ],
      // It's the same as adding chartData[0], chartData[1] and so on
      ...chartData
    ];
    setData(chartData);
  }, [results]);

  const sortData = (e) => {
    if(e.target.value === 'name') {
      let chartData = results.map((result) => (
        [
          result.name,
          result.estimated_diameter.kilometers.estimated_diameter_min,
          result.estimated_diameter.kilometers.estimated_diameter_max,
        ]
      ));
  
      chartData.sort((a, b) => b[0] - a[0]);
  
      chartData = [
        [
          "NEO Name", "Min Estimated Diameter (km)", "Max Estimated Diameter (km)"
        ],
        ...chartData
      ];
      setData(chartData);
    } else if(e.target.value === 'min')  {
      let chartData = results.map((result) => (
        [
          result.name,
          result.estimated_diameter.kilometers.estimated_diameter_min,
          result.estimated_diameter.kilometers.estimated_diameter_max,
        ]
      ));
  
      chartData.sort((a, b) => a[1] - b[1]);
  
      chartData = [
        [
          "NEO Name", "Min Estimated Diameter (km)", "Max Estimated Diameter (km)"
        ],
        ...chartData
      ];
      setData(chartData);
    } else if(e.target.value === 'max')  {
      let chartData = results.map((result) => (
        [
          result.name,
          result.estimated_diameter.kilometers.estimated_diameter_min,
          result.estimated_diameter.kilometers.estimated_diameter_max,
        ]
      ));
  
      chartData.sort((a, b) => b[2] - a[2]);
  
      chartData = [
        [
          "NEO Name", "Min Estimated Diameter (km)", "Max Estimated Diameter (km)"
        ],
        ...chartData
      ];
      setData(chartData);
    }
    
  }

  return (
    <div className="center">
      <div className="sortData">
        <select onChange={sortData} className="form-select" aria-label="Default select example">
          <option defaultValue>Open this select menu</option>
          <option value="max">Sort by maximum diameter</option>
          <option value="min">Sort by minimum diameter</option>
          <option value="name">Sort by name</option>
        </select>
      </div>
      {
        <Chart
          width={'800px'}
          height={'700px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            title: 'Diameter of objects orbiting in space',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Estimated diameter (km)',
              minValue: 0,
            },
            vAxis: {
              title: 'Neo Name',
            },
          }}
        />
      }
    </div>
    
  )
}

export default FirstChart;