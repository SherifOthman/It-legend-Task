import { cn } from "@/utils/cn";

type ChoiceProps = {
  option: string;
  onSelect: (value: string) => void;
  type: "correct" | "error" | "normal";
  disabled?: boolean;
};

export const Choice = ({
  option,
  onSelect,
  type,
  disabled = false,
}: ChoiceProps) => {
  const handleClick = () => {
    if (!disabled) onSelect(option);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group flex items-center rounded-lg bg-white text-gray-600 shadow-lg transition-all",
        {
          "hover:bg-question cursor-pointer hover:text-white":
            !disabled && type === "normal",
          "bg-green-800 text-white": type === "correct",
          "bg-red-800 text-white": type === "error",
        },
      )}
    >
      {/* Left indicator */}
      <div className="border-r border-gray-300 p-4">
        <span
          className={cn(
            "flex h-4.5 w-4.5 items-center justify-center border text-lg transition-colors",
            {
              "": type == "normal",
            },
          )}
        >
          <span
            className={cn("font-semibold text-white transition-colors", {
              "text-white": type === "normal" && disabled,
            })}
          >
            •
          </span>
        </span>
      </div>

      {/* Option */}
      <div className="p-4">
        <p className="font-medium">{option}</p>
      </div>
    </div>
  );
};
