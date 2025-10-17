import { QuestionType } from "@/data/data";
import { Dispatch, SetStateAction } from "react";
import { Question } from "./Question";
import { WriteQuestion } from "./WriteQuestion";

type QuestionsProps = {
  questions: QuestionType[];
  setQuestions: Dispatch<SetStateAction<QuestionType[]>>;
  onQuestionSelected?: (question: QuestionType) => void;
};

export const Questions = ({
  questions,
  setQuestions,
  onQuestionSelected,
}: QuestionsProps) => {
  return (
    <section className="max-w-2xl p-4">
      <div className="mx-auto mb-4 w-3/4 bg-gray-600 p-2 text-center text-lg font-semibold text-white">
        <h2 className="">Q&A</h2>
      </div>
      <div>
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            onQuestionSelected={onQuestionSelected}
          />
        ))}
      </div>
      <WriteQuestion setQuestions={setQuestions} />
    </section>
  );
};
