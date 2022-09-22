import { ReactElement } from "react";
import * as C from "./styles";

type Props = {
  title: string;
  field: ReactElement<HTMLFormElement>;
};

export const Field = ({ title, field }: Props) => {
  return (
    <C.Container>
      <span>{title}</span>
      {field}
    </C.Container>
  );
};
