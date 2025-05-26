import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import VideoPlayer from "@/app/pages/courses/partials/vidioplayer"
import CourseCurriculum from "@/app/pages/courses/partials/curriculumn"
import type { CourseDetail } from "@/app/types/courses"
import { FaArrowLeft } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { CiClock1 } from "react-icons/ci";
import { FiBarChart } from "react-icons/fi";

// Sample course detail data
const getCourseDetail = (id: string): CourseDetail | null => {
  const courseDetails: Record<string, CourseDetail> = {
    "1": {
      id: "1",
      title: "Sign up to Webflow",
      category: "DEVELOPMENT",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      studentsCount: "265.7K",
      isFree: true,
      description:
        "Pelajari cara menggunakan Webflow dari dasar hingga mahir. Kursus ini akan mengajarkan Anda cara membuat website responsif tanpa coding menggunakan platform Webflow yang powerful.",
      instructor: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        title: "Web Designer & Webflow Expert",
      },
      duration: "4 jam 30 menit",
      lessonsCount: 25,
      level: "Pemula",
      videoUrl: "/sample-video.mp4",
      curriculum: [
        {
          id: "module-1",
          title: "Pengenalan Webflow",
          lessons: [
            { id: "lesson-1", title: "Apa itu Webflow?", duration: "10:30", isCompleted: true },
            { id: "lesson-2", title: "Membuat Akun Webflow", duration: "8:15", isCompleted: true },
            { id: "lesson-3", title: "Interface Webflow", duration: "15:45", isCompleted: false },
          ],
        },
        {
          id: "module-2",
          title: "Dasar-dasar Design",
          lessons: [
            { id: "lesson-4", title: "Layout dan Grid", duration: "20:30", isCompleted: false },
            { id: "lesson-5", title: "Typography", duration: "12:15", isCompleted: false },
            { id: "lesson-6", title: "Colors dan Styling", duration: "18:20", isCompleted: false },
          ],
        },
      ],
      reviews: [
        {
          id: "review-1",
          user: { name: "Ahmad Rizki", avatar: "/placeholder.svg?height=40&width=40" },
          rating: 5,
          comment:
            "Kursus yang sangat bagus! Penjelasannya mudah dipahami dan step-by-step. Sangat recommended untuk pemula yang ingin belajar Webflow.",
          date: "2 hari yang lalu",
        },
        {
          id: "review-2",
          user: { name: "Siti Nurhaliza", avatar: "/placeholder.svg?height=40&width=40" },
          rating: 4,
          comment:
            "Materi lengkap dan instructor sangat berpengalaman. Hanya saja ada beberapa bagian yang agak cepat, tapi overall bagus.",
          date: "1 minggu yang lalu",
        },
      ],
    },
  }

  return courseDetails[id] || null
}

interface CourseDetailPageProps {
  params: {
    id: string
  }
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = getCourseDetail(params.id)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/pages/courses"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft size={20} />
            Kembali ke Kursus
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Player */}
            <VideoPlayer videoUrl={course.videoUrl} title={course.title} />

            {/* Course Info */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {course.category}
                </span>
                {course.isFree && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">GRATIS</span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>

              <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <CiStar  className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiUsers className="w-4 h-4" />
                  <span>{course.studentsCount} siswa</span>
                </div>
                <div className="flex items-center gap-1">
                  <CiClock1  className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiBarChart className="w-4 h-4" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={course.instructor.avatar || "/placeholder.svg"}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{course.instructor.name}</p>
                  <p className="text-sm text-gray-600">{course.instructor.title}</p>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Deskripsi Kursus</h2>
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
            </div>

            {/* Course Reviews */}
            {/* <CourseReviews reviews={course.reviews} /> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CourseCurriculum modules={course.curriculum} />

            {/* Enroll Button */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                {course.isFree ? "Mulai Belajar Gratis" : `Daftar - $${course.price}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
