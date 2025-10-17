"use client";

import { useCurrentVideo } from "@/contexts/CurrentVideoContext";
import { useEffect, useRef, useState } from "react";

export const Video = ({ isStuck }: { isStuck: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentVideo } = useCurrentVideo();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
    }
  }, [currentVideo.videoUrl]);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <div className="flex-col self-start">
      <div
        className={`group relative aspect-video w-full ${isStuck ? "overflow-visible rounded-none" : "overflow-hidden rounded-md"}`}
      >
        <video
          ref={videoRef}
          controls
          preload="metadata"
          className="h-full w-full object-cover"
          // poster="/course-45.webp"
          poster={currentVideo.thumbnail}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          {/* <source src="/videos/movie.mp4" type="video/mp4" /> */}
          <source src={currentVideo.videoUrl} type="video/mp4" />
        </video>

        {!isPlaying && (
          <div
            className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50"
            onClick={handlePlay}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-red-700">
              <span className="mt-1 ml-1 text-xl">▶</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
