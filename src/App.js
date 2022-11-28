import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/home";
import List from "./pages/list/list";
import Hotel from "./pages/Hotel/hotel";



function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Hotel" element={<List/>}></Route>
        <Route path="/Hotel/:id" element={<Hotel/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;