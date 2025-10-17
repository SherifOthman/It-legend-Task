import { AnsweredQuestion } from "./Quiz";
import { QuizCard } from "./QuizCard";
import { QuestionIndicator } from "./QustionIndicator";
import { Timer } from "./Timer";

type TestProps = {
  duration: number;
  questions: AnsweredQuestion[];
  currentQuestionIndex: number;
  onIndicatorSelect: (number: number) => void;
  onChoiceSelect: (option: string) => void;
  onTimeOut: () => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
};

export const Test = ({
  duration,
  questions,
  currentQuestionIndex,
  onIndicatorSelect,
  onChoiceSelect,
  onNextClick,
  onPreviousClick,
  onTimeOut,
}: TestProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Timer */}
      <Timer duration={duration} onTimeOut={onTimeOut} />

      {/* Question indicators */}
      <div className="mt-8 mb-8 flex gap-2">
        {questions.map((question, i) => (
          <QuestionIndicator
            onSelect={onIndicatorSelect}
            key={question.question}
            selected={currentQuestionIndex === i}
            number={i + 1}
          />
        ))}
      </div>

      {/* Question Card */}
      <QuizCard
        question={questions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        onSelect={onChoiceSelect}
      />

      {/* Buttons */}
      <div className="mt-3 flex w-full justify-between gap-4 px-4">
        <button
          className="w-36 rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-200 disabled:bg-gray-400"
          disabled={currentQuestionIndex === 0}
          onClick={onPreviousClick}
        >
          Previous
        </button>

        <button
          className="w-36 rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-blue-900 transition hover:bg-yellow-500"
          onClick={onNextClick}
        >
          {/* Change the text of button at the last question */}
          {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};
