"use client";

import { useState } from "react";
import { Search, MessageSquare, Users, ThumbsUp, Share2 } from "lucide-react";
import Link from "next/link";

const discussions = [
  {
    id: 1,
    title: "Best practices for implementing neural networks",
    author: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Machine Learning",
    replies: 23,
    likes: 45,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    title: "How to optimize React components for performance",
    author: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Web Development",
    replies: 15,
    likes: 32,
    timestamp: "1 day ago",
  },
  {
    id: 3,
    title: "Data visualization techniques for large datasets",
    author: "Carol Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Data Science",
    replies: 37,
    likes: 61,
    timestamp: "3 days ago",
  },
];

const popularTags = [
  "MachineLearning",
  "WebDev",
  "DataScience",
  "AI",
  "Programming",
  "Career",
];

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDiscussions = discussions.filter(
    (discussion) =>
      discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discussion.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Community Discussions</h1>

      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="relative mb-4 md:mb-0 md:w-1/2">
          <input
            type="text"
            placeholder="Search discussions..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <Link
          href="/community/new-discussion"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Start New Discussion
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          {filteredDiscussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={discussion.avatar}
                  alt={discussion.author}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{discussion.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Posted by {discussion.author} in {discussion.category} •{" "}
                    {discussion.timestamp}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <MessageSquare size={16} className="mr-1" />
                    {discussion.replies} replies
                  </span>
                  <span className="flex items-center">
                    <ThumbsUp size={16} className="mr-1" />
                    {discussion.likes} likes
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="hover:text-blue-500">
                    <Share2 size={16} />
                  </button>
                  <Link
                    href={`/community/discussion/${discussion.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Discussion
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filteredDiscussions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No discussions found. Try adjusting your search or start a new
                discussion.
              </p>
            </div>
          )}
        </div>

        <div className="lg:w-1/4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Community Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users size={20} className="mr-2" />
                  Total Members
                </span>
                <span className="font-semibold">10,234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600 dark:text-gray-300">
                  <MessageSquare size={20} className="mr-2" />
                  Active Discussions
                </span>
                <span className="font-semibold">1,872</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600 dark:text-gray-300">
                  <ThumbsUp size={20} className="mr-2" />
                  Total Likes
                </span>
                <span className="font-semibold">23,456</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600 dark:text-gray-300">
                  <Share2 size={20} className="mr-2" />
                  New Posts Today
                </span>
                <span className="font-semibold">76</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
