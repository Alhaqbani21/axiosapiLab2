import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Link to={'./Lab1'}>Lab1</Link>

      <Link to={'./Lab2'}>Lab2</Link>
    </div>
  );
}

export default Home;
