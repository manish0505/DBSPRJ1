import React from 'react';
import { Users, Package, ShoppingCart, CreditCard } from 'lucide-react';

const Overview = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { label: 'Products', value: '567', icon: Package, color: 'bg-green-500' },
    { label: 'Orders', value: '89', icon: ShoppingCart, color: 'bg-purple-500' },
    { label: 'Revenue', value: '$12,345', icon: CreditCard, color: 'bg-yellow-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">New order #123{index}</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Low Stock Alert</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Product #{index + 1}</p>
                  <p className="text-sm text-gray-500">5 units remaining</p>
                </div>
                <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Restock
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;