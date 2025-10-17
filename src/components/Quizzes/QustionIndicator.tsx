import { cn } from "@/utils/cn";

type QuestionIndicatorProps = {
  number: number;
  selected: boolean;
  onSelect: (number: number) => void;
};

export const QuestionIndicator = ({
  selected = false,
  onSelect,
  number,
}: QuestionIndicatorProps) => {
  return (
    <button
      onClick={() => onSelect(number)}
      className={cn(
        "text flex h-11 w-11 items-center justify-center rounded-full border border-white text-white",
        selected && "text-question bg-white",
      )}
    >
      {number}
    </button>
  );
};
