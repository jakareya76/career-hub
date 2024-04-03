import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AppliedJobsPage from "./pages/AppliedJobsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import JobDetails from "./components/JobDetails.jsx";

import AuthProvider from "./context/AuthProvider.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/applied",
        element: <AppliedJobsPage />,
        loader: () => fetch("/jobs.json"),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
