import { List, ListItem, ListItemText } from "@mui/material";
import {
  languageId,
  UseSelectLanguageFormType,
} from "../../../select-language/api";

export const LanguageList = ({
  languagesSelect,
}: UseSelectLanguageFormType) => {
  if ([...languageId].every((id) => languagesSelect[id].selected === false))
    return <>No languages selected.</>;
  return (
    <List>
      {[...languageId].map(
        (id) =>
          languagesSelect[id].selected && (
            <ListItem key={id}>
              <ListItemText>{languagesSelect[id].display}</ListItemText>
            </ListItem>
          )
      )}
    </List>
  );
};
