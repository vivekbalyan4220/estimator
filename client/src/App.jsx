import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Download from "./Download";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/download" element={<Download />}></Route>
    </Routes>
  );
}

export default App;
