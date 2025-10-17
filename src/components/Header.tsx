import { ChevronRight } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background-gray w-full p-3 md:p-6 lg:px-5">
      <div className="flex cursor-pointer items-center text-lg text-gray-700">
        <div>Home</div>
        <ChevronRight size={14} />
        <div>Course</div>
        <ChevronRight size={14} />
        <div className="text-black">Course Details</div>
      </div>
      <h1 className="mt-2 text-3xl font-semibold">
        Starting SEO as your Home Based Business
      </h1>
    </header>
  );
};
