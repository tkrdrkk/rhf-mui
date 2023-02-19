import { TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { GeneralInputProps } from "../../../types";
import { useDirectorInput } from "./hooks";

type DirectorInputProps<T extends FieldValues> = GeneralInputProps<T>;

export const DirectorInput = <T extends FieldValues>({
  name,
  control,
}: DirectorInputProps<T>) => {
  const { handleChange, ref, value } = useDirectorInput({ name, control });
  return (
    <TextField
      ref={ref}
      value={value}
      type="text"
      label="監督"
      onChange={handleChange}
    />
  );
};
