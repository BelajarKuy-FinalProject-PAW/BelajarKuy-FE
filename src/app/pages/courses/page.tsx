import React from "react";
import { Course } from "@/app/types/bestsell";
import Navbar from "@/app/components/navbar/navbar";
import CourseCard from "@/app/components/card/Coursecard";
import { IoMdSearch } from "react-icons/io";
import Searchbar from "@/app/components/search/searchbar";

const Courses: Course[] = [
  {
    id: "1",
    title: "Learn python programming masterclass",
    category: "DEVELOPMENT",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5.0,
    studentsCount: "265.7K",
  },
  {
    id: "2",
    title: "The Complete 2021 Web Development Bootcamp",
    category: "IT DEVELOPMENT",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    studentsCount: "150K",
  },
  {
    id: "3",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    category: "DATA SCIENCE",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    studentsCount: "200K",
  },
  {
    id: "4",
    title: "Ultimate Certified Solution Architect",
    category: "MARKETING",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    studentsCount: "180K",
  },
  {
    id: "5",
    title: "Reiki Level I, II and Master/Teacher Program",
    category: "LIFESTYLE",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    studentsCount: "120K",
  },
  {
    id: "6",
    title: "Web Development Bootcamp: HTML, CSS, JS, React",
    category: "WEB DEVELOPMENT",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    studentsCount: "180K",
  },
  {
    id: "7",
    title: "Mastering Data Structures & Algorithms in JavaScript",
    category: "PROGRAMMING",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    studentsCount: "150K",
  },
  {
    id: "8",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    category: "DATA SCIENCE",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    studentsCount: "200K",
  },
  {
    id: "9",
    title: "Linux Administration: Complete Guide",
    category: "SYSTEM ADMINISTRATION",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    studentsCount: "95K",
  },
  {
    id: "10",
    title: "Introduction to Cloud Computing with AWS",
    category: "CLOUD COMPUTING",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    studentsCount: "130K",
  },
  {
    id: "11",
    title: "DevOps Bootcamp: CI/CD with Docker & Jenkins",
    category: "DEVOPS",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    studentsCount: "110K",
  },
  {
    id: "12",
    title: "Cybersecurity Fundamentals: Protect Your Systems",
    category: "CYBERSECURITY",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    studentsCount: "85K",
  },
  {
    id: "13",
    title: "Database Design & SQL for Beginners",
    category: "DATABASE",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    studentsCount: "170K",
  },
  {
    id: "14",
    title: "Mobile App Development with Flutter",
    category: "MOBILE DEVELOPMENT",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    studentsCount: "120K",
  },
  {
    id: "15",
    title: "Artificial Intelligence for Beginners",
    category: "AI",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    studentsCount: "100K",
  },
];

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-56 py-24 ">

        <div className="flex items-start justify-start w-full mb-10"> 
        <div className="flex items-center justify-center border border-gray-300 rounded-lg p-2 gap-3 group">
            <IoMdSearch className="text-2xl "/>
            <Searchbar type="text" placeholder="Search" className=" focus:outline-none w-96"/>
        </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Courses.map((course) => (
            <CourseCard key={course.id} course={course} className="border-2"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
