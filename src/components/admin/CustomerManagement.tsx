
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, Mail, Phone } from 'lucide-react';

const CustomerManagement = () => {
  const customers = [
    { 
      id: 1, 
      name: 'ABC Construction', 
      email: 'contact@abcconstruction.com', 
      phone: '+91 98765 43210',
      location: 'Mumbai, India',
      totalOrders: 5,
      totalSpent: '$180,000',
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'BuildCorp Ltd', 
      email: 'info@buildcorp.com', 
      phone: '+91 87654 32109',
      location: 'Delhi, India',
      totalOrders: 3,
      totalSpent: '$95,000',
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'Metro Builders', 
      email: 'hello@metrobuilders.com', 
      phone: '+91 76543 21098',
      location: 'Bangalore, India',
      totalOrders: 8,
      totalSpent: '$320,000',
      status: 'VIP'
    },
    { 
      id: 4, 
      name: 'City Infrastructure', 
      email: 'projects@cityinfra.com', 
      phone: '+91 65432 10987',
      location: 'Chennai, India',
      totalOrders: 2,
      totalSpent: '$75,000',
      status: 'Active'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Customer Management</h2>
          <p className="text-gray-600">Manage your customer relationships and communications</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <div className="text-sm text-gray-600">Total Customers</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">89</div>
            <div className="text-sm text-gray-600">Active This Month</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">156</div>
            <div className="text-sm text-gray-600">VIP Customers</div>
          </div>
        </Card>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search customers..." className="pl-10" />
        </div>
      </Card>

      {/* Customers Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Customer</th>
                <th className="text-left py-3">Contact</th>
                <th className="text-left py-3">Location</th>
                <th className="text-left py-3">Orders</th>
                <th className="text-left py-3">Total Spent</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-50">
                  <td className="py-4">
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-600">{customer.email}</div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>{customer.phone}</span>
                    </div>
                  </td>
                  <td className="py-4">{customer.location}</td>
                  <td className="py-4">{customer.totalOrders}</td>
                  <td className="py-4 font-semibold">{customer.totalSpent}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      customer.status === 'VIP' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default CustomerManagement;
