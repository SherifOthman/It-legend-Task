import { CommentType } from "@/data/data";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Button } from "../Button";

type WriteCommentProps = {
  setComments: Dispatch<SetStateAction<CommentType[]>>;
};

export const WriteComment = ({ setComments }: WriteCommentProps) => {
  const [text, setText] = useState("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment: CommentType = {
      id: Date.now(),
      userName: "Test User",
      userImage: "/images/profile7.jpeg",
      date: new Date().toDateString(),
      text,
    };

    setComments((prev) => [...prev, newComment]);
    setText("");
  };

  return (
    <div className="w-ful bg-background-gray h-96 space-y-5 p-5 lg:bg-white">
      <form onSubmit={onSubmit}>
        <textarea
          name="text"
          placeholder="Write a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mb-4 h-48 w-full rounded bg-white p-4 text-lg shadow hover:outline-gray-400 focus:outline-gray-400 lg:shadow-[0_0_20px_rgba(0,0,0,0.15)]"
        />
        <Button>Submit Review →</Button>
      </form>
    </div>
  );
};
