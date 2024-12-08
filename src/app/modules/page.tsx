"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Clock,
  Star,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description:
      "Learn the fundamentals of machine learning algorithms and applications.",
    author: "Dr. Jane Smith",
    duration: "4 weeks",
    level: "Beginner",
    rating: 4.8,
    enrolled: 1234,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    title: "Advanced Web Development",
    description:
      "Master modern web technologies and frameworks for building scalable applications.",
    author: "John Doe",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.6,
    enrolled: 987,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    title: "Data Science Essentials",
    description:
      "Explore data analysis, visualization, and statistical techniques for insights.",
    author: "Dr. Emily Chen",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.9,
    enrolled: 2345,
    image: "/placeholder.svg?height=100&width=200",
  },
  // Add more modules as needed
];

export default function ModulesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredModules = modules.filter(
    (module) =>
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLevel === "All Levels" || module.level === selectedLevel)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Modules</h1>

      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="relative mb-4 md:mb-0 md:w-1/2">
          <input
            type="text"
            placeholder="Search modules..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <select
              className="appearance-none bg-white border rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-2.5 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
          <button className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500">
            <Filter size={20} />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredModules.map((module) => (
          <div
            key={module.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={module.image}
              alt={module.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {module.description}
              </p>
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt={module.author}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{module.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {module.level}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-1" />
                  <span>{module.enrolled} enrolled</span>
                </div>
                <div className="flex items-center">
                  <Star size={16} className="mr-1 text-yellow-500" />
                  <span>{module.rating}</span>
                </div>
              </div>
              <Link
                href={`/modules/${module.id}`}
                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                View Module
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            No modules found. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}
