import React, { useState } from 'react';
import { Search, FileText, Calendar, User } from 'lucide-react';

const Prescriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const prescriptions = [
    {
      id: 1,
      patientName: 'John Doe',
      medication: 'Amoxicillin 500mg',
      date: '2024-03-15',
      status: 'Active',
      doctor: 'Dr. Smith'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      medication: 'Ibuprofen 400mg',
      date: '2024-03-14',
      status: 'Completed',
      doctor: 'Dr. Johnson'
    },
    {
      id: 3,
      patientName: 'Mike Brown',
      medication: 'Paracetamol 500mg',
      date: '2024-03-13',
      status: 'Pending',
      doctor: 'Dr. Williams'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search prescriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {prescriptions.map((prescription) => (
          <div
            key={prescription.id}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                <h3 className="font-medium">{prescription.medication}</h3>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  prescription.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : prescription.status === 'Completed'
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {prescription.status}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <User className="w-4 h-4" />
                <span className="text-sm">{prescription.patientName}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{prescription.date}</span>
              </div>
              <p className="text-sm text-gray-500">Prescribed by {prescription.doctor}</p>
            </div>

            <button className="mt-4 w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prescriptions;