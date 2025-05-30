import React from "react";
import { Course } from "@/app/types/bestsell";
import CourseCard from "@/app/components/card/Coursecard";
import Button from "@/app/components/button/button";
import CourseImage1 from "@/app/assets/CourseImages1.png";
import CourseImage2 from "@/app/assets/CourseImages2.png";
import CourseImage3 from "@/app/assets/CourseImages3.png";
import CourseImage4 from "@/app/assets/CourseImages4.png";
import CourseImage5 from "@/app/assets/CourseImages5.png";

const BestSelling: Course[] = [
  {
    id: "1",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    category: "DEVELOPMENT",
    image: CourseImage1 ,
    rating: 5.0,
    studentsCount: "265.7K",
  },
  {
    id: "2",
    title: "The Complete 2021 Web Development Bootcamp",
    category: "DEVELOPMENT",
    image: CourseImage2,
    rating: 5.0,
    studentsCount: "265.7K",
  },
  {
    id: "3",
    title: "Learn Python Programming Masterclass - From Beginner to Expert",
    category: "DEVELOPMENT",
    image: CourseImage3,
    rating: 5.0,
    studentsCount: "265.7K",
  },
  {
    id: "4",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    category: "MARKETING",
    image: CourseImage4 ,
    rating: 5.0,
    studentsCount: "265.7K",
  },
  {
    id: "5",
    title: "Reiki Level I, II and Master/Teacher Program",
    category: "LIFESTYLE",
    image: CourseImage5 ,
    rating: 5.0,
    studentsCount: "265.7K",
  },
];

const BestSell = () => {
  return (
    <div className="flex flex-col items-center justify-center p-32 bg-gray-100">
      <h1 className="text-4xl font-semibold ">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-20">
        {BestSelling.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <a href="/pages/courses"><Button
        size="lg"
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors duration-200"
      >
        Jelajahi Lebih Banyak
      </Button></a>
    </div>
  );
};

export default BestSell;
