"use client";
import { useState, useRef, useEffect } from "react";
import { ARTIST_IMAGES } from "@/utils/constant";
import Image from "next/image";

const Artists = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    const newPosition = scrollPosition + scrollOffset;
    const maxScroll =
      scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth;
    setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleScroll(200);
      } else if (event.key === "ArrowLeft") {
        handleScroll(-200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPosition]);

  useEffect(() => {
    scrollerRef.current.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  return (
    <div id="artist">
      <h1 className="artistTitle container">Meet the Masters Behind the Ink</h1>
      <div className="horizontal-profile-scroller" ref={scrollerRef}>
        {ARTIST_IMAGES?.map((profile, index) => (
          <Image
            key={index}
            src={profile.photo}
            alt="artist"
            className="artistImg"
          />
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Artists;
