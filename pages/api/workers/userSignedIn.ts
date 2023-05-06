import { verifySignature } from "@upstash/qstash/nextjs";
import {NextApiRequest, NextApiResponse} from "next"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("If this is printed, the signature has already been verified");
  console.log(req);
  res.status(200).end();
}

export default verifySignature(handler);

// TODO - Work out what types are here because they are missing in the lib :D
export const config = {
  api: { bodyParser: true },
};
