import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar bg-base-300 h-20 min-w-screen">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Rick & Morty</a>
      </div>
      <div className="flex-none gap-2">
        <Link to={'../Lab1'}>
          <button className="btn btn-neutral ">Lab 1</button>
        </Link>
        <Link to={'../Lab2'}>
          <button className="btn  btn-neutral ">Page 2</button>
        </Link>
        <div className="dropdown dropdown-end"></div>
      </div>
    </div>
  );
}

export default NavBar;
