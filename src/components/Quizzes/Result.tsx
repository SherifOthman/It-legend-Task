import { getRandomNumber } from "@/utils/random-numbers";
import { AnsweredQuestion } from "./Quiz";

type ResultProps = {
  answeredQuestions: AnsweredQuestion[];
};

export const Result = ({ answeredQuestions }: ResultProps) => {
  const totalCorrectAnswers = answeredQuestions.reduce(
    (acc, curr) =>
      acc +
      (curr.userAnswer !== null && curr.userAnswer === curr.correctAnswer
        ? 1
        : 0),
    0,
  );

  // calcualte succes percenate
  const percentage = Math.ceil(
    (totalCorrectAnswers / answeredQuestions.length) * 100,
  );

  // set it to 0 in case time is out and no quesiton sloved.
  const messagePercentage =
    totalCorrectAnswers === 0 ? 0 : getRandomNumber(1, 100);

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <p className="mt-5 text-lg">Your Result</p>
      <div className="flex h-38 w-38 flex-col items-center justify-center rounded-full bg-blue-950">
        <span className="text-6xl font-semibold">{percentage}</span>

        <span className="-mt-2">of 100</span>
      </div>
      <span className="text-3xl font-semibold">Great</span>
      <p className="mb-4 w-3/4 text-center">
        You scored higher than <strong>{messagePercentage}%</strong> of the
        people who have taken this test.
      </p>
    </div>
  );
};
