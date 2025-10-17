import {
  CircleCheckBig,
  Logs,
  MessageCircleMore,
  ShieldQuestionMark,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Leaderboard } from "./Leaderboards/Leaderboard";
import { Modal } from "./Modal";
import { AskQuestion } from "./Questions/AskQuestion";

export const NavigationIcons = () => {
  const [askQuestionOpen, setAskQuestionOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
  const baseClasses =
    "flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors duration-300 hover:border-gray-800 hover:text-gray-800 cursor-pointer";

  return (
    <div className="mt-4 ml-6 flex gap-3 xl:mt-7">
      <Link href="#content" className={baseClasses}>
        <Logs size={20} />
      </Link>

      <Link href="#comments" className={baseClasses}>
        <MessageCircleMore size={20} />
      </Link>

      <button className={baseClasses} onClick={() => setAskQuestionOpen(true)}>
        <ShieldQuestionMark size={20} />
      </button>

      <button className={baseClasses} onClick={() => setLeaderboardOpen(true)}>
        <CircleCheckBig size={20} />
      </button>

      {/* Modals */}
      <Modal
        mode="hide"
        isOpen={askQuestionOpen}
        onClose={() => setAskQuestionOpen(false)}
      >
        <AskQuestion />
      </Modal>

      <Modal isOpen={leaderboardOpen} onClose={() => setLeaderboardOpen(false)}>
        <Leaderboard />
      </Modal>
    </div>
  );
};
