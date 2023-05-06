import { Review } from "@/mocks/reviews";
import Link from "next/link";

export const ArtworkGrid = ({ reviews }: { reviews: Review[] }) => {
  // Randomise reviews before rendering.
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-2 md:gap-3 lg:gap-4 -translate-x-20 lg:-translate-x-48 w-[125%] my-20 lg:my-48">
      {reviews.map(
        (
          { artistName, albumName, artworkUrl, slug }: Review,
          index: number
        ) => (
          <div
            className={`overflow-hidden rounded-sm hover:shadow-realistic shadow-none duration-300 lg:even:-translate-y-12 hover:scale-105 transform transition-all duration-250 ease-in-out cursor-pointer`}
            key={`${artistName}-${albumName}-${index}`}
          >
            <Link href={`/reviews/${slug}`}>
              <img
                alt={`Album artwork for an artist named ${artistName}`}
                src={artworkUrl}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        )
      )}
    </div>
  );
};
