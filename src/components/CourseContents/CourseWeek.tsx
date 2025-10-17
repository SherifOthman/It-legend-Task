"use client";

import { CourseWeekType } from "@/data/data";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { CourseItem } from "./CourseItem";

type CourseWeekProps = {
  courseWeek: CourseWeekType;
};

export const CourseWeek = ({ courseWeek }: CourseWeekProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="rounded border border-gray-300 bg-white px-5 py-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl text-gray-800">{courseWeek.weekRange}</h3>
          <p className="mr-4 text-lg text-gray-600">{courseWeek.title}</p>
          {open && (
            <p className="mt-2 mr-4 mb-2 text-gray-500">
              {courseWeek.description}
            </p>
          )}
        </div>
        <button
          className="cursor-pointer"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Minus /> : <Plus />}
        </button>
      </div>

      {open && (
        <div className="divide-y divide-gray-300">
          {courseWeek.items.map((item) => (
            <CourseItem key={item.id} courseItem={item} />
          ))}
        </div>
      )}
    </div>
  );
};
