export * as Card from "./card";
import { Entity, EntityItem } from "electrodb";
import { ulid } from "ulid";
import { SERVICE_NAME } from ".";
import { Dynamo } from "./dynamo";

export const cards = new Entity(
  {
    model: {
      entity: "cards",
      service: SERVICE_NAME,
      version: "1",
    },
    attributes: {
      // Identifiers
      cardID: {
        type: "string",
        default: () => ulid(),
        required: true,
      },
      columnID: {
        type: "string",
        required: true,
      },
      boardID: {
        type: "string",
        required: true,
      },
      userID: {
        type: "string",
        required: true,
      },
      // Data
      title: {
        type: "string",
        required: true,
      },
      // Timestamps
      createdAt: {
        type: "number",
        required: true,
        readOnly: true,
        default: () => Date.now(),
      },
      updatedAt: {
        type: "number",
        required: true,
        readOnly: true,
        default: () => Date.now(),
        watch: "*",
        set: () => Date.now(),
      },
    },
    indexes: {
      user: {
        collection: "ownedBy",
        pk: {
          field: "pk",
          composite: ["userID"],
        },
        sk: {
          field: "sk",
          composite: ["cardID"],
        },
      },
      project: {
        collection: "projects",
        index: "gis1",
        pk: {
          field: "gis1pk",
          composite: ["boardID"],
        },
        sk: {
          field: "gis1sk",
          composite: ["columnID", "cardID"],
        },
      },
    },
  },
  Dynamo.Configuration
);

export type Info = EntityItem<typeof cards>;

export async function create(
  userID: string,
  boardID: string,
  columnID: string,
  title: string
): Promise<Info> {
  const item = await cards.create({ userID, boardID, columnID, title }).go();
  return item.data;
}

export async function fromID(
  userID: string,
  cardID: string
): Promise<Info | undefined> {
  const result = await cards.query.user({ userID, cardID }).go();
  if (!result || !result.data) {
    return;
  }
  return result.data[0];
}

export async function list(userID: string): Promise<Info[]> {
  const result = await cards.query.user({userID}).go();
  return result.data;
}