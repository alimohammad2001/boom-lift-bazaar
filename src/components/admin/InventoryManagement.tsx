
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, TrendingUp, Package } from 'lucide-react';

const InventoryManagement = () => {
  const inventory = [
    { category: 'Excavators', total: 45, available: 32, reserved: 8, sold: 5, trend: '+12%' },
    { category: 'Backhoes', total: 28, available: 18, reserved: 5, sold: 5, trend: '+8%' },
    { category: 'Bulldozers', total: 15, available: 10, reserved: 3, sold: 2, trend: '+5%' },
    { category: 'Loaders', total: 22, available: 15, reserved: 4, sold: 3, trend: '+15%' },
    { category: 'Cranes', total: 8, available: 5, reserved: 2, sold: 1, trend: '+20%' },
  ];

  const lowStockItems = [
    { name: 'CAT 320D Excavator', stock: 2, threshold: 5 },
    { name: 'John Deere 310L Backhoe', stock: 1, threshold: 3 },
    { name: 'Komatsu D65 Bulldozer', stock: 0, threshold: 2 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Inventory Management</h2>
        <p className="text-gray-600">Monitor and manage your equipment inventory</p>
      </div>

      {/* Inventory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">118</div>
              <div className="text-sm text-gray-600">Total Machines</div>
            </div>
            <Package className="h-8 w-8 text-blue-600" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-600">80</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-red-600">3</div>
              <div className="text-sm text-gray-600">Low Stock Alerts</div>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Inventory by Category</h3>
        <div className="space-y-4">
          {inventory.map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-900">{item.category}</h4>
                <span className="text-sm text-green-600 font-medium">{item.trend}</span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Total</div>
                  <div className="font-semibold">{item.total}</div>
                </div>
                <div>
                  <div className="text-gray-600">Available</div>
                  <div className="font-semibold text-green-600">{item.available}</div>
                </div>
                <div>
                  <div className="text-gray-600">Reserved</div>
                  <div className="font-semibold text-yellow-600">{item.reserved}</div>
                </div>
                <div>
                  <div className="text-gray-600">Sold</div>
                  <div className="font-semibold text-red-600">{item.sold}</div>
                </div>
              </div>
              <div className="mt-3">
                <Progress value={(item.available / item.total) * 100} className="h-2" />
                <div className="text-xs text-gray-600 mt-1">
                  {Math.round((item.available / item.total) * 100)}% available
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Low Stock Alerts */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Low Stock Alerts</h3>
          <AlertTriangle className="h-5 w-5 text-red-600" />
        </div>
        <div className="space-y-3">
          {lowStockItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
              <div>
                <div className="font-medium text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-600">
                  Stock: {item.stock} / Threshold: {item.threshold}
                </div>
              </div>
              <Button size="sm" variant="outline" className="text-red-600 border-red-300">
                Reorder
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default InventoryManagement;
