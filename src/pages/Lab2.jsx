import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardLab2 from '../components/CardLab2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Lab2() {
  const [data, setdata] = useState([]);
  document.title = 'Lab2';
  const navigate = useNavigate();
  useEffect(() => {
    fetchData('https://666061a45425580055b3a3d4.mockapi.io/lab2');
  }, []);

  function fetchData(url) {
    axios
      .get(url)
      .then(function (response) {
        // handle success

        console.log(response.data);
        setdata(response.data);
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
      <div className="flex flex-wrap justify-center items-center gap-5 p-5">
        <h1>Rick and Morty images</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 p-5">
          {data.map((item) => {
            return (
              <CardLab2
                key={item.id}
                img={item.image}
                title={item.name}
                onClick={(e) => {
                  navigate(`./${item.id}`);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lab2;
