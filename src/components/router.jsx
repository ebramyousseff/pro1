import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

import Starthomepage from './Starthomepage';
import Homepage from "./Homepage";
import Singlepage from "./Single-page";


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar2 />
        <Starthomepage />
      </>
    ),
  },

  {
    path: "/hompage",
    element: (
      <>
        <Navbar />
        <Homepage />
      </>
    ),
  },
  {
    path: "/single/:productId",
    element: (
      <>
        <Navbar />
        <Singlepage/>
      </>
    ),
  },
]);
export default routes ;