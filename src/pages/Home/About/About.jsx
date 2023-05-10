import React from "react";
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="my-20">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="w-1/2 relative">
            <img
              src={person}
              className=" lg:h-[470px] rounded-lg shadow-2xl object-cover"
            />
            <img
              src={parts}
              className="w-9/12 absolute -right-10 -bottom-24 rounded-lg shadow-2xl border-8 border-white lg:h-[330px] object-cover"
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-error text-2xl font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
