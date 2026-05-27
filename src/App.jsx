import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/login.jsx';       // 'l' minúscula según tus archivos
import Register from './pages/Register.jsx'; // 'R' mayúscula según tus archivos

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        
        <Route path="/login" element={<Login />} />
        
        
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;