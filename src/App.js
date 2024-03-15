import Homepage from "./Pages/Homepage";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import {createBrowserRouter,Outlet} from "react-router-dom"

function App() {
 
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}
export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/profile",
        element:<Profile/>
      }
    ]

  }
])

export default App;
