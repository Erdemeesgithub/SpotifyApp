import { Home, Sidebar,Main } from "./components";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <Sidebar />
      {/* <Home /> */}
      <Main/>
    </div>
  );
}

export default App;
