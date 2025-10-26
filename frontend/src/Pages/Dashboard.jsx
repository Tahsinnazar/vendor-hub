import React from 'react';
import { 
  TrendingUp, 
  FileText, 
  ShoppingCart, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Users,
  Package,
  BarChart3
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Quotations',
      value: '24',
      change: '+12%',
      changeType: 'positive',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Orders Received',
      value: '18',
      change: '+8%',
      changeType: 'positive',
      icon: ShoppingCart,
      color: 'green'
    },
    {
      title: 'Pending Payments',
      value: '$45,200',
      change: '-5%',
      changeType: 'negative',
      icon: DollarSign,
      color: 'yellow'
    },
    {
      title: 'Active Vendors',
      value: '156',
      change: '+3%',
      changeType: 'positive',
      icon: Users,
      color: 'purple'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'quotation',
      title: 'New quotation submitted for Office Furniture',
      time: '2 hours ago',
      status: 'pending',
      icon: FileText
    },
    {
      id: 2,
      type: 'order',
      title: 'Order #12345 has been approved',
      time: '4 hours ago',
      status: 'approved',
      icon: CheckCircle
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment of $2,500 received',
      time: '1 day ago',
      status: 'completed',
      icon: DollarSign
    },
    {
      id: 4,
      type: 'vendor',
      title: 'New vendor registration: Tech Solutions Inc.',
      time: '2 days ago',
      status: 'pending',
      icon: Users
    },
    {
      id: 5,
      type: 'quotation',
      title: 'Quotation #RFQ-2024-003 rejected',
      time: '3 days ago',
      status: 'rejected',
      icon: AlertCircle
    }
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'Office Supplies RFQ',
      deadline: '2024-02-15',
      daysLeft: 3,
      priority: 'high'
    },
    {
      id: 2,
      title: 'IT Services Proposal',
      deadline: '2024-02-20',
      daysLeft: 8,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Facility Maintenance Contract',
      deadline: '2024-02-25',
      daysLeft: 13,
      priority: 'low'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'text-green-600';
      case 'completed':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'rejected':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="px-6 py-4 flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.status === 'approved' || activity.status === 'completed' 
                          ? 'bg-green-100' 
                          : activity.status === 'rejected'
                          ? 'bg-red-100'
                          : 'bg-yellow-100'
                      }`}>
                        <Icon className={`w-4 h-4 ${getStatusColor(activity.status)}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h3>
              </div>
              <div className="p-6 space-y-4">
                {upcomingDeadlines.map((deadline) => (
                  <div key={deadline.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{deadline.title}</p>
                      <p className="text-sm text-gray-500">
                        {deadline.daysLeft} days left
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(deadline.priority)}`}>
                      {deadline.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                <div className="text-center">
                  <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Submit Quotation</p>
                </div>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
                <div className="text-center">
                  <Package className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Add Product</p>
                </div>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">View Reports</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Quotation Success Rate</h4>
                <p className="text-3xl font-bold text-blue-600">78%</p>
                <p className="text-sm text-gray-500">+5% from last month</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">On-Time Delivery</h4>
                <p className="text-3xl font-bold text-green-600">92%</p>
                <p className="text-sm text-gray-500">+2% from last month</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Average Response Time</h4>
                <p className="text-3xl font-bold text-yellow-600">2.3h</p>
                <p className="text-sm text-gray-500">-0.5h from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
