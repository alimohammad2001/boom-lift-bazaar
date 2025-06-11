
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, Download } from 'lucide-react';

const OrderManagement = () => {
  const orders = [
    { 
      id: '#ORD-001', 
      customer: 'ABC Construction', 
      machine: 'CAT 320D Excavator', 
      date: '2024-01-15', 
      amount: '$45,000', 
      status: 'Processing',
      shipping: 'Mumbai, India'
    },
    { 
      id: '#ORD-002', 
      customer: 'BuildCorp Ltd', 
      machine: 'John Deere 310L Backhoe', 
      date: '2024-01-12', 
      amount: '$32,000', 
      status: 'Shipped',
      shipping: 'Delhi, India'
    },
    { 
      id: '#ORD-003', 
      customer: 'Metro Builders', 
      machine: 'Komatsu PC200 Excavator', 
      date: '2024-01-10', 
      amount: '$52,000', 
      status: 'Delivered',
      shipping: 'Bangalore, India'
    },
    { 
      id: '#ORD-004', 
      customer: 'City Infrastructure', 
      machine: 'Case 580N Backhoe', 
      date: '2024-01-08', 
      amount: '$28,000', 
      status: 'Pending',
      shipping: 'Chennai, India'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Management</h2>
        <p className="text-gray-600">Track and manage all customer orders</p>
      </div>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Pending Orders</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">8</div>
            <div className="text-sm text-gray-600">Processing</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">5</div>
            <div className="text-sm text-gray-600">Shipped</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">25</div>
            <div className="text-sm text-gray-600">Delivered</div>
          </div>
        </Card>
      </div>

      {/* Orders Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Recent Orders</h3>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Order ID</th>
                <th className="text-left py-3">Customer</th>
                <th className="text-left py-3">Machine</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Amount</th>
                <th className="text-left py-3">Shipping To</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-4 font-medium">{order.id}</td>
                  <td className="py-4">{order.customer}</td>
                  <td className="py-4">{order.machine}</td>
                  <td className="py-4">{order.date}</td>
                  <td className="py-4 font-semibold">{order.amount}</td>
                  <td className="py-4">{order.shipping}</td>
                  <td className="py-4">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
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

export default OrderManagement;
