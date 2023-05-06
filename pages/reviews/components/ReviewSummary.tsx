import { Artwork } from "./Artwork";
import { Rating } from "./Rating";
import { reviews, type Review } from "@/mocks/reviews";

export const ReviewSummary = ({ review }: { review: Review }) => {
  return (
    <div className="w-full lg:w-3/4">
      {/* Mobile */}
      <div className="flex lg:hidden flex-col items-center bg-slate-50 p-6">
        <div className="flex">
          <Artwork {...review} />
          <Rating rating={review.score} />
        </div>

        <div className="flex flex-col justify-center items-center">
          <aside className="text-gray-400">A L B U M</aside>
          <h1 className="text-4xl text-center font-serif italic mt-4 ml-6 font-bold">
            {review.albumName}
          </h1>
          <h2 className="text-xl text-black mt-2">{review.artistName}</h2>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between bg-slate-50 p-6">
        <div className="flex flex-col justify-center items-center">
          <aside className="text-gray-500">A L B U M</aside>
          <h1 className="text-4xl text-center font-serif italic mt-4 ml-6 font-bold">
            {review.albumName}
          </h1>
          <h2 className="text-xl text-black mt-2">{review.artistName}</h2>
        </div>
        <Artwork {...review} />
        <Rating rating={review.score} />
      </div>
    </div>
  );
};
