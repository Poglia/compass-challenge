import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
    </Routes>
  </Router>
  );
}

export default App;