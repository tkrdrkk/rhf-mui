import { useState } from "react";
import { LanguageList } from "./features/list-languages/ui";
import {
  defaultValues,
  UseSelectLanguageFormType,
} from "./features/select-language/api";
import { SelectLanguageForm } from "./features/select-language/ui";

function App() {
  // return <MovieForm />;
  const [languages, setLanguages] =
    useState<UseSelectLanguageFormType>(defaultValues);

  const onSubmit = setLanguages;

  return (
    <>
      <SelectLanguageForm onSubmit={onSubmit} />
      <LanguageList {...languages} />
    </>
  );
}

export default App;
