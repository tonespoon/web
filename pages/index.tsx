import { reviews } from "@/mocks/reviews";
import { Splash } from "@/components/Splash";
import { ArtworkGrid } from "../components/ArtworkGrid";
import { useSession } from "next-auth/react";
import { useLogger } from "@/util/logger";

export default function Index() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <div className="flex flex-col overflow-x-clip">
      <Splash />
      <ArtworkGrid reviews={reviews} />
    </div>
  );
}
