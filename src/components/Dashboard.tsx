import React, { useState } from 'react';
import { LayoutDashboard, Package, ShoppingCart, Presentation as Prescription, BarChart3, Bell, LogOut } from 'lucide-react';
import Inventory from './modules/Inventory';
import Sales from './modules/Sales';
import Prescriptions from './modules/Prescriptions';
import Reports from './modules/Reports';
import Notifications from './modules/Notifications';
import Overview from './modules/Overview';

interface DashboardProps {
  user: {
    name: string;
    role: string;
  };
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeModule, setActiveModule] = useState('dashboard');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    onLogout();
    setShowLogoutConfirm(false);
  };

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'inventory', icon: Package, label: 'Inventory' },
    { id: 'sales', icon: ShoppingCart, label: 'Sales' },
    { id: 'prescriptions', icon: Prescription, label: 'Prescriptions' },
    { id: 'reports', icon: BarChart3, label: 'Reports' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'logout', icon: LogOut, label: 'Logout' }
  ];

  const renderModule = () => {
    switch (activeModule) {
      case 'inventory':
        return <Inventory />;
      case 'sales':
        return <Sales />;
      case 'prescriptions':
        return <Prescriptions />;
      case 'reports':
        return <Reports />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`fixed h-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <div className="p-4">
          <h2 className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>HALOmed</h2>
        </div>
        <nav className="mt-8">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'logout') {
                  handleLogout();
                } else {
                  setActiveModule(item.id);
                }
              }}
              className={`w-full flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                activeModule === item.id && 'bg-blue-50 text-blue-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className={`ml-4 ${!isSidebarOpen && 'hidden'}`}>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-900">
              {activeModule.charAt(0).toUpperCase() + activeModule.slice(1)}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Welcome, {user.name}!</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize">
                {user.role}
              </span>
            </div>
          </div>
        </header>

        <main className="p-6">
          {renderModule()}
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;