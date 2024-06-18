import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./pages/Courses.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Courses />,
  },
  {
    path: "/courses/:id",
    element: <p>Course</p>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
