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
      cardID: {
        type: "string",
        default: () => ulid(),
        required: true,
      },
      title: {
        type: "string",
        required: true,
      },
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
    indexes: {},
  },
  Dynamo.Configuration
);

export type Info = EntityItem<typeof cards>;

export async function create(
  title: string
): Promise<Info> {
  const item = await cards.create({ title }).go();
  return item.data;
}

export async function fromID(
  cardID: string
): Promise<Info | undefined> {
  const result = await cards.find({cardID}).go();
  if (!result || !result.data) {
    return;
  }
  return result.data[0];
}

export async function list(): Promise<Info[]> {
  const result = await cards.find({}).go();
  return result.data;
}