import { courseLeaderboard } from "@/data/data";
import { getRandomNumber } from "@/utils/random-numbers";
import { RankRow } from "./RankRow";

export const Leaderboard = () => {
  const currentUserIndex = getRandomNumber(0, courseLeaderboard.length - 1);

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
            higlight={i === currentUserIndex}
          />
        ))}
      </div>
    </div>
  );
};
