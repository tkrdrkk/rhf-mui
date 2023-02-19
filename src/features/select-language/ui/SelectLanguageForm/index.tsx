import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import {
  LanguageId,
  languageId,
  useSelectLanguageForm,
  UseSelectLanguageFormType,
} from "../../api";

export const SelectLanguageForm = ({
  onSubmit,
}: {
  onSubmit: (params: UseSelectLanguageFormType) => void;
}) => {
  const { control, handleSubmit, reset } = useSelectLanguageForm({
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        {languageId.map((l) => (
          <LanguageCheckbox key={l} id={l} control={control} />
        ))}
      </FormControl>
      <Container sx={{ gap: 16 }}>
        <Button type="submit" variant="contained">
          go
        </Button>
        <Button onClick={() => reset()} variant="outlined">
          reset
        </Button>
      </Container>
    </form>
  );
};

const LanguageCheckbox = ({
  id,
  control,
}: { id: LanguageId } & Pick<
  UseControllerProps<UseSelectLanguageFormType>,
  "control"
>) => {
  const {
    field: { value, onChange },
  } = useController({ name: `languagesSelect.${id}`, control });

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return {
      ...value,
      selected: e.target.checked,
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(handler(e));
  return (
    <FormControlLabel
      label={id}
      value={value}
      control={<Checkbox checked={value.selected} onChange={handleChange} />}
    />
  );
};
