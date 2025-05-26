import React from "react";
import Button from "@/app/components/button/button";
import Image from "next/image";
import quizImage from "@/app/assets/QuizImg.png";

const Quiz = () => {
  return (
    <div className="flex items-center justify-between p-10 px-56 ">
      <div className="w-[70%]">
        <div className="flex flex-col gap-6 items-start">
          <h1 className="text-6xl font-bold w-[80%]">
            Daily Quiz, Daily Bonus-play Today!
          </h1>
          <p className="">
            "Kerjakan kuis dan trivia harian yang seru dan menantang. Jawab kuis
            setiap hari dan kumpulkan poinnya! Banyak kejutan menarik menantimu
            di setiap tantangan."
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white  text-lg font-semibold rounded-md transition-colors duration-200"
          >
            Play Now
          </Button>
        </div>
      </div>

      <div className="">
        <Image src={quizImage} alt="Quiz Image" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Quiz;
