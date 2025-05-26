import React from "react";
import HowCard from "@/app/components/card/howcard";


const StepsData = [
    { 
        id: "1",
    stepNumber: 1,
    title: "Masuk ke Platform",
    description:
      "Daftar dan masuk ke platform pembelajaran kami. Pilih kursus yang sesuai dengan minat dan kebutuhan karier Anda untuk memulai perjalanan belajar.",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Wanita berkacamata sedang bekerja dengan laptop dan dokumen",
    }, 
    { 
        id: "2",
    stepNumber: 2,
    title: "Mulai Belajar",
    description:
      "Ikuti materi pembelajaran yang telah dirancang secara sistematis. Akses video, modul, dan latihan interaktif kapan saja dan di mana saja sesuai kecepatan Anda.",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Wanita sedang belajar menggunakan laptop di ruang kerja modern",
    }, 
    { 
           id: "3",
    stepNumber: 3,
    title: "Raih Sertifikat",
    description:
      "Selesaikan semua modul dan ujian untuk mendapatkan sertifikat resmi. Tingkatkan kredibilitas profesional Anda dan buka peluang karier yang lebih luas.",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Tampilan antarmuka digital Google menunjukkan pencapaian pembelajaran",
    },
]

const How = () => {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold mb-5">Seperti ini Cara Kerja Quiznya</h1>
      <p className="w-[40%] mb-32">Ikuti tiga langkah mudah ini untuk memulai perjalanan pembelajaran Anda dan meraih kesuksesan dalam dunia
            digital bersama platform kami.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {StepsData.map((step) =>( 
            <HowCard key={step.id} step={step} className="mb-6" />
        ))}
      </div>
    </div>
  );
};

export default How;
