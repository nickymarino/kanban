import { Card } from "@kanban/core/card";
import { builder } from "../builder";

const MOCK_USER_ID = "u1";
const MOCK_BOARD_ID = "b1";
const MOCK_COLUMN_ID = "c1";

const CardType = builder.objectRef<Card.Info>("Card").implement({
  fields: (t) => ({
    id: t.exposeID("cardID"),
    title: t.exposeString("title"),
    boardID: t.exposeString("boardID"),
    columnID: t.exposeString("columnID"),
    userID: t.exposeString("userID"),
  }),
});

builder.queryFields((t) => ({
  card: t.field({
    type: CardType,
    args: {
      cardID: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Card.fromID(MOCK_USER_ID, args.cardID);
      if (!result) {
        throw new Error("Card not found");
      }
      return result;
    },
  }),
}));

builder.mutationFields((t) => ({
  createCard: t.field({
    type: CardType,
    args: {
      title: t.arg.string({ required: true }),
    },
    resolve: (_, args) =>
      Card.create(MOCK_USER_ID, MOCK_BOARD_ID, MOCK_COLUMN_ID, args.title),
  }),
}));
