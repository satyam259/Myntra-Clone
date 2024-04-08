import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Bag from "./bag";
const Main = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

export default Main;
