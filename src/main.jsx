import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import ViewDetails from "./Components/Jobs/ViewDetails";
import Blog from "./Components/Blogs/Blog";
import Statistics from "./Components/Statistics/Statistics";
import ErrorPage from "./Components/ErrorPage/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/job/:jobId",
        element: <ViewDetails />,
      },
      {
        path: '/Blog',
        element: <Blog></Blog>
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);