import React from 'react';
import { BarChart3, TrendingUp, Users, Package, Download } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: 'Sales Report',
      description: 'Monthly sales performance and trends',
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      id: 2,
      title: 'Inventory Report',
      description: 'Current stock levels and movements',
      icon: Package,
      color: 'text-blue-500'
    },
    {
      id: 3,
      title: 'Customer Analytics',
      description: 'Customer behavior and demographics',
      icon: Users,
      color: 'text-purple-500'
    },
    {
      id: 4,
      title: 'Financial Summary',
      description: 'Revenue and expense analysis',
      icon: BarChart3,
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <report.icon className={`w-6 h-6 ${report.color}`} />
              <h3 className="font-medium">{report.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">{report.description}</p>
            <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
              <Download className="w-4 h-4" />
              Download Report
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Reports</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">Report #{item}</p>
                  <p className="text-sm text-gray-500">Generated on March {10 + item}, 2024</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Scheduled Reports</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">Monthly Sales Report</p>
                  <p className="text-sm text-gray-500">Next generation: April {item}, 2024</p>
                </div>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                  Edit Schedule
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;