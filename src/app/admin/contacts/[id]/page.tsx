'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiSave } from 'react-icons/fi';
import { IContact } from '@/models/Contact';

export default function ContactDetails() {
  const router = useRouter();
  const params = useParams();
  const contactId = params?.id as string;

  const [contact, _setContact] = useState<IContact | null>(null);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchContact();
  }, [contactId]);

  const fetchContact = async () => {
    try {
      setIsLoading(true);
      // TODO: Create get single contact API
      // For now, return sample data
      console.log('Fetch contact:', contactId);
    } catch (error) {
      console.error('Error fetching contact:', error);
      setError('Failed to load contact');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitResponse = async () => {
    if (!contact || !response.trim()) {
      alert('Please enter a response');
      return;
    }

    try {
      setIsSaving(true);
      // TODO: Create update contact API
      alert('Response saved successfully');
    } catch (error) {
      console.error('Error saving response:', error);
      setError('Failed to save response');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <FiArrowLeft /> Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Message Details
          </h1>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <p className="text-gray-900 font-medium">John Doe</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <p className="text-gray-900 font-medium">john@example.com</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Phone
                </label>
                <p className="text-gray-900 font-medium">+91 98765 43210</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Type
                </label>
                <p className="text-gray-900 font-medium capitalize">inquiry</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Subject
              </label>
              <p className="text-gray-900 font-medium">
                Product Inquiry
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Message
              </label>
              <div className="bg-gray-50 p-4 rounded-lg mt-2 text-gray-900">
                <p>I&apos;d like to know more about your masala products...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Response Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Send Response
          </h2>

          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your response here..."
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 mb-4"
          />

          <button
            onClick={handleSubmitResponse}
            disabled={isSaving}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50"
          >
            <FiSave />
            {isSaving ? 'Saving...' : 'Send Response'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
