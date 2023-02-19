import { TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { GeneralInputProps } from "../../../types";
import { useYearInput } from "./hooks";

type YearInputProps<T extends FieldValues> = GeneralInputProps<T>;

export const YearInput = <T extends FieldValues>({
  name,
  control,
}: YearInputProps<T>) => {
  const { handleChange, ref, value } = useYearInput({ name, control });
  return (
    <TextField
      ref={ref}
      value={value}
      type="number"
      label="年"
      onChange={handleChange}
    />
  );
};
