import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { Download, Filter, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedChart, setSelectedChart] = useState('quotations');

  const quotationData = [
    { month: 'Jan', quotations: 12, orders: 8, revenue: 25000 },
    { month: 'Feb', quotations: 18, orders: 12, revenue: 35000 },
    { month: 'Mar', quotations: 15, orders: 10, revenue: 30000 },
    { month: 'Apr', quotations: 22, orders: 16, revenue: 45000 },
    { month: 'May', quotations: 28, orders: 20, revenue: 55000 },
    { month: 'Jun', quotations: 25, orders: 18, revenue: 48000 }
  ];

  const categoryData = [
    { name: 'Office Supplies', value: 35, color: '#8884d8' },
    { name: 'Technology', value: 25, color: '#82ca9d' },
    { name: 'Manufacturing', value: 20, color: '#ffc658' },
    { name: 'Services', value: 15, color: '#ff7300' },
    { name: 'Consulting', value: 5, color: '#00ff00' }
  ];

  const vendorPerformance = [
    { name: 'Office Solutions Inc.', quotations: 15, success: 85, revenue: 45000 },
    { name: 'TechCloud Pro', quotations: 12, success: 92, revenue: 38000 },
    { name: 'Industrial Solutions', quotations: 8, success: 75, revenue: 25000 },
    { name: 'Business Advisors', quotations: 10, success: 80, revenue: 32000 },
    { name: 'Maintenance Masters', quotations: 6, success: 90, revenue: 18000 }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 25000, profit: 5000 },
    { month: 'Feb', revenue: 35000, profit: 8000 },
    { month: 'Mar', revenue: 30000, profit: 6000 },
    { month: 'Apr', revenue: 45000, profit: 12000 },
    { month: 'May', revenue: 55000, profit: 15000 },
    { month: 'Jun', revenue: 48000, profit: 13000 }
  ];

  const summaryStats = [
    {
      title: 'Total Revenue',
      value: '$238,000',
      change: '+15.2%',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      title: 'Quotations Submitted',
      value: '120',
      change: '+8.5%',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      title: 'Success Rate',
      value: '78.5%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      title: 'Average Order Value',
      value: '$3,950',
      change: '-1.2%',
      changeType: 'negative',
      icon: TrendingDown
    }
  ];

  const renderChart = () => {
    switch (selectedChart) {
      case 'quotations':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={quotationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quotations" fill="#3b82f6" name="Quotations" />
              <Bar dataKey="orders" fill="#10b981" name="Orders" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'revenue':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
              <Area type="monotone" dataKey="profit" stackId="1" stroke="#10b981" fill="#10b981" />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'categories':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'vendors':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={vendorPerformance} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="quotations" fill="#3b82f6" name="Quotations" />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Reports & Analytics</h1>
          <p className="text-lg text-gray-600">Comprehensive insights into your business performance</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm flex items-center ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <Icon className="w-4 h-4 mr-1" />
                      {stat.change} from last period
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    stat.changeType === 'positive' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1month">Last Month</option>
                  <option value="3months">Last 3 Months</option>
                  <option value="6months">Last 6 Months</option>
                  <option value="1year">Last Year</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedChart}
                  onChange={(e) => setSelectedChart(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="quotations">Quotations & Orders</option>
                  <option value="revenue">Revenue & Profit</option>
                  <option value="categories">Category Distribution</option>
                  <option value="vendors">Vendor Performance</option>
                </select>
              </div>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Main Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {selectedChart === 'quotations' && 'Quotations vs Orders'}
              {selectedChart === 'revenue' && 'Revenue & Profit Trends'}
              {selectedChart === 'categories' && 'Category Distribution'}
              {selectedChart === 'vendors' && 'Vendor Performance'}
            </h3>
            <p className="text-sm text-gray-500">
              {selectedPeriod === '1month' && 'Last month data'}
              {selectedPeriod === '3months' && 'Last 3 months data'}
              {selectedPeriod === '6months' && 'Last 6 months data'}
              {selectedPeriod === '1year' && 'Last year data'}
            </p>
          </div>
          {renderChart()}
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Performing Vendors */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Vendors</h3>
            <div className="space-y-4">
              {vendorPerformance.slice(0, 5).map((vendor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{vendor.name}</p>
                      <p className="text-xs text-gray-500">{vendor.quotations} quotations</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">${vendor.revenue.toLocaleString()}</p>
                    <p className="text-xs text-green-600">{vendor.success}% success</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average Response Time</span>
                <span className="text-sm font-semibold text-gray-900">2.3 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Customer Satisfaction</span>
                <span className="text-sm font-semibold text-gray-900">4.8/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">On-Time Delivery</span>
                <span className="text-sm font-semibold text-gray-900">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Repeat Business Rate</span>
                <span className="text-sm font-semibold text-gray-900">68%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Quote-to-Order Conversion</span>
                <span className="text-sm font-semibold text-gray-900">78%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-gray-900 mb-2">Increase Technology Category Focus</h4>
              <p className="text-sm text-gray-600">
                Technology category shows high success rates. Consider expanding your technology offerings.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium text-gray-900 mb-2">Optimize Response Time</h4>
              <p className="text-sm text-gray-600">
                Faster response times correlate with higher success rates. Aim for under 2 hours.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-medium text-gray-900 mb-2">Strengthen Vendor Relationships</h4>
              <p className="text-sm text-gray-600">
                Focus on building stronger relationships with top-performing vendors for better terms.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-medium text-gray-900 mb-2">Diversify Service Portfolio</h4>
              <p className="text-sm text-gray-600">
                Consider adding consulting services to capture higher-value opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
