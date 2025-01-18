import React from "react";
import artistOne from "../../../../../public/assets/Artist/hemal.png";
import Image from "next/image";
import { BESTWORK_IMAGES } from "../../../../utils/constant";
const IndividualArtist = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="individualArtist container">
      <h2 className="individualArtistTitle">The Visionary Behind the Needle</h2>
      <div className="individualArtistLeft">
        <div className="individualArtistImage">
          <div>
            <p className="individualArtistName">Hi! My name is</p>
            <h2 className="individualArtistTitle">Hemal Kumar</h2>
            <p className="individualArtistPara">
              I am a tattoo artist, and I am passionate about creating unique
              and meaningful tattoos for my clients.
            </p>
          </div>
        </div>
      </div>
      <div className="masonry-grid">
        {BESTWORK_IMAGES?.map((image, index) => (
          <div key={index} className="masonry-item">
            <Image
              src={image}
              alt={`Bestwork ${index + 1}`}
              className="artistWork"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualArtist;
