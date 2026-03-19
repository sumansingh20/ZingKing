'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiLogOut,
  FiBox,
  FiShoppingCart,
  FiMessageSquare,
} from 'react-icons/fi';
import axios from 'axios';

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AdminDashboard() {
  const { admin, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    contacts: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, ordersRes, contactsRes] = await Promise.all([
          axios.get('/api/products'),
          axios.get('/api/orders'),
          axios.get('/api/contact'),
        ]);

        setStats({
          products: productsRes.data.data?.length || 0,
          orders: ordersRes.data.data?.length || 0,
          contacts: contactsRes.data.data?.length || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push('/admin');
  };

  const dashboardItems = [
    {
      icon: FiBox,
      title: 'Products',
      value: stats.products,
      link: '/admin/products',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FiShoppingCart,
      title: 'Orders',
      value: stats.orders,
      link: '/admin/orders',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FiMessageSquare,
      title: 'Messages',
      value: stats.contacts,
      link: '/admin/contacts',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 text-sm">Welcome, {admin?.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <FiLogOut size={20} />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red"></div>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {dashboardItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={statVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => router.push(item.link)}
                    className={`cursor-pointer bg-gradient-to-br ${item.color} text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-opacity-80 opacity-80 text-sm font-medium">
                          {item.title}
                        </p>
                        <p className="text-4xl font-bold mt-2">{item.value}</p>
                      </div>
                      <Icon size={40} className="opacity-20" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => router.push('/admin/products/new')}
                  className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-4 text-left transition"
                >
                  <p className="font-semibold text-blue-900">Add New Product</p>
                  <p className="text-sm text-blue-700">Create a new product</p>
                </button>
                <button
                  onClick={() => router.push('/admin/orders')}
                  className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-4 text-left transition"
                >
                  <p className="font-semibold text-green-900">View Orders</p>
                  <p className="text-sm text-green-700">Manage customer orders</p>
                </button>
                <button
                  onClick={() => router.push('/admin/contacts')}
                  className="bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg p-4 text-left transition"
                >
                  <p className="font-semibold text-purple-900">View Messages</p>
                  <p className="text-sm text-purple-700">Customer inquiries</p>
                </button>
                <button
                  onClick={() => router.push('/admin/products')}
                  className="bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg p-4 text-left transition"
                >
                  <p className="font-semibold text-amber-900">All Products</p>
                  <p className="text-sm text-amber-700">Manage product catalog</p>
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
