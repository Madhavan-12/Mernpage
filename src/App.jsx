import { Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar";
import Componentpg from "./pages/Componentpg";
import Rendering from "./pages/Rendering";
import Product from "./pages/Product";
import Hooks from "./pages/Hooks";
import Home from "./pages/Home";
import Banner from "./component/banner";



const App=()=>{
  return(
    <>
    <Navbar /> 
    
         
      
    
    <div className="p-6">
      <Routes >       
        <Route path="/" element={<Banner/>} />
        <Route path="/Component" element={<Componentpg />} />
        <Route path="/Hooks" element={<Hooks />} />
        <Route path="/Rendering" element={<Rendering />} />
        <Route path="/Product" element={<Product />} />
     
      </Routes>
      </div>
    </>
  )
}
export default App;


