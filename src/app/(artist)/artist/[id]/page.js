import React from "react";
import Image from "next/image";
import IndividualArtistAd from "@/common/IndividualArtistAd";
import { ARTIST_DATA } from "../../../../utils/constant";
import BackButton from "@/common/BackButton";
const IndividualArtist = async ({ params }) => {
  const { id } = await params;
  const artist = ARTIST_DATA.find((artist) => artist.id === parseInt(id));

  return (
    <>
      <BackButton />
      <div className="container">
        <h2 className="individualArtistTitle">
          The Visionary Behind{" "}
          <span className="offerSpan">&nbsp;the Needle</span>
        </h2>
        <div className="individualArtist">
          <div className="individualArtistProfile">
            <Image
              src={artist.profilePic}
              alt="artist"
              className="individualArtistImg"
              width={300}
              height={300}
            />
          </div>
          <div className="individualArtistBio">
            <div className="individualArtistText">
              <h1 className="individualArtistName">{artist.name}</h1>
              <p className="individualArtistLink">@{artist.description}</p>
              <p className="individualArtistDescription">
                {artist.profileDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="individualArtistBestWork">
          <h2 className="individualArtistTitle">
            Explore Our Artists{" "}
            <span className="offerSpan">&nbsp;Best Work</span>
          </h2>
          <IndividualArtistAd imgs={artist.photo} />
        </div>
      </div>
    </>
  );
};

export default IndividualArtist;
