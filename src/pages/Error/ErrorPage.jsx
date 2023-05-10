import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/Frame.png";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error);
  return (
    <div className="text-center flex flex-col  justify-center items-center lg:p-48 space-y-4">
      <img className="w-1/2" src={img} alt="img" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl">
        {error.status} {error.error.message}
      </p>
      <Link to={`/`}>
        <button className="btn color-bg ">Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
