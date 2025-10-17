import { AlarmCheck } from "lucide-react";
import { useEffect, useState } from "react";

type TimerProps = {
  duration: number;
  onTimeOut: () => void;
};

export const Timer = ({ duration, onTimeOut }: TimerProps) => {
  const [totalSeconds, setTotalSeconds] = useState<number>(duration * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (totalSeconds == 0) onTimeOut();
  }, [totalSeconds, onTimeOut]);

  return (
    <div className="mt-3 flex w-30 items-center justify-center gap-2 rounded-lg bg-yellow-400 py-1.5 text-white shadow-[0_4px_20px_3px_rgba(255,239,44,.5)]">
      <AlarmCheck />{" "}
      <span>
        {minutes < 10 ? `0${minutes}` : minutes}:{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};
