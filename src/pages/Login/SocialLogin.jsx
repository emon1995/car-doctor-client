import React, { useContext } from "react";
import img2 from "../../assets/images/login/facebook.png";
import img3 from "../../assets/images/login/linkedin.png";
import img4 from "../../assets/images/login/search.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = ({ from, path }) => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="text-center">
      <p>Or Sign in with</p>
      <div className="flex justify-center items-center gap-4 ">
        <img
          className="w-[55px] h-[55px] bg-base-200 rounded-full p-2 cursor-pointer"
          src={img2}
          alt="img"
        />
        <img
          className="w-[55px] h-[55px] bg-base-200 rounded-full p-2 cursor-pointer"
          src={img3}
          alt="img"
        />
        <img
          onClick={handleGoogleLogin}
          className="w-[55px] h-[55px] bg-base-200 rounded-full p-2 cursor-pointer"
          src={img4}
          alt="img"
        />
      </div>
      <p>
        Have an account?{" "}
        <Link className="color" to={`/${path}`} state={from}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SocialLogin;
