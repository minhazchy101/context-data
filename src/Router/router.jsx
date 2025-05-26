import {
  createBrowserRouter,
} from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Sign from "../Pages/Sign/Sign";

const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayOut     ,
    children : [
        {
            index : true , Component : Home
        },
        {
            path : 'register',
            Component : Register
        },
        {
            path : 'signin',
            Component : Sign
        },
    ]
  },
]);

export default router;