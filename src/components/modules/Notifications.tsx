import React from 'react';
import { Bell, Package, ShoppingCart, AlertCircle } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'alert',
      title: 'Low Stock Alert',
      message: 'Paracetamol stock is running low',
      time: '5 minutes ago',
      icon: Package,
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Order',
      message: 'Order #123 has been placed',
      time: '15 minutes ago',
      icon: ShoppingCart,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      type: 'warning',
      title: 'Expiry Alert',
      message: 'Some medicines will expire soon',
      time: '1 hour ago',
      icon: AlertCircle,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Notifications</h2>
        <button className="text-blue-600 text-sm hover:text-blue-800">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${notification.bgColor} p-4 rounded-lg hover:shadow-sm transition-shadow`}
          >
            <div className="flex items-start gap-4">
              <div className={`${notification.color} p-2 rounded-full bg-white`}>
                <notification.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{notification.title}</h3>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
        <div className="space-y-4">
          {[
            'Low stock alerts',
            'New orders',
            'Expiry alerts',
            'System updates'
          ].map((setting, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <span>{setting}</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;