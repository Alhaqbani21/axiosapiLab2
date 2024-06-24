import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 justify-center items-center">
      <Link to={'./Lab1'}>Lab1</Link>

      <Link to={'./Lab2'}>Lab2</Link>
    </div>
  );
}

export default Home;
