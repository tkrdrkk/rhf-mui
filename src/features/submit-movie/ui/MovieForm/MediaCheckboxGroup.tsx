import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormGroupProps,
} from "@mui/material";
import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { mediaOption } from "../../api";

const useMediaCheckboxGroup = <T extends FieldValues>({
  control,
  name,
}: UseControllerProps<T>) => {
  const {
    field: { ref, onChange, value: checkedValues, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return e.target.checked
      ? [...new Set([...checkedValues, e.target.value])]
      : [...checkedValues].filter((v) => v !== e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(handler(e));
  return {
    handleChange,
    ref,
    checkedValues,
    rest,
  };
};

type MediaCheckboxGroupProps<T extends FieldValues> = FormGroupProps & {
  inputRef?: FormGroupProps["ref"];
  errorMessage?: string;
} & UseControllerProps<T>;

export const MediaCheckboxGroup = <T extends FieldValues>({
  name,
  control,
}: MediaCheckboxGroupProps<T>) => {
  const { handleChange, ref, checkedValues, rest } = useMediaCheckboxGroup<T>({
    name,
    control,
  });
  console.log(checkedValues);

  return (
    <FormGroup ref={ref} onChange={handleChange}>
      {mediaOption.map((m) => (
        <FormControlLabel
          key={m.id}
          control={
            <Checkbox value={m.id} checked={checkedValues.includes(m.id)} />
          }
          label={m.display}
          {...rest}
        />
      ))}
    </FormGroup>
  );
};
