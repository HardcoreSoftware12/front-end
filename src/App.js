
import Navbar from "./components/Layout/Navbar.jsx";
import Profile from "./components/Profile";
import {createBrowserRouter,Outlet} from "react-router-dom"
import axios from "axios";
import Router from "./Router.js";

axios.defaults.withCredentials = true;

function App() {
 
  return (
    <>
    <Router/>
    
    
    </>
  );
}
// export const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:"/",
//         element:<Homepage/>
//       },
//       {
//         path:"/profile",
//         element:<Profile/>
//       }
     
//     ]

//   }
// ])

export default App;
