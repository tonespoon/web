export const Rating = ({ rating }: { rating: number }) => (
  <div
    id="rating"
    className="relative rounded-full border-[6px] w-32 h-32 font-extrabold text-[54px] spacing border-black bg-white flex justify-center items-center"
  >
    {rating.toFixed(1)}
  </div>
);
