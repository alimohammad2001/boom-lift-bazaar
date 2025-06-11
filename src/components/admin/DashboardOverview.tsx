
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Package, ShoppingCart, Users, DollarSign } from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    { label: 'Total Revenue', value: '$2.4M', change: '+12%', icon: DollarSign, color: 'text-green-600' },
    { label: 'Active Machines', value: '156', change: '+8%', icon: Package, color: 'text-blue-600' },
    { label: 'Pending Orders', value: '23', change: '-5%', icon: ShoppingCart, color: 'text-orange-600' },
    { label: 'Total Customers', value: '1,247', change: '+15%', icon: Users, color: 'text-purple-600' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'ABC Construction', machine: 'CAT 320D Excavator', status: 'Processing', amount: '$45,000' },
    { id: '#ORD-002', customer: 'BuildCorp Ltd', machine: 'John Deere 310L Backhoe', status: 'Shipped', amount: '$32,000' },
    { id: '#ORD-003', customer: 'Metro Builders', machine: 'Komatsu PC200 Excavator', status: 'Delivered', amount: '$52,000' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Order ID</th>
                <th className="text-left py-2">Customer</th>
                <th className="text-left py-2">Machine</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 font-medium">{order.id}</td>
                  <td className="py-3">{order.customer}</td>
                  <td className="py-3">{order.machine}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 font-semibold">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default DashboardOverview;
