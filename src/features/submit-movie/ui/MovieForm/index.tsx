import { Button, ButtonProps, Container, Stack, styled } from "@mui/material";
import { useMovieForm } from "../../api";
import { DirectorInput } from "./DirectorInput";
import { GenreSelect } from "./GenreSelect";
import { MediaCheckboxGroup } from "./MediaCheckboxGroup";
import { TitleInput } from "./TitleInput";
import { YearInput } from "./YearInput";

const Form = styled("form")({
  p: 16,
});

const SubmitButton = () => <Button type="submit">送信</Button>;
const ResetButton = ({ onClick }: ButtonProps) => (
  <Button onClick={onClick}>リセット</Button>
);

export const MovieForm = () => {
  const { control, onSubmit, reset } = useMovieForm();
  return (
    <Form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TitleInput name="title" control={control} />
        <YearInput name="year" control={control} />
        <DirectorInput name="director" control={control} />
        <GenreSelect name="genre" control={control} />
        <MediaCheckboxGroup name="media" control={control} />
      </Stack>
      <Container>
        <SubmitButton />
        <ResetButton onClick={() => reset()} />
      </Container>
    </Form>
  );
};
