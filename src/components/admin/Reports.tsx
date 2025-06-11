
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Download, TrendingUp, Calendar } from 'lucide-react';

const Reports = () => {
  const reportTypes = [
    {
      title: 'Sales Report',
      description: 'Monthly and yearly sales performance',
      icon: TrendingUp,
      lastGenerated: '2024-01-15'
    },
    {
      title: 'Inventory Report',
      description: 'Current inventory status and trends',
      icon: BarChart3,
      lastGenerated: '2024-01-14'
    },
    {
      title: 'Customer Report',
      description: 'Customer acquisition and retention metrics',
      icon: Calendar,
      lastGenerated: '2024-01-13'
    }
  ];

  const quickStats = [
    { label: 'Monthly Revenue', value: '$450,000', change: '+12%' },
    { label: 'Orders Completed', value: '23', change: '+8%' },
    { label: 'New Customers', value: '15', change: '+25%' },
    { label: 'Avg Order Value', value: '$42,500', change: '+5%' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h2>
        <p className="text-gray-600">Generate and view business performance reports</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className="text-sm text-green-600 mt-1">{stat.change}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Report Generation */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Generate Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reportTypes.map((report, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-orange-100 rounded-lg mr-3">
                  <report.icon className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{report.title}</h4>
                  <p className="text-sm text-gray-600">{report.description}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-3">
                Last generated: {report.lastGenerated}
              </div>
              <Button className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'New order received', details: 'Order #ORD-001 from ABC Construction', time: '2 hours ago' },
            { action: 'Machine delivered', details: 'CAT 320D Excavator delivered to Mumbai', time: '4 hours ago' },
            { action: 'Payment received', details: '$45,000 payment processed', time: '6 hours ago' },
            { action: 'Inventory updated', details: '5 new machines added to inventory', time: '8 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">{activity.action}</div>
                <div className="text-sm text-gray-600">{activity.details}</div>
              </div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Reports;
