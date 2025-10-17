export const CourseProgress = () => {
  return (
    <div className="relative mb-5 h-1.5 w-full rounded-lg bg-gray-300">
      {/* Progress bar */}
      <span className="block h-full w-3/4 rounded-lg bg-green-500"></span>

      {/* Marker */}
      <div className="absolute bottom-5 left-3/4 -translate-x-1/2 transform rounded-full border-2 border-gray-400 p-1.5 text-sm text-blue-700">
        You
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-400"></span>
      </div>
      {/* Percentage */}
      <span className="s absolute top-3 left-3/4 -translate-x-1/2 text-sm text-blue-700">
        75%
      </span>
    </div>
  );
};
