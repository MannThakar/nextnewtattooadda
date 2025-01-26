import React from "react";
import Image from "next/image";
const IndividualArtistAd = ({ imgs }) => {
  return (
    <div className="individualArtistAd">
      {imgs?.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="artist"
          className="individualArtAdImg"
          width={300}
          height={300}
        />
      ))}
    </div>
  );
};

export default IndividualArtistAd;
