import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Corpo } from "../../styles/global";
import Header from "../../components/header/Header";
import Lembrete from "../../components/recadosComponents/lembrete/Lembrete";
import { RecadosDiv, BarraTituloTabela, TituloTabela, DivNovoLembrete, BotaoAdicionar, SecaoLembretes, Lembretes,TabelaLembretes } from "./RecadosStyled";
import { Typography } from "@mui/material";
import LinhaEspacamento from "../../components/recadosComponents/linhaEspaco/LinhaEspacamento";
import ModalLembrete from "../../components/recadosComponents/modalLembrete/ModalLembrete";
import ModalExclusao from "../../components/recadosComponents/modalExclusao/ModalExclusao";
import { AccountType } from "../../types/types";
function Recados() {
    const { loggedSessionAccountID } = useSelector((state: any) => state.loggedSessionAccount);
    const { loggedLocalAccountID } = useSelector((state: any) => state.loggedLocalAccount);
    const { accounts } = useSelector((state: any) => state.users);
    const userModel : AccountType = {
        id: "",
        username: "",
        password: "",
        reminders: []
    }
    const [user, setUser] = useState(userModel);
    const [checkLoadPage, setCheckLoadPage] = useState(0);
    useEffect(() => {
        if (document.readyState === "complete") {
            if (loggedSessionAccountID === undefined && loggedLocalAccountID === undefined) {
                window.open("/login", "_self");
            }
            const loggedAccountID : string = loggedSessionAccountID !== undefined ? loggedSessionAccountID : loggedLocalAccountID;
            const loggedAccount : AccountType = accounts.find((account : AccountType) => account.id === loggedAccountID[0]);
            setUser(loggedAccount);
        }
        else {
            setCheckLoadPage(checkLoadPage + 1);
        }
    }, [checkLoadPage]);
/*     const lembreteInfos = {
        id: '263hasd',
        acao: 'Lavar a Louça',
        data: '15/06/1998',
        hora: '19:15',
        descricao: 'Lavar toda a louça e seca-la no final.'
    }; */
    return (
        <Corpo sx={{height: '100vh'}}>
            <Header userID={user.id} userName={user.username} />
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
                        {/* <ModalLembrete accountId={"dajdnnh323"} /> */}
                        <TabelaLembretes>
                            <LinhaEspacamento/>
                            {/* <Lembrete id={lembreteInfos.id} acao={lembreteInfos.acao} data={lembreteInfos.data} hora={lembreteInfos.hora} descricao={lembreteInfos.descricao} /> */}
                        </TabelaLembretes>
                    </Lembretes>
                </SecaoLembretes>
            </RecadosDiv>
        </Corpo>
    );
};
export default Recados;