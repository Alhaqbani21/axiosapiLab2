import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardLab2 from '../components/CardLab2';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SearchInput from '../components/SearchInput';

function Lab2() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [deleteAlert, setdeleteAlert] = useState(false);

  useEffect(() => {
    fetchData('https://666061a45425580055b3a3d4.mockapi.io/lab2');
  }, []);

  useEffect(() => {
    searchCharacter();
  }, [searchInput, data]);

  function searchCharacter() {
    if (searchInput !== '') {
      const filtered = data.filter((character) =>
        character.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }

  document.title = 'Lab2';
  const navigate = useNavigate();

  function deleteItem(id) {
    axios
      .delete(`https://666061a45425580055b3a3d4.mockapi.io/lab2/${id}`)
      .then((response) => {
        console.log(response);
        setData(data.filter((data) => data.id !== id));
        setdeleteAlert(true);
        setTimeout(function () {
          setdeleteAlert(false);
        }, 5000);
      });
  }

  function fetchData(url) {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
        setFilteredData(response.data); // Initialize filteredData
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
      <NavBar />
      {deleteAlert && (
        <div className="alert alert-success fixed z-50 w-60 top-20 right-5">
          <span>Item has been deleted</span>
        </div>
      )}

      <div className="flex flex-wrap justify-center items-center gap-5 p-5 flex-col">
        <div className=" flex flex-col justify-center items-center">
          <SearchInput
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <div className=" w-[100%] ">
            <div className="divider"></div>
            <div className="text-center tracking-widest my-5 text-neutral">
              To Add New Character
            </div>
          </div>
          <button
            className="btn  btn-success text-white max-md:text-sm"
            onClick={() => navigate('../newcharacter')}
          >
            Add Character
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 max-w-screen">
          {filteredData.length > 0 ? (
            <div className="flex flex-wrap justify-center items-center gap-10  ">
              {filteredData.map((item) => (
                <CardLab2
                  key={item.id}
                  img={item.image}
                  title={item.name}
                  onClick={() => navigate(`./${item.id}`)}
                  onClickDel={() => deleteItem(item.id)}
                  onClickEdit={() => {
                    navigate(`../edit/${item.id}`);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-2xl text-red-500">Ooops No Result</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lab2;
