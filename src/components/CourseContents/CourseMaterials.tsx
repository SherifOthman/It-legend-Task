import {
  Award,
  BookOpen,
  Clock,
  Globe,
  Layers,
  Star,
  UserRound,
  Users,
  Video,
} from "lucide-react";
import { SectionTitle } from "../SectionTitle";

const materials = [
  { icon: UserRound, label: "Instructor", value: "Edward Norton" },
  { icon: Clock, label: "Duration", value: "3 weeks" },
  { icon: BookOpen, label: "Lessons", value: "8 lessons" },
  { icon: Users, label: "Enrolled", value: "65 students" },
  { icon: Globe, label: "Language", value: "English" },
  { icon: Layers, label: "Level", value: "Beginner to Intermediate" },
  { icon: Video, label: "Video Hours", value: "6.5 hours" },
  { icon: Award, label: "Certificate", value: "Yes" },
  { icon: Star, label: "Rating", value: "4.8 / 5" },
];

export const CourseMaterials = () => {
  return (
    <section className="bg-background-gray p-3 md:p-5 lg:bg-white lg:[grid-area:materials]">
      <SectionTitle className="lg:mt-2">Course Materials</SectionTitle>

      <div className="w-full rounded-lg bg-white px-10 py-7 shadow lg:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
        <div className="grid gap-x-10 gap-y-3 divide-y divide-gray-300 md:grid-cols-2 lg:gap-x-30">
          {materials.map(({ icon: Icon, label, value }, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <Icon size={18} />
                <span className="font-medium">{label}:</span>
              </div>
              <span className="text-sm text-gray-600">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
