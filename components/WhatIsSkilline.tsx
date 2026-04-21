import Image from "next/image";

export default function WhatIsSkilline() {
  return (
    <div className="mt-28">
      <div className="text-center max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          What is <span className="text-yellow-500">Skilline?</span>
        </h1>
        <p className="text-gray-500">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7">
        {/* For Instructors */}
        <div className="relative md:w-5/12">
          <Image
            className="rounded-2xl w-full h-auto"
            src="/img/Rectangle_19.png"
            alt="For Instructors"
            width={600}
            height={400}
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                FOR INSTRUCTORS
              </h1>
              <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                Start a class today
              </button>
            </div>
          </div>
        </div>

        {/* For Students */}
        <div className="relative md:w-5/12">
          <Image
            className="rounded-2xl w-full h-auto"
            src="/img/Rectangle_21.png"
            alt="For Students"
            width={600}
            height={400}
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                FOR STUDENTS
              </h1>
              <button
                className="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                style={{ background: "rgba(35, 189, 238, 0.9)" }}
              >
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}