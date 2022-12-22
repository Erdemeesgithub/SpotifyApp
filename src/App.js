import { Playlist, Sidebar, Home } from "./components";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Playlist" element={<Playlist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
