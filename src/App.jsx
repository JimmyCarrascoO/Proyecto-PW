import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/login.jsx';       // 'l' minúscula según tus archivos
import Register from './pages/Register.jsx'; // 'R' mayúscula según tus archivos

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta para el Inicio de Sesión */}
        <Route path="/login" element={<Login />} />
        
        {/* Ruta para el Registro */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;