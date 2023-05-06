import { reviews } from "@/mocks/reviews";
import { Splash } from "@/components/Splash";
import { ArtworkGrid } from "../components/ArtworkGrid";
import { useSession } from "next-auth/react";

export default function Index() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  const testApiRoute = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
  };

  return (
    <div className="flex flex-col overflow-x-clip">
      <button onClick={testApiRoute}>Test API Route</button>
      <Splash />
      <ArtworkGrid reviews={reviews} />
    </div>
  );
}
