import React from "react";
import { Course } from "@/app/types/bestsell";
import CourseCard from "@/app/components/card/Coursecard";

const BestSelling: Course[] = [
  {
    id: "1",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    category: "DEVELOPMENT",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5.0,
    studentsCount: "265.7K",
    price: 57,
  },
  {
    id: "2",
    title: "The Complete 2021 Web Development Bootcamp",
    category: "DEVELOPMENT",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5.0,
    studentsCount: "265.7K",
    price: 57,
  },
  {
    id: "3",
    title: "Learn Python Programming Masterclass",
    category: "DEVELOPMENT",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5.0,
    studentsCount: "265.7K",
    price: 57,
  },
  {
    id: "4",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    category: "MARKETING",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5.0,
    studentsCount: "265.7K",
    price: 57,
  },
  {
    id: "5",
    title: "Reiki Level I, II and Master/Teacher Program",
    category: "LIFESTYLE",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5.0,
    studentsCount: "265.7K",
    price: 57,
  },
];

const BestSell = () => {
  return (
    <div className="flex flex-col items-center justify-center p-32 bg-gray-100">
      <h1 className="text-4xl font-semibold ">Best courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-20">
        {BestSelling.map((course) => (
            <CourseCard key={course.id} course={course}/>
        ))}
      </div>
    </div>
  );
};

export default BestSell;
