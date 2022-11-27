import { Card } from "@kanban/core/card";
import { builder } from "../builder";

const CardType = builder.objectRef<Card.Info>("Card").implement({
  fields: (t) => ({
    id: t.exposeID("cardID"),
    title: t.exposeString("title"),
  }),
});

builder.queryFields((t) => ({
  card: t.field({
    type: CardType,
    args: {
      cardID: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Card.fromID(args.cardID);
      if (!result) {
        throw new Error("Card not found");
      }
      return result;
    },
  }),
  cards: t.field({
    type: [CardType],
    resolve: async () => {
      return await Card.list();
    },
  }),
}));

builder.mutationFields((t) => ({
  createCard: t.field({
    type: CardType,
    args: {
      title: t.arg.string({ required: true }),
    },
    resolve: (_, args) => Card.create(args.title),
  }),
}));
