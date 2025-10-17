import clsx from "clsx";
import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  mode?: "hide" | "destroy";
};
export const Modal = ({
  isOpen,
  onClose,
  children,
  mode = "destroy",
}: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if ((!isOpen && mode) === "destroy") return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center",
        !isOpen && mode == "hide" && "hidden",
        isOpen && mode == "hide" && "block",
      )}
      role="dialog"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div
        className="relative z-10 max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-lg border border-gray-300 bg-white/80 p-1.5 text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <X size={18} />
        </button>

        {children}
      </div>
    </div>
  );
};
