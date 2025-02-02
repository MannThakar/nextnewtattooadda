"use client";

import Carousel from "react-multi-carousel";
import { ARTIST_DATA } from "@/utils/constant";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Artists = () => {
  return (
    <div id="artist" className="artist ">
      <h2 className="offerTitles container">
        Meet the Masters <span className="offerSpan"> Behind the Ink</span>
      </h2>
      <Carousel responsive={responsive}>
        {ARTIST_DATA?.map((profile, index) => (
          <Link key={index} href={`/artist/${profile.id}`}>
            <Image
              key={index}
              src={profile.profilePic}
              alt="artist"
              className="artistImg"

              // Remove this props to make image responsive
              width={400}
              height={300}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Artists;
