import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';

function App() {
  const [data, setdata] = useState([]);
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
    <div className="flex justify-center items-center flex-wrap p-5 gap-5">
      {data.map((item) => {
        return <Card key={item.id} img={item.image} title={item.name} />;
      })}
    </div>
  );
}

export default App;
