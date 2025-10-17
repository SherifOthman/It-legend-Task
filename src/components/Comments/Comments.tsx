"use client";
import { comments as commentsData, CommentType } from "@/data/data";
import { useState } from "react";
import { SectionTitle } from "../SectionTitle";
import { Comment } from "./Comment";
import { WriteComment } from "./WriteComment";

export const Comments = () => {
  const [comments, setComments] = useState<CommentType[]>(commentsData);
  return (
    <div id="comments" className="mt-4 lg:[grid-area:comments]">
      <SectionTitle className="mb-1 pl-3 lg:pl-5">Comments</SectionTitle>
      <div className="divide-y divide-gray-300 p-3 md:p-5">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <WriteComment setComments={setComments} />
    </div>
  );
};
