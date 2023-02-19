import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { genreOption } from "../../../api";
import { GeneralInputProps } from "../../../types";
import { useGenreSelect } from "./hooks";
type GenreSelectProps<T extends FieldValues> = GeneralInputProps<T>;

export const GenreSelect = <T extends FieldValues>({
  name,
  control,
}: GenreSelectProps<T>) => {
  const { handleChange, ref, value } = useGenreSelect({ name, control });

  return (
    <FormControl>
      <InputLabel>ジャンル選択</InputLabel>
      <Select ref={ref} value={value.id} onChange={handleChange}>
        {genreOption.map((g) => (
          <MenuItem key={g.id} value={g.id}>
            {g.display}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
