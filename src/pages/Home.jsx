import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex gap-5 justify-center items-center h-screen flex-col">
      <div className="flex gap-5">
        <Link to={'./Lab1'}>
          <button className="btn btn-primary btn-lg">Lab 1</button>
        </Link>
        <Link to={'./Lab2'}>
          <button className="btn btn-primary btn-lg">Lab2</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
