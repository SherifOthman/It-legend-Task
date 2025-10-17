import { QuestionType } from "@/data/data";
import { ArrowLeft } from "lucide-react";
import { Answer } from "./Answer";
import { Question } from "./Question";
import { WriteAnswer } from "./WriteAnswer";

type AnswersProps = {
  question: QuestionType;
  onBack: () => void;
  onSubmitAnswer: (response: string) => void;
};

export const Answers = ({ question, onBack, onSubmitAnswer }: AnswersProps) => {
  return (
    <div className="max-w-2xl p-4">
      <button
        onClick={onBack}
        className="ml-2 cursor-pointer hover:text-blue-800"
      >
        <ArrowLeft />
      </button>
      <Question question={question} />
      <span className="text-lg font-bold">
        {question.answers?.length} replies
      </span>
      {question.answers?.map((answer) => (
        <Answer key={answer.id} answer={answer} />
      ))}
      <WriteAnswer onSubmitAnswer={onSubmitAnswer} />
    </div>
  );
};
