
import Navbar from "./components/Layout/Navbar.jsx";
import Profile from "./components/Profile";
import axios from "axios";
import Router from "./Router.js";

import {UserContextProvider} from "./components/Context/userContext.js";

axios.defaults.withCredentials = true;

function App() {
 
  return (
    <>
    <UserContextProvider>
      <Router/>
    </UserContextProvider>
    
    
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
