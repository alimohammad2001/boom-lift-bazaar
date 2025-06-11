
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash } from 'lucide-react';

const MachineManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const machines = [
    { id: 1, name: 'CAT 320D Excavator', category: 'Excavators', year: 2018, price: '$45,000', status: 'Available', location: 'Texas' },
    { id: 2, name: 'John Deere 310L Backhoe', category: 'Backhoes', year: 2019, price: '$32,000', status: 'Sold', location: 'California' },
    { id: 3, name: 'Komatsu PC200 Excavator', category: 'Excavators', year: 2020, price: '$52,000', status: 'Available', location: 'Florida' },
    { id: 4, name: 'Case 580N Backhoe', category: 'Backhoes', year: 2017, price: '$28,000', status: 'Reserved', location: 'New York' },
  ];

  const filteredMachines = machines.filter(machine =>
    machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    machine.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Machine Management</h2>
          <p className="text-gray-600">Manage your construction equipment inventory</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="mr-2 h-4 w-4" />
          Add New Machine
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search machines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Export</Button>
        </div>
      </Card>

      {/* Machines Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Machine</th>
                <th className="text-left py-3">Category</th>
                <th className="text-left py-3">Year</th>
                <th className="text-left py-3">Price</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Location</th>
                <th className="text-left py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMachines.map((machine) => (
                <tr key={machine.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 font-medium">{machine.name}</td>
                  <td className="py-4">{machine.category}</td>
                  <td className="py-4">{machine.year}</td>
                  <td className="py-4 font-semibold">{machine.price}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      machine.status === 'Available' ? 'bg-green-100 text-green-800' :
                      machine.status === 'Sold' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {machine.status}
                    </span>
                  </td>
                  <td className="py-4">{machine.location}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash className="h-4 w-4" />
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

export default MachineManagement;
