import {
    createBrowserRouter,

  } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    },
  ]);