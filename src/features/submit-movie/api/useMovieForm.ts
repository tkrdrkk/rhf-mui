import { SubmitHandler, useForm } from "react-hook-form";

export const genreOption = [
  { id: "science-fiction", display: "SF" },
  { id: "animation", display: "アニメ" },
  { id: "action", display: "アクション" },
  { id: "fantasy", display: "ファンタジー" },
  { id: "romance", display: "ラブロマンス" },
] as const;
type GenreOption = typeof genreOption[number];

export const mediaOption = [
  { id: "tape", display: "ビデオテープ" },
  { id: "dvd", display: "DVD" },
  { id: "blu-ray", display: "Blu-ray Disc" },
] as const;
export type MediaOption = typeof mediaOption[number];

export type UseMovieFormInputType = {
  title: string;
  year: number;
  director: string;
  genre: GenreOption;
  media: MediaOption[];
};

const defaultValues: UseMovieFormInputType = {
  title: "",
  year: new Date().getFullYear(),
  director: "",
  genre: {
    id: "romance",
    display: "ラブロマンス",
  },
  media: [],
};

export const useMovieForm = () => {
  const { control, handleSubmit, reset } = useForm<UseMovieFormInputType>({
    defaultValues,
  });

  const handler: SubmitHandler<UseMovieFormInputType> = (e) =>
    alert(JSON.stringify(e));

  const onSubmit = handleSubmit(handler);

  return { control, onSubmit, reset };
};
