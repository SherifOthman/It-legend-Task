import { QuestionType } from "@/data/data";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Button } from "../Button";

export const WriteQuestion = ({
  setQuestions,
}: {
  setQuestions: Dispatch<SetStateAction<QuestionType[]>>;
}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) return;

    const question: QuestionType = {
      id: Date.now(),
      date: new Date().toDateString(),
      description: details,
      userImage: "/images/profile7.jpeg",
      userName: "User Test",
      title: title,
    };

    setQuestions((prevQuestions) => [...prevQuestions, question]);
    setTitle("");
    setDetails("");
  };

  return (
    <div className="mx-auto mt-4 w-3/4">
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          className="mb-2 w-1/2 rounded border-2 border-gray-300 p-1 focus:outline-gray-600"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="More details"
          className="h-full min-h-20 w-full rounded border-2 border-gray-300 p-2 focus:outline-gray-600"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <div className="flex justify-end">
          <Button>Send</Button>
        </div>
      </form>
    </div>
  );
};
