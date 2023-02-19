import { Checkbox, FormControlLabel, FormGroup, styled } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { MediaOption, mediaOption } from "../../../api";
import { GeneralInputProps } from "../../../types";
import { useMediaCheckboxGroup } from "./hooks";

const StyledFormGroup = styled(FormGroup)({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
});

type MediaCheckboxGroupProps<T extends FieldValues> = GeneralInputProps<T>;

export const MediaCheckboxGroup = <T extends FieldValues>({
  name,
  control,
}: MediaCheckboxGroupProps<T>) => {
  const { ref, values, handleChange } = useMediaCheckboxGroup<T>({
    name,
    control,
  });

  return (
    <StyledFormGroup ref={ref} onChange={handleChange}>
      {mediaOption.map((m) => (
        <FormControlLabel
          key={m.id}
          control={
            <Checkbox
              value={m.id}
              checked={values.some((v: MediaOption) => v.id === m.id)} // HACK 型推論が効かないのどうにかしたい
            />
          }
          label={m.display}
        />
      ))}
    </StyledFormGroup>
  );
};
