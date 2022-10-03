import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Attraction from "./components/attraction/Attraction";
import AndhraPradeshInfo from "./components/attractionPages/AndhraPradeshInfo";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import TouristPlace from "./pages/touristPlace/TouristPlace"
import TouristPlaceInfo from "./pages/touristPlaceInfo/TouristPlaceInfo";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/attraction" element={<Attraction/>}/>
        <Route path="/tourist" element={<TouristPlace/>}/>
        <Route path="/pagesInfo" element={<TouristPlaceInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
