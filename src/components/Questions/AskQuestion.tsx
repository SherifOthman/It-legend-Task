"use client";

import { questions as questionsData, QuestionType } from "@/data/data";
import { useState } from "react";
import { Answers } from "./Answers";
import { Questions } from "./Questions";

export const AskQuestion = () => {
  const [questions, setQuestions] = useState<QuestionType[]>(questionsData);
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionType | null>(
    null,
  );

  const handleOnSubmitAnswer = (response: string) => {
    const answer: QuestionType = {
      id: Date.now(),
      date: new Date().toDateString(),
      userImage: "/images/profile7.jpeg",
      userName: "Test User",
      description: response,
    };

    selectedQuestion?.answers?.push(answer);

    const updatedQuestions = questions.map((q) =>
      q.id == selectedQuestion?.id ? selectedQuestion : q,
    );

    setQuestions(updatedQuestions);
    console.log(updatedQuestions);
  };

  if (selectedQuestion)
    return (
      <Answers
        onSubmitAnswer={handleOnSubmitAnswer}
        question={selectedQuestion}
        onBack={() => setSelectedQuestion(null)}
      />
    );

  return (
    <Questions
      questions={questions}
      setQuestions={setQuestions}
      onQuestionSelected={setSelectedQuestion}
    />
  );
};
