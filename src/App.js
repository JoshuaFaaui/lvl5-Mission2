import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bingsearch from './pages/Blingsearch'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Bingsearch" element={<Bingsearch />} />
      <Route path="/Bingsearch/:category" element={<Bingsearch />} />
    </Routes>
  );
}

export default App;
