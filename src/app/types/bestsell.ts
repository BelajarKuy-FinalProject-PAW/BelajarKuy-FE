export interface Course {
  id: string
  title: string
  category: string
  image: string
  rating: number
  studentsCount: string
  price?: number
  instructor?: string
}

export interface CourseCardProps {
  course: Course
  className?: string
}
