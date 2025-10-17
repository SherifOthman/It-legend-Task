import { QuestionType } from "@/data/data";
import Image from "next/image";

export const Answer = ({ answer }: { answer: QuestionType }) => {
  return (
    <div className="flex gap-3 p-4 pl-9">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
        <Image
          fill
          src={answer.userImage}
          alt={`${answer.userName}'s profile image`}
          className="object-cover"
        />
      </div>
      <div>
        <span className="block">{answer.userName}</span>
        <span className="block text-sm">{answer.date}</span>
        <p className="text mt-4 text-gray-500">{answer.description}</p>
      </div>
    </div>
  );
};
