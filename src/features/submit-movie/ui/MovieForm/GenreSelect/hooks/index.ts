import { SelectChangeEvent } from "@mui/material";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { genreOption } from "../../../../api";

export const useGenreSelect = <T extends FieldValues>({
  control,
  name,
}: UseControllerProps<T>) => {
  const {
    field: { ref, onChange, value },
  } = useController<T>({ name, control });

  const handler = (e: SelectChangeEvent<HTMLInputElement>) => {
    const selected = genreOption.find((g) => g.id === e.target.value);
    return selected && { ...selected };
  };

  const handleChange = (e: SelectChangeEvent<HTMLInputElement>) =>
    onChange(handler(e));
  return {
    handleChange,
    ref,
    value,
  };
};
