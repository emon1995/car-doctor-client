import React from "react";

const ServicesCard = ({ service }) => {
  const { img, title, price } = service;

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
          <button className="btn btn-error">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
