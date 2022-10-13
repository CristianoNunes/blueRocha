import { useState } from "react";
import { useHistory } from "react-router";

import * as S from "./styles";
import logo from "../../../../assets/imgs/logo-rc.png";
import { TwoUsers, Password } from "../../../../assets/icons";
import { apiEPM } from "../../../../services/api/epm";
import { storage } from "../../../../services/storage";

const FormLogin = (): JSX.Element => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { status, data } = await apiEPM.authentication(userName, password);
    if (status !== 200) throw new Error();
    if (data.error) {
      return alert(data.error.message);
    }
    const auth_ticket: string = data.data.auth_ticket;
    storage.setSession("token", auth_ticket);
    history.push("/");
  };

  return (
    <S.Container variant="elevation" elevation={5}>
      <S.Logo src={logo} />
      <S.TitleLogin variant="h5">Faça o login</S.TitleLogin>
      <form onSubmit={handleLogin}>
        <S.ContainerField>
          <S.InputField
            type="text"
            name="usuario"
            variant="outlined"
            id="outlined-basic"
            label="Usuário"
            size="small"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            InputProps={{
              endAdornment: (
                <S.IconUsers position="end">
                  <TwoUsers />
                </S.IconUsers>
              ),
            }}
          />
        </S.ContainerField>
        <S.ContainerField>
          <S.InputField
            type="password"
            name="password"
            variant="outlined"
            id="outlined-basic"
            label="Senha"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <S.IconUsers position="end">
                  <Password />
                </S.IconUsers>
              ),
            }}
          />
        </S.ContainerField>
        <S.ButtonEntrar variant="contained" type="submit">
          Entrar
        </S.ButtonEntrar>
      </form>
    </S.Container>
  );
};

export default FormLogin;
