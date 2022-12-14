import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div
      className="App background-color"
      style={{ backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
