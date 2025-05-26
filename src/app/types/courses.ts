export interface CourseModule {
  id: string
  title: string
  lessons: Lesson[]
  isExpanded?: boolean
}

export interface Lesson {
  id: string
  title: string
  duration: string
  isCompleted?: boolean
  videoUrl?: string
}

export interface Review {
  id: string
  user: {
    name: string
    avatar: string
  }
  rating: number
  comment: string
  date: string
}

export interface CourseDetail { 
     id: string
  title: string
  category: string
  image: string
  rating: number
  studentsCount: string
  price?: number
  isFree?: boolean
  description: string
  instructor: {
    name: string
    avatar: string
    title: string
  }
  duration: string
  lessonsCount: number
  level: string
  videoUrl: string
  curriculum: CourseModule[]
  reviews: Review[]
}