import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";

// ----- LAZY LOADING -----
const Grocery = lazy(() => import("./components/Grocery"));

// ----- CREATING ROUTE CONFIGURATION (using createBrowserRouter) -----
const appRouter = createBrowserRouter([
  // ----- BASIC ROUTING -----
  {
    path: "/",
    element: <App />,
    // ----- NESTED/CHILDREN ROUTES -----
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          // ----- wrapping Grocery component inside Suspense component in order to improve the performance, as it take time to load
          <Suspense fallback={"Loading..."}>
            <Grocery />
          </Suspense>
        ),
      },
      // ----- DYNAMIC ROUTING -----
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    // ----- ERROR HANDLING -----
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* ----- PROVIDING ROUTE CONFIGURATION (using RouterProvider) ----- */}
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
