import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import axios from 'axios';

function Lab1() {
  const [data, setdata] = useState([]);
  document.title = 'Lab1';
  useEffect(() => {
    useFetchData('https://rickandmortyapi.com/api/character');
  }, []);

  function useFetchData(url) {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setdata(response.data.results);
        console.log(response);
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
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-2">
        <Link to={'../Lab1'}>Lab1</Link>

        <Link to={'../Lab2'}>Lab2</Link>
      </div>
      <div className="flex justify-center items-center flex-wrap p-5 gap-5">
        {data.map((item) => {
          return <Card key={item.id} img={item.image} title={item.name} />;
        })}
      </div>
    </div>
  );
}

export default Lab1;
