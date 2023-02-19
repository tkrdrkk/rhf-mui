import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

export const useTitleInput = <T extends FieldValues>({
  control,
  name,
}: UseControllerProps<T>) => {
  const {
    field: { ref, onChange, value },
  } = useController<T>({ name, control });

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return e.target.value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(handler(e));
  return {
    handleChange,
    ref,
    value,
  };
};
