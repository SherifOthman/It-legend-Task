import { CommentType } from "@/data/data";
import Image from "next/image";

export const Comment = ({ comment }: { comment: CommentType }) => {
  console.log(comment.userImage);
  return (
    <div className="py-6">
      <div className="flex gap-5 lg:gap-7">
        <div className="relative mt-1 h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full">
          <Image
            src={comment.userImage}
            alt={`${comment.userName}'s profile image`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="block text-xl text-gray-700">
            {comment.userName}
          </span>
          <span className="block text-gray-500">{comment.date}</span>
          <p className="mt-5 text-lg text-gray-500">{comment.text}</p>
        </div>
      </div>
    </div>
  );
};
