import { SignInWithSpotify } from "./SignInWithSpotify";

const ArtistNameCarousel = () => (
  <div>
    <img
      className="object-contain h-48"
      src="/artists-large.gif"
      width={500}
      height={500}
      alt=""
    />
  </div>
);

export const Splash = () => (
  <div className="w-full h-2/3 bg-white flex flex-col align-center items-center justify-center p-4 mt-24 lg:mt-32">
    <ArtistNameCarousel />
    <h2 className="text-2xl mt-8 text-center ">
      Discover the artist hidden within your listening habits.
    </h2>
    <h3 className="text-center mt-2 w-full lg:w-2/5 text-sm">
      {/* Experiment with this. */}
      Tonespoon reviews imaginary albums, by imaginary artists. Powered by your
      Spotify listening history.
    </h3>
    {/* TODO - Use Session and render different component if signed in e.g Roll The Dice... */}
    <SignInWithSpotify />
  </div>
);
