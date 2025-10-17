"use client";

import React, { createContext, useContext, useState } from "react";

type VideoType = {
  videoUrl: string;
  thumbnail: string;
};

type CurrentVideoContextType = {
  currentVideo: VideoType;
  setCurrentVideo: React.Dispatch<React.SetStateAction<VideoType>>;
};

const CurrentVideoContext = createContext<CurrentVideoContextType | undefined>(
  undefined,
);

const CurrentVideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentVideo, setCurrentVideo] = useState<VideoType>({
    videoUrl: "/videos/3.mp4",
    thumbnail: "/videos/3.jpg",
  });

  return (
    <CurrentVideoContext.Provider value={{ currentVideo, setCurrentVideo }}>
      {children}
    </CurrentVideoContext.Provider>
  );
};

const useCurrentVideo = () => {
  const context = useContext(CurrentVideoContext);
  if (!context)
    throw new Error(
      "useCurrentVideo must be used within a CurrentVideoProvider",
    );

  return context;
};

export { CurrentVideoProvider, useCurrentVideo };
