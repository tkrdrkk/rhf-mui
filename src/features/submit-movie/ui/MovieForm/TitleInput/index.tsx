import { TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { GeneralInputProps } from "../../../types";
import { useTitleInput } from "./hooks";

type TitleInputProps<T extends FieldValues> = GeneralInputProps<T>;

export const TitleInput = <T extends FieldValues>({
  name,
  control,
}: TitleInputProps<T>) => {
  const { handleChange, ref, value } = useTitleInput({ name, control });
  return (
    <TextField
      ref={ref}
      value={value}
      type="text"
      label="タイトル"
      onChange={handleChange}
    />
  );
};
