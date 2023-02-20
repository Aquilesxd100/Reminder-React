import { Corpo } from "../../styles/global";
import Header from "../../components/header/Header";
import Lembrete from "../../components/recadosComponents/lembrete/Lembrete";
import { RecadosDiv, BarraTituloTabela, TituloTabela, DivNovoLembrete, BotaoAdicionar, SecaoLembretes, Lembretes,TabelaLembretes } from "./RecadosStyled";
import { Typography } from "@mui/material";
import LinhaEspacamento from "../../components/recadosComponents/linhaEspaco/LinhaEspacamento";
import ModalLembrete from "../../components/recadosComponents/modalLembrete/ModalLembrete";
import ModalExclusao from "../../components/recadosComponents/modalExclusao/ModalExclusao";
function Recados() {
const username = "teste"
    const lembreteInfos = {
        id: '263hasd',
        acao: 'Lavar a Louça',
        data: '15/06/1998',
        hora: '19:15',
        descricao: 'Lavar toda a louça e seca-la no final.'
    };
    return (
        <Corpo sx={{height: '100vh'}}>
            <Header userName={username} />
            <RecadosDiv>
                <BarraTituloTabela>
                    <TituloTabela>
                        <Typography variant="h2">Lembretes</Typography>
                    </TituloTabela>
                    <DivNovoLembrete>
                        <BotaoAdicionar size="large" variant="contained" color="success">
                            Adicionar
                        </BotaoAdicionar>
                    </DivNovoLembrete>
                </BarraTituloTabela>
                <SecaoLembretes>
                    <Lembretes>
                        {/*                         <AvisoLembreteVazio>
                            <Nuvemlembretes>
                                <Typography variant="subtitle2">Você ainda não tem lembretes...</Typography>
                                <Typography variant="subtitle2">Clique em "adicionar" para criar um!</Typography>
                            </Nuvemlembretes>
                        </AvisoLembreteVazio> */}
                        {/* <ModalExclusao /> */}
                        {/* <ModalLembrete accountId={"dajdnnh323"} /> */}
                        <TabelaLembretes>
                            <LinhaEspacamento/>
                            <Lembrete id={lembreteInfos.id} acao={lembreteInfos.acao} data={lembreteInfos.data} hora={lembreteInfos.hora} descricao={lembreteInfos.descricao} />
                        </TabelaLembretes>
                    </Lembretes>
                </SecaoLembretes>
            </RecadosDiv>
        </Corpo>
    );
};
export default Recados;