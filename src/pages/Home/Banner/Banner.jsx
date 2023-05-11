import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full lg:h-[600px] mt-20">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl object-cover" />
        <div className="absolute left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white rounded-xl">
          <div className=" space-y-6 w-1/2 pl-12">
            <h1 className="text-7xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-8">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl object-cover" />
        <div className="absolute left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white rounded-xl">
          <div className=" space-y-6 w-1/2 pl-12">
            <h1 className="text-7xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-8">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl object-cover" />
        <div className="absolute left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white rounded-xl">
          <div className=" space-y-6 w-1/2 pl-12">
            <h1 className="text-7xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-8">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl object-cover" />
        <div className="absolute left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white rounded-xl">
          <div className=" space-y-6 w-1/2 pl-12">
            <h1 className="text-7xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-8">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
