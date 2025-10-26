import React, { useState } from 'react';
import { Search, Filter, Eye, Download, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const Quotations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const statusOptions = [
    { value: 'all', label: 'All Status', color: 'gray' },
    { value: 'open', label: 'Open', color: 'blue' },
    { value: 'submitted', label: 'Submitted', color: 'yellow' },
    { value: 'approved', label: 'Approved', color: 'green' },
    { value: 'rejected', label: 'Rejected', color: 'red' }
  ];

  const quotations = [
    {
      id: 'RFQ-2024-001',
      title: 'Office Furniture Procurement',
      description: 'Complete office furniture setup for new branch including desks, chairs, and storage units.',
      deadline: '2024-02-15',
      status: 'open',
      value: '$25,000',
      category: 'Office Supplies',
      submittedDate: '2024-01-15',
      vendor: 'Office Solutions Inc.'
    },
    {
      id: 'RFQ-2024-002',
      title: 'IT Infrastructure Services',
      description: 'Cloud computing services and IT support for 50+ employee organization.',
      deadline: '2024-02-20',
      status: 'submitted',
      value: '$15,000',
      category: 'Technology',
      submittedDate: '2024-01-20',
      vendor: 'TechCloud Pro'
    },
    {
      id: 'RFQ-2024-003',
      title: 'Industrial Equipment',
      description: 'Heavy machinery and equipment for manufacturing facility upgrade.',
      deadline: '2024-02-10',
      status: 'approved',
      value: '$150,000',
      category: 'Manufacturing',
      submittedDate: '2024-01-10',
      vendor: 'Industrial Solutions'
    },
    {
      id: 'RFQ-2024-004',
      title: 'Business Consulting Services',
      description: 'Strategic business consulting for operational efficiency improvement.',
      deadline: '2024-02-25',
      status: 'rejected',
      value: '$8,000',
      category: 'Consulting',
      submittedDate: '2024-01-25',
      vendor: 'Business Advisors'
    },
    {
      id: 'RFQ-2024-005',
      title: 'Facility Maintenance',
      description: 'Comprehensive facility maintenance and cleaning services for office building.',
      deadline: '2024-03-01',
      status: 'open',
      value: '$12,000',
      category: 'Services',
      submittedDate: '2024-01-30',
      vendor: 'Maintenance Masters'
    },
    {
      id: 'RFQ-2024-006',
      title: 'Marketing Services',
      description: 'Digital marketing and advertising services for product launch campaign.',
      deadline: '2024-02-28',
      status: 'submitted',
      value: '$20,000',
      category: 'Marketing',
      submittedDate: '2024-02-01',
      vendor: 'Creative Agency'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open':
        return <Clock className="w-4 h-4" />;
      case 'submitted':
        return <AlertCircle className="w-4 h-4" />;
      case 'approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'submitted':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredQuotations = quotations.filter(quote => {
    const matchesSearch = quote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || quote.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDaysUntilDeadline = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Quotations & RFQs</h1>
          <p className="text-lg text-gray-600">Manage your quotation requests and track their status</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search quotations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Quotations Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    RFQ ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredQuotations.map(quote => {
                  const daysLeft = getDaysUntilDeadline(quote.deadline);
                  return (
                    <tr key={quote.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{quote.id}</div>
                        <div className="text-sm text-gray-500">{quote.category}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{quote.title}</div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">{quote.description}</div>
                        <div className="text-xs text-gray-400 mt-1">Vendor: {quote.vendor}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{formatDate(quote.deadline)}</div>
                        <div className={`text-xs ${
                          daysLeft < 0 ? 'text-red-600' : 
                          daysLeft <= 3 ? 'text-yellow-600' : 
                          'text-green-600'
                        }`}>
                          {daysLeft < 0 ? 'Overdue' : `${daysLeft} days left`}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(quote.status)}`}>
                          {getStatusIcon(quote.status)}
                          <span className="ml-1 capitalize">{quote.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {quote.value}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900 flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </button>
                          <button className="text-green-600 hover:text-green-900 flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Results */}
        {filteredQuotations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No quotations found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Open RFQs</p>
                <p className="text-2xl font-bold text-gray-900">
                  {quotations.filter(q => q.status === 'open').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Submitted</p>
                <p className="text-2xl font-bold text-gray-900">
                  {quotations.filter(q => q.status === 'submitted').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Approved</p>
                <p className="text-2xl font-bold text-gray-900">
                  {quotations.filter(q => q.status === 'approved').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-4 h-4 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Rejected</p>
                <p className="text-2xl font-bold text-gray-900">
                  {quotations.filter(q => q.status === 'rejected').length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotations;
