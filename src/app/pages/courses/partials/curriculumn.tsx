"use client";

import React from 'react'
import { useState } from 'react';
import type { CourseModule } from '@/app/types/courses';
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";

interface CourseCurriculumn{ 
    modules: CourseModule[], 
    className?: string,
}

const Curriculumn = ({modules, className = " "}: CourseCurriculumn) => {
    const [expandedModules, setExpandedModules] = useState<string[]>([modules[0]?.id || ""])

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => (prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]))
  }

  const totalLessons = modules.reduce((total, module) => total + module.lessons.length, 0)
  const completedLessons = modules.reduce(
    (total, module) => total + module.lessons.filter((lesson) => lesson.isCompleted).length,
    0,
  )

  return (
    <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Konten Kursus</h3>
        <div className="text-sm text-gray-600">
          <p>
            {modules.length} bagian • {totalLessons} pelajaran
          </p>
          <p>
            Progress: {completedLessons}/{totalLessons} selesai
          </p>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {modules.map((module) => (
          <div key={module.id} className="border-b border-gray-100 last:border-b-0">
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {expandedModules.includes(module.id) ? (
                    <FaChevronDown size={16} className="text-gray-500" />
                  ) : (
                    <FaChevronRight  size={16} className="text-gray-500" />
                  )}
                  <span className="font-medium text-gray-900">{module.title}</span>
                </div>
                <span className="text-sm text-gray-500">{module.lessons.length} pelajaran</span>
              </div>
            </button>

            {expandedModules.includes(module.id) && (
              <div className="pb-2">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center gap-3 px-4 py-2 ml-6 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    {lesson.isCompleted ? (
                      <FaRegCheckCircle size={16} className="text-green-500" />
                    ) : (
                      <CiPlay1 size={16} className="text-gray-400" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{lesson.title}</p>
                    </div>
                    <span className="text-xs text-gray-500">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Curriculumn
