import { NextjsSite, StackContext, use } from "@serverless-stack/resources";
import { Api } from "./Api";
import { Database } from "./Database";

export function Web({ stack, app }: StackContext) {
  const table = use(Database);
  const api = use(Api);

  // Create a Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "web",
    environment: {
      // Pass the table details to our app
      REGION: app.region,
      TABLE_NAME: table.tableName,
      GRAPHQL_URL: api.url + "/graphql",
    },
  });

  // Allow the Next.js API to access the table
  site.attachPermissions([table]);

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url,
  });
}
