import { Review } from "@/mocks/reviews";
import Image from "next/image";

export const Artwork = ({ artworkUrl, albumName, artistName }: Review) => (
  <div className="w-32 h-32 mr-6 mb-6 lg:w-96 lg:h-96">
    <img
      width={512}
      height={512}
      className="object-fill"
      src={artworkUrl}
      alt={`Album artwork for ${albumName} by ${artistName}`}
    />
  </div>
);
