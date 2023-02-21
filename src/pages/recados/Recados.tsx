import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Corpo } from "../../styles/global";
import Header from "../../components/header/Header";
import Lembrete from "../../components/recadosComponents/lembrete/Lembrete";
import { RecadosDiv, BarraTituloTabela, TituloTabela, DivNovoLembrete, BotaoAdicionar, SecaoLembretes, Lembretes,TabelaLembretes, AvisoLembreteVazio, Nuvemlembretes } from "./RecadosStyled";
import { Typography } from "@mui/material";
import LinhaEspacamento from "../../components/recadosComponents/linhaEspaco/LinhaEspacamento";
import ModalLembrete from "../../components/recadosComponents/modalLembrete/ModalLembrete";
import { AccountType, LembreteType } from "../../types/types";
import { showReminderModal } from "../../redux/slices/modalManagerSlice";
import { RootState } from "../../redux/configureStore";
import remindersOrganizer from "../../helpers/reminders/remindersOrganizer";
function Recados() {
    const dispatch = useDispatch();
    const { loggedSessionAccountID } = useSelector((state: RootState) => state.loggedSessionAccount);
    const { loggedLocalAccountID } = useSelector((state: any) => state.loggedLocalAccount);
    const { accounts } = useSelector((state: any) => state.users);
    const userModel : AccountType = {
        id: "",
        username: "",
        password: "",
        reminders: []
    };
    const reminderModel : Array<LembreteType> = [];
    const [user, setUser] = useState(userModel);
    const [reminders, setReminders] = useState(reminderModel);
    useEffect(() => {
        const remindersByDateOrder : Array<LembreteType> = remindersOrganizer(user.reminders);
        setReminders(remindersByDateOrder);
    }, [user]);
    useEffect(() => {
        const loggedAccountID : string = loggedSessionAccountID !== undefined ? loggedSessionAccountID : loggedLocalAccountID;
        const loggedAccount : AccountType = accounts.find((account : AccountType) => account.id === loggedAccountID[0]);
        setUser(loggedAccount);
    }, [accounts]);

    useEffect(() => {
            if (loggedSessionAccountID === undefined && loggedLocalAccountID === undefined) {
                window.open("/login", "_self");
            }
    }, []);
    function newReminderModal() {
        const reminderInfos = {
            type: 'new',
            reminderEditID: ""
        }
        dispatch(showReminderModal(reminderInfos));
    };
    return (
        <Corpo sx={{height: 'auto', minHeight: '100vh', paddingBottom: '20px'}}>
            <Header userID={user.id} userName={user.username} />
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
                    <Lembretes>
                        {!user.reminders.length && <AvisoLembreteVazio>
                            <Nuvemlembretes>
                                <Typography variant="subtitle2">Você ainda não tem lembretes...</Typography>
                                <Typography variant="subtitle2">Clique em "adicionar" para criar um!</Typography>
                            </Nuvemlembretes>
                        </AvisoLembreteVazio>}
                        <ModalLembrete accountId={user.id} />
                        <TabelaLembretes>
                            {!!reminders.length && reminders.map((reminder) => (
                                <Lembrete key={reminder.id} accountId={user.id} id={reminder.id} acao={reminder.acao} data={reminder.data} hora={reminder.hora} descricao={reminder.descricao} />
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