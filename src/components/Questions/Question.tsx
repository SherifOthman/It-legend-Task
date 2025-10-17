import { QuestionType } from "@/data/data";
import { MessageSquare } from "lucide-react";
import Image from "next/image";

type QuestionProps = {
  question: QuestionType;
  onQuestionSelected?: (Question: QuestionType) => void;
};

export const Question = ({ question, onQuestionSelected }: QuestionProps) => {
  const hasAnswers = question.answers && question.answers.length > 0;

  const description =
    question.description.length >= 120
      ? question.description.substring(0, 120) + "..."
      : question.description;

  return (
    <div
      className={`flex flex-col gap-4 px-4 py-4 hover:bg-gray-100 md:flex-row ${hasAnswers && "cursor-pointer"}`}
      onClick={() => onQuestionSelected?.(question)}
    >
      {/* User Image */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
        <Image
          src={question.userImage}
          alt={`${question.userName}'s profile image`}
          fill
          className="object-cover"
        />
      </div>

      {/* Question Content */}
      <div className="flex-1">
        <span className="text-xl font-semibold text-gray-800">
          {question.title}
        </span>
        <p className="mt-1 text-lg text-gray-500">{description}</p>

        {/* User info & answers count */}
        <div className="mt-3 flex items-center justify-between">
          <div className="space-x-3">
            <span className="text-gray-700">{question.userName}</span>
            <span className="text-sm text-gray-500">{question.date}</span>
          </div>
          <div>
            {hasAnswers && (
              <div className="flex gap-2 text-gray-600">
                <strong className="text-black">
                  {question.answers!.length}
                </strong>
                <MessageSquare size={20} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
