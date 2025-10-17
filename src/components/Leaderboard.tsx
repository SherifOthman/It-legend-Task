import { courseLeaderboard, CourseLeaderboardEntry } from "@/data/data";
import { cn } from "@/utils/cn";
import { getRandomNumber } from "@/utils/random-numbers";
import Image from "next/image";

export const Leaderboard = () => {
  return (
    <div className="max-w-md rounded-xl p-6 text-center">
      <h3 className="text-2xl font-semibold text-gray-800">
        JavaScript Course
      </h3>
      <p className="mt-1 text-lg font-bold text-gray-700">Leaderboard</p>
      <p className="mt-5 rounded-lg bg-gray-100 p-3 text-gray-900">
        Great, my friend! Your performance in this course is better than{" "}
        {getRandomNumber(1, 100)}% of the other students. Keep it up — I want to
        see your name on the leaderboard here!
      </p>

      <div className="mt-8 space-y-5 rounded-xl bg-gray-100 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-12">
            <p>Rank</p>
            <p>Name</p>
          </div>
          <div className="flex gap-3">
            <p>Score</p>
            <p>Progress</p>
          </div>
        </div>
        {courseLeaderboard.map((entry, i) => (
          <RankRow
            key={entry.rank}
            entry={entry}
            emoji={i === 0 ? "🏆" : i === 1 ? "🥈" : i === 2 ? "🥉" : undefined}
          />
        ))}
      </div>
    </div>
  );
};

const RankRow = ({
  entry,
  emoji,
}: {
  entry: CourseLeaderboardEntry;
  emoji?: string;
}) => {
  return (
    <div className="relative flex items-center justify-between gap-3 overflow-hidden rounded border border-gray-300 bg-white px-3 py-3">
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
