import { Question } from "@/data/data";
import { useState } from "react";
import { Result } from "./Result";
import { Test } from "./Test";

type QuestionSectionProps = {
  questions: Question[];
  duration: number;
};

export type AnsweredQuestion = {
  question: string;
  choices: string[];
  correctAnswer: string;
  userAnswer: string | null;
};

export const Quiz = ({ questions, duration }: QuestionSectionProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    AnsweredQuestion[]
  >(() =>
    questions.map((q) => ({
      question: q.question,
      choices: q.choices,
      correctAnswer: q.correctAnswer,
      userAnswer: null,
    })),
  );

  const [isFinised, setIsFinished] = useState(false);

  // useEffect(() => {
  //   const allAnswered = answeredQuestions.every((q) => q.userAnswer !== null);
  //   if (allAnswered) setIsFinished(true);
  // }, [answeredQuestions]);

  const handleTimeOut = () => {
    setIsFinished(true);
  };

  const handleOnIndicatorSelect = (number: number) => {
    if (number === 1) setCurrentQuestionIndex(0);

    // Change the question if it has been answered before.
    if (number > 1 && answeredQuestions[number - 2].userAnswer != null) {
      setCurrentQuestionIndex(number - 1);
    }
  };

  const handleOnNextClick = () => {
    // Go to next until there are questions unsolved left and current one is answered
    if (answeredQuestions[currentQuestionIndex].userAnswer != null) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        return;
      }
      // Last Click to finish the test
      setIsFinished(true);
    }
  };

  const handleOnPreviousClick = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleAnswerSelect = (option: string) => {
    // Update the answerdQuestions list to include the current user's answer within its quesiton object.
    // In another words, change value of currnet quesiton object
    const updatedAnsweredQuestions = answeredQuestions.map((q, i) =>
      currentQuestionIndex === i ? { ...q, userAnswer: option } : q,
    );

    setAnsweredQuestions(updatedAnsweredQuestions);
  };

  console.log(isFinised);
  console.log(answeredQuestions);

  return (
    <section className="bg-question max-w-[400px] p-3">
      {isFinised ? (
        <Result answeredQuestions={answeredQuestions} />
      ) : (
        <Test
          duration={duration}
          questions={answeredQuestions}
          currentQuestionIndex={currentQuestionIndex}
          onChoiceSelect={handleAnswerSelect}
          onIndicatorSelect={handleOnIndicatorSelect}
          onNextClick={handleOnNextClick}
          onPreviousClick={handleOnPreviousClick}
          onTimeOut={handleTimeOut}
        />
      )}
    </section>
  );
};
