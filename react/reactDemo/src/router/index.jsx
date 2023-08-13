  import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/CityList";

const router = createBrowserRouter([
    { 
        path: "/home", 
        element: <Home /> 
    },
    { 
        path: "/about", 
        element: <About />
    },
    {
        path: "*", 
        element: <Home /> 
    }
])

export default router


