import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AppliedJobsPage from "./pages/AppliedJobsPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import JobDetails from "./components/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/applied",
        element: <AppliedJobsPage />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "job/:id",
        element: <JobDetails />,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
