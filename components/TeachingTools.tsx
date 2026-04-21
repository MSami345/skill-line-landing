import Image from "next/image";

export default function TeachingTools() {
  return (
    <>
      {/* Tools For Teachers And Learners */}
      <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
        <div className="md:w-1/2 lg:pl-14">
          <h1 className="text-darken font-semibold text-3xl lg:pr-56">
            <span className="text-yellow-500">Tools</span> For Teachers And
            Learners
          </h1>
          <p className="text-gray-500 my-4 lg:pr-32">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time
            for students to complete and submit.
          </p>
        </div>
        <Image
          className="md:w-1/2 h-auto"
          src="/img/girl-with-books.png"
          alt="Girl with books"
          width={600}
          height={400}
        />
      </div>

      {/* Assessments, Quizzes, Tests */}
      <div className="mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div className="md:w-6/12">
          <Image
            className="md:w-11/12 h-auto"
            src="/img/true-false.png"
            alt="Quiz"
            width={600}
            height={400}
          />
        </div>
        <div className="md:w-6/12 md:transform md:-translate-y-20">
          <h1 className="font-semibold text-darken text-3xl lg:pr-64">
            Assessments,{" "}
            <span className="text-yellow-500">Quizzes</span>, Tests
          </h1>
          <p className="text-gray-500 my-5 lg:pr-52">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>

      {/* Class Management Tools */}
      <div className="flex flex-col md:flex-row items-center mt-12">
        <div className="md:w-5/12">
          <h1 className="text-darken font-semibold text-3xl leading-tight lg:pr-32">
            <span className="text-yellow-500">Class Management</span> Tools
            for Educators
          </h1>
          <p className="my-5 lg:pr-14 text-gray-600">
            Class provides tools to help run and manage the class such as
            Class Roster, Attendance, and more. With the Gradebook, teachers
            can review and grade tests and quizzes in real-time.
          </p>
        </div>
        <Image
          className="md:w-7/12 h-auto"
          src="/img/gradebook.png"
          alt="Gradebook"
          width={700}
          height={450}
        />
      </div>

      {/* One-on-One Discussions */}
      <div className="mt-24 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div className="md:w-7/12">
          <Image
            className="md:w-11/12 h-auto"
            src="/img/discussion.png"
            alt="Discussion"
            width={600}
            height={400}
          />
        </div>
        <div className="md:w-5/12 md:transform md:-translate-y-6">
          <h1 className="font-semibold text-darken text-3xl lg:pr-64">
            One-on-One <span className="text-yellow-500">Discussions</span>
          </h1>
          <p className="text-gray-500 my-5 lg:pr-24">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>

      <button className="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block">
        See more features
      </button>
    </>
  );
}