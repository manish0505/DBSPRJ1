import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Key, Building2, AlertCircle, LayoutDashboard, Package, ShoppingCart, Presentation as Prescription, BarChart3, Bell, LogOut } from 'lucide-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', role: '' });

  const handleLogin = (userData: { name: string; role: string }) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({ name: '', role: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;