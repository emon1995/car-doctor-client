import React from "react";

const CheckOutImg = ({ children, title }) => {
  return (
    <div className="bg-hero w-full h-[300px]  rounded-xl  object-cover bg-no-repeat">
      <h1 className="text-3xl font-bold text-white flex justify-center items-center">
        {children}
      </h1>

      <h3 className="text-xl font-bold text-white flex justify-center items-end mt-10">
        {title}
      </h3>
    </div>
  );
};

export default CheckOutImg;
