"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

// This is a mock module data. In a real application, you would fetch this data from your API.
const moduleData = {
  id: "1",
  title: "Introduction to Machine Learning",
  description: "Learn the basics of machine learning and its applications.",
  lessons: [
    {
      id: "1",
      title: "What is Machine Learning?",
      content: "Machine learning is a subset of artificial intelligence...",
      resources: [
        { title: "ML Basics", url: "https://example.com/ml-basics" },
        { title: "Types of ML", url: "https://example.com/ml-types" },
      ],
    },
    {
      id: "2",
      title: "Supervised Learning",
      content: "Supervised learning is a type of machine learning where...",
      resources: [
        {
          title: "Supervised Learning Guide",
          url: "https://example.com/supervised-learning",
        },
      ],
    },
    // Add more lessons as needed
  ],
};

export default function ModuleView({ params }: { params: { id: string } }) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const currentLesson = moduleData.lessons[currentLessonIndex];

  const markLessonComplete = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons([...completedLessons, currentLesson.id]);
    }
  };

  const goToNextLesson = () => {
    if (currentLessonIndex < moduleData.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const goToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/modules"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        <ArrowLeft className="inline mr-2" size={20} />
        Back to Modules
      </Link>
      <h1 className="text-3xl font-bold mb-4">{moduleData.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {moduleData.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Lessons</h2>
          <ul className="space-y-2">
            {moduleData.lessons.map((lesson, index) => (
              <li
                key={lesson.id}
                className={`cursor-pointer p-2 rounded ${
                  index === currentLessonIndex
                    ? "bg-blue-100 dark:bg-blue-900"
                    : ""
                } ${
                  completedLessons.includes(lesson.id) ? "text-green-500" : ""
                }`}
                onClick={() => setCurrentLessonIndex(index)}
              >
                {lesson.title}
                {completedLessons.includes(lesson.id) && (
                  <CheckCircle className="inline ml-2" size={16} />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-4">{currentLesson.title}</h2>
          <div className="prose dark:prose-invert mb-8">
            <p>{currentLesson.content}</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Resources</h3>
          <ul className="list-disc pl-5 mb-8">
            {currentLesson.resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center">
            <button
              onClick={goToPreviousLesson}
              disabled={currentLessonIndex === 0}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center disabled:opacity-50"
            >
              <ArrowLeft className="mr-2" size={20} />
              Previous Lesson
            </button>
            <button
              onClick={markLessonComplete}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <CheckCircle className="mr-2" size={20} />
              Mark as Complete
            </button>
            <button
              onClick={goToNextLesson}
              disabled={currentLessonIndex === moduleData.lessons.length - 1}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center disabled:opacity-50"
            >
              Next Lesson
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
