import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
