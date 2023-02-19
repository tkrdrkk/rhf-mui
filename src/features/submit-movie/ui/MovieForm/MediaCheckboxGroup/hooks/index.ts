import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { mediaOption } from "../../../../api";

export const useMediaCheckboxGroup = <T extends FieldValues>({
  control,
  name,
}: UseControllerProps<T>) => {
  const {
    field: { ref, onChange, value: values },
  } = useController<T>({ name, control });

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = mediaOption.find((m) => m.id === e.target.value);
    if (!current) return;
    return e.target.checked
      ? [...new Set([...values, { ...current }])]
      : [...values].filter((v) => v.id !== e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(handler(e));
  return {
    handleChange,
    ref,
    values,
  };
};
