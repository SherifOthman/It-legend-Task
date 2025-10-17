"use client";

import { courseWeeks as CourseWeeksData } from "@/data/data";
import { useState } from "react";
import { SectionTitle } from "../SectionTitle";
import { CourseProgress } from "./CourseProgress";
import { CourseWeek } from "./CourseWeek";

export const CourseContent = () => {
  const [courseWeeks, setCourseWeeks] = useState(CourseWeeksData);

  return (
    <div
      id="content"
      className="flex flex-col gap-7 p-3 md:p-5 lg:[grid-area:content]"
    >
      <SectionTitle className="lg:mt-0">Topics for This Course</SectionTitle>
      <CourseProgress />
      {courseWeeks.map((week) => (
        <CourseWeek key={week.id} courseWeek={week} />
      ))}
    </div>
  );
};
