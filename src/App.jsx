import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { GlobalStyles } from './styles/globalStyles';
import Register from "./pages/Register";
import Login from "./pages/Login";

import AppContext from "./AppContext";

function App() {
  const [errorMessage, setErrorMessage] = useState("AAAAAAAAAAA");;

  return (
    <AppContext.Provider value={{errorMessage, setErrorMessage}}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
    <GlobalStyles/>
    </AppContext.Provider>
      );
}

export default App;
