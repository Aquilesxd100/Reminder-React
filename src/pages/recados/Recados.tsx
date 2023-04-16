import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Corpo } from "../../styles/global";
import Header from "../../components/header/Header";
import Lembrete from "../../components/recadosComponents/lembrete/Lembrete";
import { Typography } from "@mui/material";
import LinhaEspacamento from "../../components/recadosComponents/linhaEspaco/LinhaEspacamento";
import ModalLembrete from "../../components/recadosComponents/modalLembrete/ModalLembrete";
import { RootState, UserStore } from "../../redux/configureStore";
import { InfosRequestRemindersType, ReminderType } from "../../types/reminderTypes";
import { RecadosDiv, BarraTituloTabela, TituloTabela, DivNovoLembrete, BotaoAdicionar, SecaoLembretes, Lembretes,TabelaLembretes, AvisoLembreteVazio, Nuvemlembretes } from "./RecadosStyled";
import remindersOrganizer from "../../helpers/reminders/remindersOrganizer";
import { showReminderModal } from "../../redux/slices/modalManagerSlice";
import { sessionLogOut } from "../../redux/slices/loggedSessionSlice";
import { localLogOut } from "../../redux/slices/loggedLocalSlice";
import { validTokenRequest } from "../../redux/slices/checkTokenSlice";
import { TokenAuthType } from "../../types/otherTypes";
import { listRemindersRequest, resetUpdate } from "../../redux/slices/remindersSlice";
import PainelPesquisa from "../../components/recadosComponents/painelPesquisa/PainelPesquisa ";
function Recados() {
    const dispatch = useDispatch<UserStore>();
    const { checkedSessionToken, checkedLocalToken, userName } = useSelector((state : RootState) => state.checkToken);
    const { loggedSessionAccountToken } = useSelector((state: RootState) => state.loggedSessionAccount);
    const { loggedLocalAccountToken } = useSelector((state: RootState) => state.loggedLocalAccount);
    const { storedReminders, needUpdate } = useSelector((state: RootState) => state.reminders);
    const { search, checkBox } = useSelector((state : RootState) => state.search);
    const [validToken, setValidToken] = useState<string | undefined>(undefined);
    const [currentUserName, setCurrentUserName] =  useState("");

    useEffect(() => {
        if (loggedSessionAccountToken === undefined && loggedLocalAccountToken === undefined) {
            window.open("/login", "_self");
        };
        if (loggedLocalAccountToken !== undefined) {
            const localToken : TokenAuthType = {
                token: loggedLocalAccountToken,
                type: "local"
            };
            dispatch(validTokenRequest(localToken));
        };
        if(loggedSessionAccountToken !== undefined) {
            const sessionToken : TokenAuthType = {
                token: loggedSessionAccountToken,
                type: "session"
            };
            dispatch(validTokenRequest(sessionToken));
        };
    }, []);
    useEffect(() => {
        if(checkedSessionToken === false) dispatch(sessionLogOut());
        if(checkedLocalToken === false) dispatch(localLogOut());
        if (checkedSessionToken === false || checkedLocalToken === false) {
            setTimeout(() => { window.open("/login", "_self"); }, 350);
        }
        else if (checkedLocalToken || checkedSessionToken) {
            setValidToken(loggedSessionAccountToken !== undefined
            ? loggedSessionAccountToken 
            : loggedLocalAccountToken);
        }
    }, [checkedSessionToken, checkedLocalToken]);

    useEffect(() => {
        if (typeof validToken !== "string") return;
        const remindersRequest : InfosRequestRemindersType = {
            token: validToken,
            searchInput: search,
            archivedBox: checkBox,
        };
        dispatch(listRemindersRequest(remindersRequest));
        setCurrentUserName(userName);
    }, [validToken])

    useEffect(() => {
        if(needUpdate) {
            if (typeof validToken !== "string") return;
            dispatch(resetUpdate());
            const remindersRequest : InfosRequestRemindersType = {
                token: validToken,
                searchInput: search,
                archivedBox: checkBox,
            };
            dispatch(listRemindersRequest(remindersRequest));
        }
    }, [needUpdate])

    const reminderModel : Array<ReminderType> = [];
    const [reminders, setReminders] = useState(reminderModel);
    useEffect(() => {
        const remindersByDateOrder : Array<ReminderType> = remindersOrganizer(storedReminders);
        setReminders(remindersByDateOrder);
    }, [storedReminders]);

    function newReminderModal() {
        const reminderInfos = {
            type: 'new',
            reminderEditID: ""
        }
        dispatch(showReminderModal(reminderInfos));
    };
    return (
        <Corpo sx={{height: 'auto', minHeight: '100vh', paddingBottom: '20px'}}>
            <Header token={validToken} userName={currentUserName} />
            <RecadosDiv>
                <BarraTituloTabela>
                    <TituloTabela>
                        <Typography variant="h2">Lembretes</Typography>
                    </TituloTabela>
                    <DivNovoLembrete>
                        <BotaoAdicionar onClick={(() => {newReminderModal()})} size="large" variant="contained" color="success">
                            Adicionar
                        </BotaoAdicionar>
                    </DivNovoLembrete>
                </BarraTituloTabela>
                <SecaoLembretes>
                    <PainelPesquisa />
                    <Lembretes>
                        {!storedReminders.length && <AvisoLembreteVazio>
                            <Nuvemlembretes>
                                <Typography variant="subtitle2">Você ainda não tem lembretes...</Typography>
                                <Typography variant="subtitle2">Clique em "adicionar" para criar um!</Typography>
                            </Nuvemlembretes>
                        </AvisoLembreteVazio>}
                        <ModalLembrete token={validToken}  />
                        <TabelaLembretes>
                            {!!reminders.length && reminders.map((reminder) => (
                                <Lembrete token={validToken} key={reminder.id} archived={reminder.archived} id={reminder.id} acao={reminder.action} data={reminder.date} hora={reminder.time} descricao={reminder.description} />
                            ))}
                            <LinhaEspacamento/>
                        </TabelaLembretes>
                    </Lembretes>
                </SecaoLembretes>
            </RecadosDiv>
        </Corpo>
    );
};
export default Recados;
