import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const LineGraph = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    // Fetch COVID-19 data from the API
    const apiUrl = "https://disease.sh/v3/covid-19/countries";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Parse and format the data from the API response
        const countryData = data.map((country) => ({
          country: country.country,
          cases: country.cases
        }));
        setData(countryData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  useEffect(() => {
    // Create the line graph once the data is available
    if (data.length > 0) {
      const labels = data.map((country) => country.country);
      const values = data.map((country) => country.cases);

      if (chartRef.current) {
        // Destroy the previous chart instance
        chartRef.current.destroy();
      }

      const ctx = document.getElementById("lineGraph").getContext("2d");
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "COVID-19 Cases",
              data: values,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Country"
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Cases"
              }
            }
          }
        }
      });
    }
  }, [data]);

  return <canvas id="lineGraph"></canvas>;
};

export default LineGraph;


