// import { Playlist, Sidebar, Home, Playlist2 } from "./components";
// import "./App.css";
// import { Route, BrowserRouter, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div className="Container">
//       <BrowserRouter>
//         <Sidebar></Sidebar>
//         <Routes>
//           <Route index element={<Home/>}/>
//           <Route path="/Home" element={<Home/>}/>
//           <Route path="/Playlist" element={<Playlist/>}/>
//           <Route path="/Playlist2" element={<Playlist2/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Signup, Login, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;