import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { img, title, price, _id } = service;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-end flex-row ">
        <div>
          <h2 className="card-title text-3xl">{title}</h2>
          <p className="text">Price: ${price}</p>
        </div>
        <div className="card-actions">
          <Link to={`/booking/${_id}`}>
            <button className="btn btn-error">Booking</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
