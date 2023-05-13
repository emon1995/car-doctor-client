import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../pages/Error/ErrorPage";
import About from "../pages/Home/About/About";
import Services from "../pages/Home/Services/Services";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register/Register";
import Booking from "../pages/Home/Booking/Booking";
import MyBooking from "../pages/MyBooking/MyBooking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Booking />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/myBooking",
        element: (
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
