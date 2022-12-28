import { useTypedMutation } from "@kanban/graphql/urql";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useCallback, useState } from "react";

interface CardForm {
  title: string;
}

export const CreateCard = () => {
  const [title, setTitle] = useState("");

  const [state, executeMutation] = useTypedMutation((opts: CardForm) => ({
    createCard: [
      {
        title: opts.title,
      },
      {
        id: true,
      },
    ],
  }));

  const submit = useCallback(() => {
    executeMutation({ title });
    setTitle("");
  }, [executeMutation, title]);

  return (
    <Card sx={{ minwidth: 275 }} variant="outlined">
      <CardContent>
        <TextField
          label="Title"
          variant="outlined"
          placeholder="Wash the dishes"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button onClick={submit} disabled={state.fetching}>
          Add task
        </Button>
      </CardActions>
    </Card>
  );
};
