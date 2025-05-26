"use client"

import type { QuizResult } from "@/app/types/quiz"
import { FaTrophy } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { FaClock } from "react-icons/fa";
import { LuRotateCcw } from "react-icons/lu";

interface QuizResultProps {
  result: QuizResult
  onRetry: () => void
  onBackToCourse: () => void
}

export default function QuizResult({ result, onRetry, onBackToCourse }: QuizResultProps) {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes} menit ${secs} detik`
  }

  const getScoreColor = () => {
    if (result.percentage >= 80) return "text-green-600"
    if (result.percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBg = () => {
    if (result.percentage >= 80) return "bg-green-50 border-green-200"
    if (result.percentage >= 60) return "bg-yellow-50 border-yellow-200"
    return "bg-red-50 border-red-200"
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Result Header */}
      <div className={`text-center p-8 rounded-lg border-2 ${getScoreBg()} mb-8`}>
        <div className="mb-4">
          {result.passed ? (
            <FaTrophy className="w-16 h-16 text-yellow-500 mx-auto" />
          ) : (
            <FiTarget  className="w-16 h-16 text-gray-400 mx-auto" />
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {result.passed ? "Selamat! Quiz Berhasil" : "Quiz Selesai"}
        </h1>
        <p className="text-gray-600 mb-6">
          {result.passed
            ? "Anda telah berhasil menyelesaikan quiz dengan baik!"
            : "Jangan menyerah, coba lagi untuk hasil yang lebih baik!"}
        </p>

        <div className={`text-6xl font-bold ${getScoreColor()} mb-2`}>{Math.round(result.percentage)}%</div>
        <p className="text-gray-600">
          {result.correctAnswers} dari {result.totalQuestions} jawaban benar
        </p>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <FiTarget  className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">{result.totalPoints}</div>
          <div className="text-sm text-gray-600">Total Poin</div>
          <div className="text-xs text-gray-500 mt-1">dari {result.maxPoints} poin</div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <FaTrophy className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">{result.correctAnswers}</div>
          <div className="text-sm text-gray-600">Jawaban Benar</div>
          <div className="text-xs text-gray-500 mt-1">dari {result.totalQuestions} soal</div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <FaClock className="w-8 h-8 text-green-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">{formatTime(result.timeSpent)}</div>
          <div className="text-sm text-gray-600">Waktu Pengerjaan</div>
        </div>
      </div>

      {/* Answer Review */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Jawaban</h3>
        <div className="space-y-3">
          {result.answers.map((answer, index) => (
            <div key={answer.questionId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-gray-900">Pertanyaan {index + 1}</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    answer.isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {answer.isCorrect ? "Benar" : "Salah"}
                </span>
                <span className="text-sm text-gray-600">+{answer.points} poin</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <LuRotateCcw  className="w-5 h-5" />
          Coba Lagi
        </button>
        <button
          onClick={onBackToCourse}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Kembali ke Kursus
        </button>
      </div>
    </div>
  )
}
