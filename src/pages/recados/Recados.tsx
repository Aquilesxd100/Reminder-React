import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Corpo } from "../../styles/global";
import Header from "../../components/header/Header";
import Lembrete from "../../components/recadosComponents/lembrete/Lembrete";
import { Typography } from "@mui/material";
import LinhaEspacamento from "../../components/recadosComponents/linhaEspaco/LinhaEspacamento";
import ModalLembrete from "../../components/recadosComponents/modalLembrete/ModalLembrete";
import { RootState } from "../../redux/configureStore";
import { AccountType } from "../../types/userTypes";
import { LembreteType } from "../../types/reminderTypes";
import { RecadosDiv, BarraTituloTabela, TituloTabela, DivNovoLembrete, BotaoAdicionar, SecaoLembretes, Lembretes,TabelaLembretes, AvisoLembreteVazio, Nuvemlembretes } from "./RecadosStyled";
import remindersOrganizer from "../../helpers/reminders/remindersOrganizer";
import { showReminderModal } from "../../redux/slices/modalManagerSlice";
function Recados() {
    const dispatch = useDispatch();
    const { loggedSessionAccountID } = useSelector((state: RootState) => state.loggedSessionAccount);
    const { loggedLocalAccountID } = useSelector((state: RootState) => state.loggedLocalAccount);
    const { accounts } = useSelector((state: RootState) => state.users);
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
        const loggedAccountID : string | undefined = loggedSessionAccountID !== undefined ? loggedSessionAccountID : loggedLocalAccountID;
        const loggedAccount : AccountType | undefined = accounts.find((account : AccountType) => account.id === loggedAccountID);
        if(loggedAccount === undefined)return;
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