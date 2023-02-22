import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { RootState } from "../../../redux/configureStore";
import { AccountType } from "../../../types/userTypes";
import { LembreteType, ReminderInfos } from "../../../types/reminderTypes";
import { MinimumDateType } from "../../../types/otherTypes";
import { FormularioLembrete, InputAcao, InputData, InputDescricao, InputHora, LabelInput, TabelaLembrete, ThAcao, ThData, ThDescricao, ThHora} from "./modalLembreteStyled";
import { BotaoCancelar, BotaoConfirmar, DivBotoes } from "../../../styles/global";
import dateOrganizerBR from "../../../helpers/reminders/dateOrganizerBR";
import initialUpperLetter from "../../../helpers/reminders/initialUpperLetter";
import setMinimumHour from "../../../helpers/reminders/setMinimumHour";
import setMinimumDate from "../../../helpers/reminders/setMinimumDate";
import { hideReminderModal } from "../../../redux/slices/modalManagerSlice";
import { editReminder, newReminder } from "../../../redux/slices/userSlice";

function ModalLembrete(lembreteInfo : ReminderInfos) {
    const { accounts } = useSelector((state : RootState) => state.users);
    const dispatch = useDispatch();

    const modalVisualProps = {
        pointerEvents: 'none',
        opacity: '0',
    }
    const [modalVisual, setModalVisual] = useState(modalVisualProps);
    const { showReminderModalState } = useSelector((state : RootState) => state.modalManager);

    useEffect(() => {
        if (showReminderModalState.show) {
            if (showReminderModalState.type === "new") {
                inputAcao.current.value = "";
                inputData.current.value = "";
                inputHora.current.value = "";
                inputDescricao.current.value = "";
            }
            else if (showReminderModalState.type === "edit") {
                const accountIndex = accounts.findIndex((account : AccountType) => account.id === lembreteInfo.accountId);
                const reminder : LembreteType | undefined = accounts[accountIndex].reminders.find((reminder : LembreteType) => reminder.id === showReminderModalState.reminderEditID);
                if(reminder === undefined)return;               
                inputAcao.current.value = reminder.acao;
                inputData.current.value = dateOrganizerBR(reminder.data, "NA-Format");
                inputHora.current.value = reminder.hora;
                inputDescricao.current.value = reminder.descricao;
            }
            setModalVisual({
                pointerEvents: 'auto',
                opacity: '1',  
            });
            inputData.current.setAttribute("min", setMinimumDate());
        }
        else {
            setModalVisual(modalVisualProps);
        }

    }, [showReminderModalState])

    const inputAcao : any = useRef();    
    const inputData : any = useRef();
    const inputHora : any = useRef();
    const inputDescricao : any = useRef();
    function submitHandle() {
        dispatch(hideReminderModal())
        if (showReminderModalState.type === "new") {
            dispatch(newReminder({
                accountID: lembreteInfo.accountId,
                acao: initialUpperLetter(inputAcao.current.value),
                data: dateOrganizerBR(inputData.current.value, "BR-Format"),
                hora: inputHora.current.value,
                descricao: initialUpperLetter(inputDescricao.current.value),
            }));
        }
        else if (showReminderModalState.type === "edit") {
            dispatch(hideReminderModal());
            dispatch(editReminder({
                reminderID: showReminderModalState.reminderEditID,
                accountID: lembreteInfo.accountId,
                acao: initialUpperLetter(inputAcao.current.value),
                data: dateOrganizerBR(inputData.current.value, "BR-Format"),
                hora: inputHora.current.value,
                descricao: initialUpperLetter(inputDescricao.current.value),
            }));
        };
    }
    function inputDateHandle(inputDateValue : string) {
        if(!inputHora.current) return;
        const dateHandle : MinimumDateType = setMinimumHour(inputDateValue);
        dateHandle.type === "set" ? inputHora.current.setAttribute('min', dateHandle.minDate) : inputHora.current.removeAttribute('min');
    }
    return(
        <FormularioLembrete onSubmit={((event) => { event.preventDefault(); submitHandle() })} sx={modalVisual}>
            <TabelaLembrete>
                <tbody>
                    <tr>
                        <ThAcao>
                            <LabelInput htmlFor="input-acao">Ação:&nbsp;</LabelInput>
                            <InputAcao ref={inputAcao} type="text" required autoComplete="off" id="input-acao" maxLength={21} />
                        </ThAcao>
                        <ThData>
                            <LabelInput htmlFor="input-data">Data:&nbsp;</LabelInput>
                            <InputData onChange={((event) => { inputDateHandle(event.target.value) })} ref={inputData} type="date" required autoComplete="off" id="input-data" maxLength={8} max="2100-10-10" />
                        </ThData>
                        <ThHora>
                            <LabelInput htmlFor="input-hora">Hora:&nbsp;</LabelInput>
                            <InputHora ref={inputHora} type="time" required autoComplete="off" id="input-hora" />
                        </ThHora>
                    </tr>
                    <tr>
                        <ThDescricao colSpan={4} sx={{boxShadow: '4px 3.5px 3.5px #000000;'}}>
                            <LabelInput htmlFor="input-descricao" sx={{ marginBottom: '5px' }}>Descrição:&nbsp;</LabelInput>
                            <InputDescricao ref={inputDescricao} maxLength={66} id="input-descricao" required autoComplete="off" />
                        </ThDescricao>
                    </tr>
                </tbody>
            </TabelaLembrete>
            <DivBotoes>
                <BotaoConfirmar type="submit" variant="contained" size="large" startIcon={<CheckCircleIcon />}>
                    Confirmar
                </BotaoConfirmar>
                <BotaoCancelar onClick={(() => { dispatch(hideReminderModal()) })} variant="contained" size="large" startIcon={<CancelIcon />}>
                    Cancelar
                </BotaoCancelar>
            </DivBotoes>
        </FormularioLembrete>
    )
};
export default ModalLembrete;