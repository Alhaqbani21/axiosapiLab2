import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Details() {
  const [data, setdata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData('https://666061a45425580055b3a3d4.mockapi.io/lab2');
  }, []);

  function fetchData(url) {
    axios
      .get(url)
      .then(function (response) {
        // handle success

        const dataFound = response.data.find((e) => e.id === Number(id));

        console.log(dataFound);
        setdata(dataFound);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Name: <span className="text-blue-400">{data.name}</span>
          </h1>
          <h1 className="text-5xl font-bold">
            status: <span className="text-blue-400">{data.status}</span>
          </h1>
          <h1 className="text-5xl font-bold">
            species: <span className="text-blue-400">{data.species}</span>
          </h1>
          <h1 className="text-5xl font-bold">
            gender: <span className="text-blue-400">{data.gender}</span>
          </h1>
          <h1 className="text-5xl font-bold">
            hair: <span className="text-blue-400">{data.hair}</span>
          </h1>
          <h1 className="text-5xl font-bold">
            origin: <span className="text-blue-400">{data.origin}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Details;
