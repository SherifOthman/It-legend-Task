import { useCurrentVideo } from "@/contexts/CurrentVideoContext";
import { CourseItemType } from "@/data/data";
import { FileText, Lock, SquarePen, Video } from "lucide-react";
import { useState } from "react";
import { Modal } from "../Modal";
import { PdfViewer } from "../PdfViwer";
import { Quiz } from "../Quizzes/Quiz";

type CourseItemProps = {
  courseItem: CourseItemType;
};

export const CourseItem = ({ courseItem }: CourseItemProps) => {
  const [pdfOpen, setPdfOpen] = useState(false);
  const [examOpen, setExamOpen] = useState(false);

  const { setCurrentVideo } = useCurrentVideo();

  const handleOnClick = () => {
    if (courseItem.type == "exam") setExamOpen(true);
    else if (courseItem.type == "pdf") setPdfOpen(true);
    else {
      setCurrentVideo({
        videoUrl: courseItem.fileUrl!,
        thumbnail: courseItem.thumbnailUrl!,
      });
    }
  };

  return (
    <>
      <div
        className="flex cursor-pointer items-center justify-between p-1 py-3 hover:bg-gray-200"
        onClick={handleOnClick}
      >
        <div className="flex items-center gap-2">
          {/* Icons */}
          {courseItem.type == "pdf" && (
            <FileText className="text-gray-500" size={18} />
          )}
          {courseItem.type == "video" && (
            <Video className="text-gray-500" size={18} />
          )}
          {courseItem.type == "exam" && (
            <SquarePen className="text-gray-500" size={18} />
          )}
          {/* Title */}
          <p className="text-gray-600">{courseItem.title}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          {/* Lock Icon  */}
          {courseItem.type == "video" && !courseItem.finished && (
            <Lock className="text-gray-500" size={18} />
          )}

          {/* Question Info */}
          {courseItem.type == "exam" && (
            <div className="flex flex-col gap-2 text-sm">
              <span className="rounded bg-green-100 px-2 py-1 font-medium text-green-700">
                {courseItem.questions?.length} Questions
              </span>
              <span className="rounded bg-red-100 px-2 py-1 font-medium text-red-700">
                {courseItem.duration} Minutes
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={pdfOpen} onClose={() => setPdfOpen(false)}>
        <PdfViewer fileUrl={courseItem.fileUrl!} />
      </Modal>
      <Modal mode="hide" isOpen={examOpen} onClose={() => setExamOpen(false)}>
        {courseItem.questions && courseItem.questions.length > 0 && (
          <Quiz
            questions={courseItem.questions!}
            duration={courseItem.duration}
          />
        )}
      </Modal>
    </>
  );
};
