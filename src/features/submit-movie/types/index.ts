import { FieldValues, UseControllerProps } from "react-hook-form";

export type GeneralInputProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  "control" | "name"
>;
