"use client";

import { useState } from "react";
import { BarChart, Users, Book, Award, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome back, John!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard icon={<Book />} title="Active Modules" value="4" />
        <DashboardCard
          icon={<BarChart />}
          title="Overall Progress"
          value="68%"
        />
        <DashboardCard icon={<Users />} title="Study Groups" value="2" />
        <DashboardCard icon={<Award />} title="Achievements" value="7" />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
          <button
            className={`py-2 px-4 ${
              activeTab === "overview"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "modules"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("modules")}
          >
            My Modules
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "recommendations"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("recommendations")}
          >
            Recommendations
          </button>
        </div>

        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "modules" && <ModulesTab />}
        {activeTab === "recommendations" && <RecommendationsTab />}
      </div>
    </div>
  );
}

function DashboardCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center">
      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 text-blue-500 dark:text-blue-300">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Learning Overview</h2>
      <p className="mb-4">
        You are making great progress! Keep up the good work.
      </p>
      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Current Focus</h3>
        <p>Machine Learning Fundamentals</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>
      <Link
        href="/modules"
        className="text-blue-500 hover:underline flex items-center"
      >
        View all modules <ArrowRight className="ml-2" size={16} />
      </Link>
    </div>
  );
}

function ModulesTab() {
  const modules = [
    { title: "Machine Learning Fundamentals", progress: 70 },
    { title: "Data Structures and Algorithms", progress: 45 },
    { title: "Web Development with React", progress: 90 },
    { title: "Python for Data Science", progress: 20 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Active Modules</h2>
      <div className="space-y-4">
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4"
          >
            <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2">{module.progress}% complete</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecommendationsTab() {
  const recommendations = [
    { title: "Introduction to Neural Networks", rating: 4.8 },
    { title: "Advanced JavaScript Concepts", rating: 4.6 },
    { title: "SQL for Data Analysis", rating: 4.7 },
    { title: "Cloud Computing Essentials", rating: 4.5 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4"
          >
            <h3 className="text-lg font-semibold mb-2">{rec.title}</h3>
            <div className="flex items-center mb-2">
              <Star className="text-yellow-400 mr-1" size={16} />
              <span>{rec.rating}</span>
            </div>
            <button className="mt-2 text-blue-500 hover:underline">
              Add to My Modules
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
