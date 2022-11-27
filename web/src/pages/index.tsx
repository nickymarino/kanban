import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { devtoolsExchange } from "@urql/devtools";
import { createClient, defaultExchanges, Provider as UrqlProvider } from "urql";
import { Column } from "../components/Column";

export default function App() {
  const urqlClient = createClient({
    url: "https://1u6whkwzka.execute-api.us-east-1.amazonaws.com/graphql",
    exchanges: [devtoolsExchange, ...defaultExchanges],
  });

  return (
    <Container maxWidth="lg">
      <UrqlProvider value={urqlClient}>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Column title="My Column" />
        </Box>
      </UrqlProvider>
    </Container>
  );
}
