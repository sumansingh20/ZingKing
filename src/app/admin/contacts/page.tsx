'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiEye, FiTrash2 } from 'react-icons/fi';
import axios from 'axios';
import { IContact } from '@/models/Contact';

export default function AdminContacts() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    fetchContacts();
  }, [filterType]);

  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const url = filterType
        ? `/api/contact?type=${filterType}`
        : '/api/contact';
      const response = await axios.get(url);
      setContacts(response.data.data || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        // TODO: Implement delete API
        setContacts(contacts.filter((c) => c._id !== id));
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const typeColors: Record<string, string> = {
    inquiry: 'bg-blue-100 text-blue-800',
    partnership: 'bg-green-100 text-green-800',
    feedback: 'bg-purple-100 text-purple-800',
    complaint: 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <FiArrowLeft /> Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900 flex-1 text-center">
          Customer Messages
        </h1>
      </div>

      {/* Filter */}
      <div className="mb-6 flex gap-2 flex-wrap">
        <button
          onClick={() => setFilterType('')}
          className={`px-4 py-2 rounded-lg transition ${
            filterType === ''
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          All Messages
        </button>
        {['inquiry', 'partnership', 'feedback', 'complaint'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-lg transition capitalize ${
              filterType === type
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : contacts.length === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-gray-600">No messages found</p>
        </div>
      ) : (
        <motion.div className="space-y-4">
          {contacts.map((contact, idx) => (
            <motion.div
              key={contact._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                contact.isRead ? 'border-gray-300' : 'border-blue-500'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">
                      {contact.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        typeColors[contact.type]
                      }`}
                    >
                      {contact.type}
                    </span>
                    {!contact.isRead && (
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {contact.email} • {contact.phone}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(contact.createdAt!).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      router.push(`/admin/contacts/${contact._id}`)
                    }
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  >
                    <FiEye size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(contact._id || '')}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {contact.subject}
                </h4>
                <p className="text-gray-700 text-sm line-clamp-2">
                  {contact.message}
                </p>
              </div>

              {contact.isResolved && (
                <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                  <p className="text-green-800">
                    <strong>Response:</strong> {contact.response}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
