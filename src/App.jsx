import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { AuthProvider } from "./auth/auth";
import useAuth  from "./hooks/useAuth";

function App() {
  const Private = ({ Item }) => {
    const signed = useAuth();

    return signed > 0 ? <Item /> : <Login />;
  };

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Private Item={Home} />} />
          </Routes>
        </Router>
        <GlobalStyles />
      </AuthProvider>
    </>
  );
}

export default App;
