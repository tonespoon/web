import { Review, reviews } from "@/mocks/reviews";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReviewSummary } from "@/components/ReviewSummary";
import { formatReviewDate } from "@/util/formatReviewDate";
import { ShareToStory } from "@/components/ShareToStory";

type ReviewPageProps = { review: Review };

const ReviewPage: React.FC<ReviewPageProps> = ({ review }) => {
  const reviewDate = formatReviewDate(review.createdAt);

  return (
    <div className="flex flex-col justify-center items-center h-full ">
      {/* TODO - Move into AdSense component for local use only. */}
      <div className="bg-green-500 w-full lg:w-3/5 h-32 sm:mb-4 lg:my-4 flex justify-center align-center items-center">
        Banner
      </div>
      {/* TODO Create a review summary specifically for lg+ and for sm devices so that the ordering of the document is easier to manage. */}
      <ReviewSummary review={review} />

      <div className="w-full lg:w-3/5 flex sm:flex-col lg:flex-row justify-between align-center items-center mt-6 px-4 text-xs lg:text-lg">
        <div>GENRE(S): {review.genres.join("/")}</div>
        <div>
          REVIEWED: {`${reviewDate.day} ${reviewDate.month} ${reviewDate.year}`}
        </div>
        <ShareToStory />
      </div>

      <div className="w-full lg:w-3/5 flex my-6 lg:my-12 items-stretch">
        <article className=" w-full lg:w-2/3 p-6 h-[75vh]">
          <h3 className="font-semibold text-xl">{review.summary}</h3>
          <p className="mt-8">{review.body}</p>
        </article>

        {/* This is the vertical banner on the side of the article. */}
        <div className="bg-green-500 hidden lg:flex items-center justify-center align-center p-6 w-1/3">
          Banner
        </div>
      </div>

      {/* Mobile Share to Story. */}
      <button className="fixed bottom-6 bg-black font-semibold text-white rounded-full text-xl py-3 px-8 shadow-realistic flex md:hidden items-center">
        <span>Share</span>
      </button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const artistName = context.params?.artistName;
  const albumName = context.params?.albumName;

  // TODO - Get Review from API.
  const review = reviews.filter(
    (r) => r.slug === `${artistName}/${albumName}`
  )[0];

  return { props: { review } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = reviews.map((review) => {
    const [artistName, albumName] = review.slug.split("/");
    return { params: { artistName, albumName } };
  });

  return { paths, fallback: "blocking" };
};

export default ReviewPage;
