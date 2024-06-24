import React from 'react';

function CardLab2(props) {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl flex flex-col justify-center items-center">
      <figure>
        <img src={props.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>

        <div className="card-actions ">
          <button onClick={props.onClick} className="btn btn-primary">
            Show Details
          </button>
          <button onClick={props.onClickDel} className="btn bg-red-900">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardLab2;
