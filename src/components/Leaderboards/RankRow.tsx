import { CourseLeaderboardEntry } from "@/data/data";
import { cn } from "@/utils/cn";
import Image from "next/image";

type RankRowProps = {
  entry: CourseLeaderboardEntry;
  emoji?: string;
  higlight: boolean;
};

export const RankRow = ({ entry, emoji, higlight }: RankRowProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-between gap-3 overflow-hidden rounded border border-gray-300 bg-white px-3 py-3",
        higlight && "bg-gray-400",
      )}
    >
      <div className="flex items-center gap-3">
        <strong className={cn("text-gray-800", emoji && "text-2xl")}>
          {emoji ? emoji : `${entry.rank}.`}
        </strong>

        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={entry.userImage}
            alt={entry.userName}
            fill
            className="object-cover"
          />
        </div>

        <span className="font-medium text-gray-900">{entry.userName}</span>
      </div>

      <div className="flex items-center gap-3 font-semibold text-gray-700">
        <span>{entry.score}</span>
        <span>{entry.progress}%</span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full rounded bg-gray-200">
        <span
          style={{ width: `${entry.progress}%` }}
          className="block h-full bg-green-500"
        ></span>
      </div>
    </div>
  );
};
