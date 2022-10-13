import { FC } from "react";

import SideBar from "../components/SideBar";
import * as S from "./styles";

type Props = { children: JSX.Element };

const Default: FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <>
        <SideBar>{children}</SideBar>
      </>
    </S.Container>
  );
};

export default Default;
