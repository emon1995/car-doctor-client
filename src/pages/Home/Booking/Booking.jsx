import React, { useContext } from "react";
import CheckOutImg from "../../Shared/CheckOutImg/CheckOutImg";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { data } from "autoprefixer";

const Booking = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    if (date) {
      const order = {
        title: service.title,
        img: service.img,
        price: service.price,
        email: user.email,
        service_id: service.service_id,
        date,
      };

      fetch(`http://localhost:5000/bookings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Success...",
              text: "Submitted Successfully!",
            });
          }
        });
    }
  };

  return (
    <div className="my-20">
      <CheckOutImg title="Home/Service">Add New Service</CheckOutImg>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={service?.title}
                    placeholder="Service Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="date"
                    name="date"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="price"
                    name="price"
                    defaultValue={service?.price}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
