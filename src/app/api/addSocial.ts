import type { NextApiRequest, NextApiResponse } from "next";
import { createSocial } from "../../actions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const newSocialLink = await createSocial(req.body);
      res.status(200).json(newSocialLink);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Internal Server Error", error: error.message });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
