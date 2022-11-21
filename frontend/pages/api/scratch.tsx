import { bool } from "aws-sdk/clients/signer";
import { NextApiRequest, NextApiResponse } from "next";

export interface Document {
  success: bool;
  cards: {
    title: string;
    id: string;
  }[];
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const response: Document = {
    success: true,
    cards: [
      { id: "id1", title: "title1" },
      { id: "id2", title: "title2" },
      { id: "id3", title: "title3" },
    ],
  };

  res.status(200).send(response);
};

export default handler;
