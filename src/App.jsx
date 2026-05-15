import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BusinessEditor from './pages/BusinessEditor';
import ChatHistory from './pages/ChatHistory';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/business/edit" element={<BusinessEditor />} />
        <Route path="/chats" element={<ChatHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;