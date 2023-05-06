import { verifySignature } from "@upstash/qstash/nextjs";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).end();
}

export default verifySignature(handler);

// TODO - Work out what types are here because they are missing in the lib :D
export const config = {
  api: { bodyParser: true },
};
