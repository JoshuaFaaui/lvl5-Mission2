import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bingsearch from './pages/Blingsearch'
function App() {
  return (
    <Routes>
      <Route path="/lvl5-Mission2" element={<Home />} />
      <Route path="/lvl5-Mission2/Bingsearch" element={<Bingsearch />} />
    </Routes>
  );
}

export default App;
