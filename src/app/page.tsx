import { Comments } from "@/components/Comments/Comments";
import { CourseContent } from "@/components/CourseContents/CourseContent";
import { CourseMaterials } from "@/components/CourseContents/CourseMaterials";
import { Header } from "@/components/Header";
import { VideoContainer } from "@/components/Videos/VideoContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid w-full lg:[grid-template-columns:3fr_2fr] lg:gap-y-2 lg:[grid-template-areas:'header_header'_'video_content'_'materials_content'_'comments_content'] xl:gap-x-5 xl:px-4">
        <VideoContainer />
        <CourseMaterials />
        <CourseContent />
        <Comments />
      </div>
    </div>
  );
}
