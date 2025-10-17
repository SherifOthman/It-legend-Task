import { FormEvent, useState } from "react";
import { Button } from "../Button";

type WriteAnswerProps = {
  onSubmitAnswer: (response: string) => void;
};

export const WriteAnswer = ({ onSubmitAnswer }: WriteAnswerProps) => {
  const [response, setResponse] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!response.trim()) return;
    onSubmitAnswer(response);
    setResponse("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          className="h-20 w-full rounded border-2 border-gray-300 p-2 focus:outline-gray-500"
          placeholder="write your response"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
        <div className="flex justify-end">
          <Button>Add an answer</Button>
        </div>
      </form>
    </div>
  );
};
