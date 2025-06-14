"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import QuizHeader from "@/app/pages/quiz/partials/header"
import QuestionCard from "@/app/components/card/questioncard"
import QuizResult from "@/app/pages/quiz/partials/result"
import type { Quiz, QuizAnswer, QuizResult as QuizResultType } from "@/app/types/quiz"

// Sample quiz data
const sampleQuiz: Quiz = {
  id: "1",
  title: "Quiz JavaScript Fundamentals",
  description: "Uji pemahaman Anda tentang dasar-dasar JavaScript",
  timeLimit: 15, 
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Apa yang dimaksud dengan 'hoisting' dalam JavaScript?",
      options: [
        "Proses mengangkat variabel dan fungsi ke atas scope",
        "Proses menghapus variabel dari memory",
        "Proses mengubah tipe data variabel",
        "Proses menggabungkan dua string",
      ],
      correctAnswer: 0,
      explanation:
        "Hoisting adalah mekanisme JavaScript dimana deklarasi variabel dan fungsi dipindahkan ke atas scope mereka selama fase kompilasi.",
      points: 10,
    },
    {
      id: "q2",
      question: "Manakah cara yang benar untuk mendeklarasikan array dalam JavaScript?",
      options: ["let arr = (1, 2, 3)", "let arr = [1, 2, 3]", "let arr = {1, 2, 3}", "let arr = <1, 2, 3>"],
      correctAnswer: 1,
      explanation: "Array dalam JavaScript dideklarasikan menggunakan tanda kurung siku [].",
      points: 5,
    },
    {
      id: "q3",
      question: "Apa output dari console.log(typeof null)?",
      options: ["null", "undefined", "object", "boolean"],
      correctAnswer: 2,
      explanation:
        "Ini adalah bug yang terkenal dalam JavaScript. typeof null mengembalikan 'object' meskipun null bukan object.",
      points: 15,
    },
    {
      id: "q4",
      question: "Manakah yang merupakan method untuk menambahkan elemen ke akhir array?",
      options: ["array.add()", "array.append()", "array.push()", "array.insert()"],
      correctAnswer: 2,
      explanation: "Method push() digunakan untuk menambahkan satu atau lebih elemen ke akhir array.",
      points: 10,
    },
    {
      id: "q5",
      question: "Apa perbedaan antara '==' dan '===' dalam JavaScript?",
      options: [
        "Tidak ada perbedaan",
        "'==' membandingkan nilai, '===' membandingkan nilai dan tipe data",
        "'==' lebih cepat dari '==='",
        "'===' hanya untuk angka",
      ],
      correctAnswer: 1,
      explanation:
        "Operator '==' melakukan type coercion sebelum membandingkan, sedangkan '===' membandingkan nilai dan tipe data tanpa konversi.",
      points: 10,
    },
  ],
}

export default function QuizPage() {
  const router = useRouter()
  const [quiz] = useState<Quiz>(sampleQuiz)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [timeRemaining, setTimeRemaining] = useState<number>(quiz.timeLimit ? quiz.timeLimit * 60 : 0)
  const [quizStartTime] = useState<number>(Date.now())
  const [showResult, setShowResult] = useState(false)
  const [quizResult, setQuizResult] = useState<QuizResultType | null>(null)
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)

  // Timer effect
  useEffect(() => {
    if (quiz.timeLimit && timeRemaining > 0 && !isQuizCompleted) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleQuizSubmit()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [timeRemaining, isQuizCompleted, quiz.timeLimit])

  const handleAnswerSelect = (answer: number) => {
    setAnswers((prev) => ({
      ...prev,
      [quiz.questions[currentQuestionIndex].id]: answer,
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      handleQuizSubmit()
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const handleQuizSubmit = () => {
    setIsQuizCompleted(true)
    const timeSpent = Math.floor((Date.now() - quizStartTime) / 1000)

    const quizAnswers: QuizAnswer[] = quiz.questions.map((question) => {
      const selectedAnswer = answers[question.id]
      const isCorrect = selectedAnswer === question.correctAnswer
      return {
        questionId: question.id,
        selectedAnswer: selectedAnswer ?? -1,
        isCorrect,
        points: isCorrect ? question.points : 0,
      }
    })

    const totalPoints = quizAnswers.reduce((sum, answer) => sum + answer.points, 0)
    const maxPoints = quiz.questions.reduce((sum, question) => sum + question.points, 0)
    const correctAnswers = quizAnswers.filter((answer) => answer.isCorrect).length
    const percentage = (correctAnswers / quiz.questions.length) * 100

    const result: QuizResultType = {
      totalQuestions: quiz.questions.length,
      correctAnswers,
      totalPoints,
      maxPoints,
      percentage,
      passed: percentage >= quiz.passingScore,
      timeSpent,
      answers: quizAnswers,
    }

    setQuizResult(result)
    setShowResult(true)
  }

  const handleRetry = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setTimeRemaining(quiz.timeLimit ? quiz.timeLimit * 60 : 0)
    setShowResult(false)
    setQuizResult(null)
    setIsQuizCompleted(false)
  }

  const handleBackToCourse = () => {
    router.push("/pages/quiz")
  }

  if (showResult && quizResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <QuizResult result={quizResult} onRetry={handleRetry} onBackToCourse={handleBackToCourse} />
      </div>
    )
  }

  const currentQuestion = quiz.questions[currentQuestionIndex]
  const selectedAnswer = answers[currentQuestion.id]

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <QuizHeader
          title={quiz.title}
          description={quiz.description}
          totalQuestions={quiz.questions.length}
          timeLimit={quiz.timeLimit}
          currentQuestion={currentQuestionIndex + 1}
          timeRemaining={timeRemaining}
        />

        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sebelumnya
          </button>

          <div className="flex gap-4">
            <button
              onClick={handleQuizSubmit}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Selesai Quiz
            </button>

            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === undefined}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestionIndex === quiz.questions.length - 1 ? "Selesai" : "Selanjutnya"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
