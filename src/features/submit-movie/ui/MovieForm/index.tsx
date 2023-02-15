import {
  Button,
  ButtonProps,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import { genreOption, useMovieForm } from "../../api";
import { MediaCheckboxGroup } from "./MediaCheckboxGroup";

const Form = styled("form")({
  p: 1,
});

const Flex = styled("div")({
  display: "flex",
  gap: "16px",
});

const Vertical = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const TitleInput = () => {
  return (
    <FormControl>
      <TextField />
    </FormControl>
  );
};

const YearInput = () => {
  return (
    <FormControl>
      <FormLabel>年</FormLabel>
      <Input type="number" />
    </FormControl>
  );
};

const DirectorInput = () => (
  <FormControl>
    <TextField label="監督" />
  </FormControl>
);
const GenreSelect = () => (
  <Select>
    {genreOption.map((g) => (
      <MenuItem key={g.id} value={g.id}>
        {g.display}
      </MenuItem>
    ))}
  </Select>
);

const SubmitButton = () => <Button type="submit">送信</Button>;
const ResetButton = ({ onClick }: ButtonProps) => (
  <Button onClick={onClick}>リセット</Button>
);

export const MovieForm = () => {
  const { control, onSubmit, reset } = useMovieForm();
  return (
    <Form onSubmit={onSubmit}>
      <Vertical>
        <TitleInput />
        <YearInput />
        <DirectorInput />
        <GenreSelect />
        <MediaCheckboxGroup name="media" control={control} />
        <Flex>
          <SubmitButton />
          <ResetButton onClick={() => reset()} />
        </Flex>
      </Vertical>
    </Form>
  );
};
