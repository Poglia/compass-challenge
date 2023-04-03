import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from './styles/globalStyles';
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
    <GlobalStyles/>
    </>
      );
}

export default App;
