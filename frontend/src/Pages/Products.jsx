import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Eye } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'Technology',
    'Office Supplies',
    'Manufacturing',
    'Services',
    'Consulting',
    'Maintenance'
  ];

  const products = [
    {
      id: 1,
      title: 'Office Furniture Set',
      description: 'Complete office furniture solution including desks, chairs, and storage units. Perfect for modern workspaces.',
      category: 'Office Supplies',
      price: '$2,499',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
      vendor: 'Office Solutions Inc.',
      inStock: true
    },
    {
      id: 2,
      title: 'Cloud Computing Services',
      description: 'Comprehensive cloud infrastructure services including hosting, storage, and backup solutions.',
      category: 'Technology',
      price: '$299/month',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
      vendor: 'TechCloud Pro',
      inStock: true
    },
    {
      id: 3,
      title: 'Industrial Equipment',
      description: 'Heavy-duty industrial machinery for manufacturing and production facilities.',
      category: 'Manufacturing',
      price: '$15,000',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      vendor: 'Industrial Solutions',
      inStock: false
    },
    {
      id: 4,
      title: 'Business Consulting',
      description: 'Expert business consulting services to optimize your operations and increase efficiency.',
      category: 'Consulting',
      price: '$150/hour',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      vendor: 'Business Advisors',
      inStock: true
    },
    {
      id: 5,
      title: 'IT Support Services',
      description: '24/7 IT support and maintenance services for your business infrastructure.',
      category: 'Services',
      price: '$199/month',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
      vendor: 'TechSupport Plus',
      inStock: true
    },
    {
      id: 6,
      title: 'Facility Maintenance',
      description: 'Comprehensive facility maintenance services including cleaning, repairs, and upkeep.',
      category: 'Services',
      price: '$500/month',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6d6?w=400',
      vendor: 'Maintenance Masters',
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Products & Services</h1>
          <p className="text-lg text-gray-600">Discover our comprehensive catalog of products and services</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products and services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500">by {product.vendor}</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Request Quote
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
