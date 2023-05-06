import { getServerSession } from "next-auth";

import { authOptions } from "./auth/[...nextauth]";
import UserSignedInWorker from "./workers/userSignedIn";

export default async function TestApiRoute(req, res) {
  const session = await getServerSession(req, res, authOptions);

  await UserSignedInWorker.enqueue(
    { message: "Hello can you do this thing for me?", session },
    {} // scheduling options
  );

  return res.send({ ok: true });
}
