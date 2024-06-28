import "./App.css";
import { Route, Routes } from "react-router-dom";
import Play from "./play";
import Money from "./money";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Play />} />
      <Route path='/money' element={<Money />} />
    </Routes>
  );
}

export default App;
