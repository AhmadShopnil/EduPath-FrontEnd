'use client'

import { useState } from 'react'
import { Search, MessageSquare, Users, Star } from 'lucide-react'
import Link from 'next/link'

// Mock data for community posts
const communityPosts = [
  { id: 1, title: 'Best resources for learning React?', author: 'John Doe', replies: 15, likes: 32 },
  { id: 2, title: 'How to implement authentication in Next.js?', author: 'Jane Smith', replies: 8, likes: 24 },
  { id: 3, title: 'Tips for mastering machine learning algorithms', author: 'Alex Johnson', replies: 21, likes: 45 },
  // Add more mock posts as needed
]

// Mock data for study groups
const studyGroups = [
  { id: 1, name: 'Web Development Enthusiasts', members: 156, category: 'Web Development' },
  { id: 2, name: 'Data Science Explorers', members: 89, category: 'Data Science' },
  { id: 3, name: 'Mobile App Creators', members: 112, category: 'Mobile Development' },
  // Add more mock study groups as needed
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('discussions')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Community</h1>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search discussions or study groups..."
            className="w-full p-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
        <button
          className={`py-2 px-4 ${activeTab === 'discussions' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('discussions')}
        >
          Discussions
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'studyGroups' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('studyGroups')}
        >
          Study Groups
        </button>
      </div>

      {activeTab === 'discussions' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Discussions</h2>
          <div className="space-y-4">
            {
