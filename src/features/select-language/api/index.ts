import { SubmitHandler, useForm } from "react-hook-form";
export const languageId = ["japanese", "english", "german"] as const;
export type LanguageId = typeof languageId[number];
const languageDisplay = ["日本語", "英語", "ドイツ語"] as const;
type LanguageDisplay = typeof languageDisplay[number];

export type LanguagesSelect = {
  [key in LanguageId]: { display: LanguageDisplay; selected: boolean };
};

export type UseSelectLanguageFormType = {
  languagesSelect: LanguagesSelect;
};
export const defaultValues: UseSelectLanguageFormType = {
  languagesSelect: {
    japanese: {
      display: "日本語",
      selected: false,
    },
    english: {
      display: "英語",
      selected: false,
    },
    german: {
      display: "ドイツ語",
      selected: false,
    },
  },
};

export const useSelectLanguageForm = ({
  onSubmit,
}: {
  onSubmit: (params: UseSelectLanguageFormType) => void;
}) => {
  const {
    control,
    handleSubmit: rhfHandleSubmit,
    reset,
  } = useForm<UseSelectLanguageFormType>({
    defaultValues,
  });

  const handler: SubmitHandler<UseSelectLanguageFormType> = (e) => onSubmit(e);

  const handleSubmit = rhfHandleSubmit(handler);

  return { control, handleSubmit, reset };
};
