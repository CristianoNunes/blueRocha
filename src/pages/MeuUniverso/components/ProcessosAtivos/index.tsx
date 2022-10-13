import { useCallback, useEffect, useState } from "react";
import * as S from "./styles";

import { MoonLoader } from "react-spinners";

import { apiEPM } from "../../../../services/api/epm";

type Processos = {
  FASE: string;
  PERCENTUAL: number;
};

const ProcessosAtivos = () => {
  const [processActives, setProcessActives] = useState<Processos[]>([]);
  // const [totalProcess, setTotalProcess] = useState<number>(0);

  // const sumQtdprocess = (total: number, item: Processos) => {
  //   return total + item.Qtd;
  // };

  // const calcularPorcentagem = (qtd: number) => {
  //   return (qtd * 100) / totalProcess;
  // };

  const initProcess = useCallback(async () => {
    const { status, data } = await apiEPM.getProcess("FASE_PROCESSUAL:FASE");
    if (status !== 200) throw new Error();
    if (data.error) {
      return console.log(data.error.message);
    }
    setProcessActives(data.list);
  }, []);

  useEffect(() => {
    if (processActives.length === 0) {
      initProcess();
    }
  }, [initProcess, processActives]);

  // useEffect(() => {
  //   setTotalProcess(processActives.reduce(sumQtdprocess, 0));
  // }, [processActives]);

  return (
    <S.Container>
      <S.TitleCardContainer>
        {/* <S.TotalProcessos>{totalProcess}</S.TotalProcessos> */}
        <S.TitleCard>Processos Ativos</S.TitleCard>
      </S.TitleCardContainer>
      {processActives.length > 0 ? (
        <S.ListProcessosUl>
          {processActives.map((processo) => {
            return (
              <S.ListProcessosLi key={processo.FASE}>
                <S.ListItemProcesso>
                  <S.ListItemProcessoInfo>
                    <S.ListItemTitleProcesso>
                      {processo.FASE}
                    </S.ListItemTitleProcesso>
                    <S.ListItemPorcentagemProcesso>
                      {/* {calcularPorcentagem(processo.Qtd).toFixed(0)}% */}
                      {processo.PERCENTUAL}%
                    </S.ListItemPorcentagemProcesso>
                  </S.ListItemProcessoInfo>
                  <S.Chart percentual={processo.PERCENTUAL.toString()} />
                  <S.BackgroundChart />
                </S.ListItemProcesso>
              </S.ListProcessosLi>
            );
          })}
        </S.ListProcessosUl>
      ) : (
        <S.ContainerLoading>
          <MoonLoader size={40} color="#1e4072" />
        </S.ContainerLoading>
      )}
    </S.Container>
  );
};

export default ProcessosAtivos;
