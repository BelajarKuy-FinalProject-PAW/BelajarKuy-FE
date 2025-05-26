import QuizCard from "@/app/components/card/quizcard"

// Sample quiz data
const quizzes = [
  {
    id: "1",
    title: "JavaScript Fundamentals Quiz",
    description: "Test your knowledge of JavaScript basics including variables, functions, and data types.",
    image: "/placeholder.svg?height=200&width=300",
    difficulty: "Easy" as const,
    duration: 15,
    questionsCount: 10,
    points: 100,
  },
  {
    id: "2",
    title: "React Hooks Deep Dive",
    description: "Advanced quiz covering useState, useEffect, useContext and custom hooks.",
    image: "/placeholder.svg?height=200&width=300",
    difficulty: "Medium" as const,
    duration: 25,
    questionsCount: 15,
    points: 200,
  },
  {
    id: "3",
    title: "Node.js & Express Mastery",
    description: "Comprehensive test on backend development with Node.js and Express framework.",
    image: "/placeholder.svg?height=200&width=300",
    difficulty: "Hard" as const,
    duration: 30,
    questionsCount: 20,
    points: 300,
  },
]

export default function QuizzesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz & Latihan</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Uji kemampuan Anda dengan berbagai quiz interaktif dan dapatkan poin untuk setiap jawaban yang benar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  )
}
