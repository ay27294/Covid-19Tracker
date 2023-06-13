import React, { useEffect, useState } from "react";

const CountryData = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          setCountriesData(data);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>COVID-19 Country Data</h1>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {countriesData.map((country) => (
            <tr key={country.country}>
              <td>{country.country}</td>
              <td>{country.cases}</td>
              <td>{country.deaths}</td>
              <td>{country.recovered}</td>
              <td>{country.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryData;
