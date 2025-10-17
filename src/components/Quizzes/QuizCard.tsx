import { Choice } from "./Choice";
import { AnsweredQuestion } from "./Quiz";

type QuestionCardProps = {
  question: AnsweredQuestion;
  onSelect: (value: string) => void;
  questionNumber: number;
};

type ChoiceType = "normal" | "error" | "correct";

export const QuizCard = ({
  question,
  onSelect,
  questionNumber,
}: QuestionCardProps) => {
  const isAnswered = question.userAnswer !== null;

  const getType = (option: string): ChoiceType => {
    if (!isAnswered) return "normal";
    if (option === question.correctAnswer) return "correct";
    if (option === question.userAnswer) return "error";
    return "normal";
  };

  return (
    <div className="w-full rounded-2xl bg-gray-100 p-5">
      {/* Question numser */}
      <span className="text-lg font-semibold">{questionNumber}</span>
      <p className="text-lg font-semibold text-wrap text-gray-700">
        {question.question}
      </p>
      <div className="mt-6 space-y-6">
        {question.choices.map((option) => (
          <Choice
            key={option}
            option={option}
            onSelect={onSelect}
            type={getType(option)}
            disabled={isAnswered}
          />
        ))}
      </div>
    </div>
  );
};
