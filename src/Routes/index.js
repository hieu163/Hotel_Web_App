
import LayoutDefault from "../layout/LayoutDefault";

import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import LoginPage from "../pages/Login";
import SlidePack from "../components/SlidePack";



export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  }, 
  {
    path: "*",
    element: <Error404/>
  },
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: "hotel-offers",
    element: <SlidePack/>
  },
];

