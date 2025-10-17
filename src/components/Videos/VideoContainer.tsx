"use client";

import { useEffect, useRef, useState } from "react";
import { NavigationIcons } from "../NavigationIcons";
import { Video } from "./Video";

export const VideoContainer = () => {
  const markerRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={markerRef}></div>

      <section
        className={`${isStuck ? "rounded-none p-0" : "rounded p-3"} bg-background-gray sticky top-0 right-0 left-0 z-10 pb-2 transition-all ease-out md:static md:p-5 lg:bg-white lg:[grid-area:video]`}
      >
        <Video isStuck={isStuck} />
        <NavigationIcons />
      </section>
    </>
  );
};
