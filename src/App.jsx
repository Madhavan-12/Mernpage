import Banner from "./component/banner";
import Navbar from "./component/Navbar";

const App=()=>{
  return(
    <>
    <Navbar />
    <Banner />
    <Routes>
      <Route path="/"element={Home}></Route>
    </Routes>
    </>
  )
}
export default App;