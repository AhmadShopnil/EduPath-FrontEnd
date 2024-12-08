"use client";

import { useState } from "react";
import { Plus, Trash2, Save } from "lucide-react";
import Link from "next/link";

export default function ModuleCreator() {
  const [moduleTitle, setModuleTitle] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");
  const [lessons, setLessons] = useState([
    { title: "", content: "", resources: [] },
  ]);

  const addLesson = () => {
    setLessons([...lessons, { title: "", content: "", resources: [] }]);
  };

  const removeLesson = (index: number) => {
    const newLessons = lessons.filter((_, i) => i !== index);
    setLessons(newLessons);
  };

  const updateLesson = (index: number, field: string, value: string) => {
    const newLessons = [...lessons];
    newLessons[index] = { ...newLessons[index], [field]: value };
    setLessons(newLessons);
  };

  const addResource = (lessonIndex: number) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].resources.push({ title: "", url: "" });
    setLessons(newLessons);
  };

  const updateResource = (
    lessonIndex: number,
    resourceIndex: number,
    field: string,
    value: string
  ) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].resources[resourceIndex] = {
      ...newLessons[lessonIndex].resources[resourceIndex],
      [field]: value,
    };
    setLessons(newLessons);
  };

  const removeResource = (lessonIndex: number, resourceIndex: number) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].resources = newLessons[
      lessonIndex
    ].resources.filter((_, i) => i !== resourceIndex);
    setLessons(newLessons);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ moduleTitle, moduleDescription, lessons });
    // After successful submission, you might want to redirect the user or show a success message
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Module</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="moduleTitle"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Module Title
          </label>
          <input
            type="text"
            id="moduleTitle"
            value={moduleTitle}
            onChange={(e) => setModuleTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="moduleDescription"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Module Description
          </label>
          <textarea
            id="moduleDescription"
            value={moduleDescription}
            onChange={(e) => setModuleDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows={3}
            required
          ></textarea>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Lessons</h2>
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="border rounded-md p-4 mb-4 dark:border-gray-700"
            >
              <div className="mb-4">
                <label
                  htmlFor={`lessonTitle-${index}`}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Lesson Title
                </label>
                <input
                  type="text"
                  id={`lessonTitle-${index}`}
                  value={lesson.title}
                  onChange={(e) => updateLesson(index, "title", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`lessonContent-${index}`}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Lesson Content
                </label>
                <textarea
                  id={`lessonContent-${index}`}
                  value={lesson.content}
                  onChange={(e) =>
                    updateLesson(index, "content", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  rows={3}
                  required
                ></textarea>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Resources</h3>
                {lesson.resources.map((resource, resourceIndex) => (
                  <div
                    key={resourceIndex}
                    className="flex items-center space-x-2 mb-2"
                  >
                    <input
                      type="text"
                      value={resource?.title}
                      onChange={(e) =>
                        updateResource(
                          index,
                          resourceIndex,
                          "title",
                          e.target.value
                        )
                      }
                      placeholder="Resource Title"
                      className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <input
                      type="url"
                      value={resource.url}
                      onChange={(e) =>
                        updateResource(
                          index,
                          resourceIndex,
                          "url",
                          e.target.value
                        )
                      }
                      placeholder="Resource URL"
                      className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => removeResource(index, resourceIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addResource(index)}
                  className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                  <Plus size={20} className="mr-1" /> Add Resource
                </button>
              </div>
              {lessons.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeLesson(index)}
                  className="mt-2 text-red-500 hover:text-red-700 flex items-center"
                >
                  <Trash2 size={20} className="mr-1" /> Remove Lesson
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addLesson}
            className="text-blue-500 hover:text-blue-700 flex items-center"
          >
            <Plus size={20} className="mr-1" /> Add Lesson
          </button>
        </div>
        <div className="flex justify-between">
          <Link
            href="/modules"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <Save size={20} className="mr-2" /> Save Module
          </button>
        </div>
      </form>
    </div>
  );
}
