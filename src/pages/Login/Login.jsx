import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import img2 from "../../assets/images/login/facebook.png";
import img3 from "../../assets/images/login/linkedin.png";
import img4 from "../../assets/images/login/search.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="hero min-h-screen my-20">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="text-center lg:text-left">
          <img src={img} alt="img" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error">Login</button>
              </div>
            </form>
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
                  className="w-[55px] h-[55px] bg-base-200 rounded-full p-2 cursor-pointer"
                  src={img4}
                  alt="img"
                />
              </div>
              <p>
                Have an account?{" "}
                <Link className="color" to={`/register`} state={from}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
