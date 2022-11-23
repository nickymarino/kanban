import AWS from "aws-sdk";

export interface Board {
  pk: string;
  columns: {
    uid: string;
    title: string;
    cards: {
      uid: string;
      title: string;
    }[];
  }[];
}

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
  apiVersion: "2012-08-10",
});

export default async function handler(req, res) {
  console.log("tablename: ", process.env.TABLE_NAME);
  const getParams = {
    // Get the table name from the environment variable
    TableName: process.env.TABLE_NAME,
    Key: {
      pk: "board1",
    },
  };
  const results = await dynamoDb.get(getParams).promise();
  console.log({ results });

  // If there is a row, then get the value of the
  // column called "tally"
  const board = results.Item; // ? results.Item.tally : 0;

  // const putParams = {
  //   TableName: process.env.TABLE_NAME,
  //   Key: {
  //     counter: "hits",
  //   },
  //   // Update the "tally" column
  //   UpdateExpression: "SET tally = :count",
  //   ExpressionAttributeValues: {
  //     // Increase the count
  //     ":count": ++count,
  //   },
  // };

  // await dynamoDb.update(putParams).promise();

  res.status(200).send(board);
}
